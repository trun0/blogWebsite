dotenv.config();
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



async function main() {
	await mongoose.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, () => { console.log("mongoose running") });
}
main().catch(err => console.log(err));
// mongoose.connect("process.env.DB_URI", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });

const PORT = process.env.PORT || 8000;

const blogSchema = new mongoose.Schema({
	title: String,
	body: String,
	composedBy: String
});

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	userBlogList: [blogSchema]
});

const contactSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String
});

const User = new mongoose.model("User", userSchema);
const Blog = new mongoose.model("Blog", blogSchema);
const Contact = new mongoose.model("Contact", contactSchema);

app.route("/signupServer")
	.post(function (req, res) {
		const newUsername = req.body.username;
		const password = req.body.password;
		User.findOne({ username: newUsername }, (err, findUser) => {
			if (err)
				console.log(err);
			else if (!findUser) {
				console.log("new user");
				const newUser = new User({ username: newUsername, password: password, userBlogList: [] });
				newUser.save();
				res.send(false);
			}
			else {
				res.send(true);
				console.log("User already exist");
			}
		})
	})


app.route("/loginServer")
	.post(function (req, res) {
		var username = req.body.username;
		var password = req.body.password;

		User.findOne({ username: username, password: password }, (err, findUser) => {
			if (err)
				console.log(err);
			else if (findUser) {
				res.send(true);
				console.log("User found");
			}
			else {
				res.send(false);
			}
		})
	});

app.route("/composeServer")
	.post(function (req, res) {
		var postTitle = req.body.postTitle;
		var postBody = req.body.postBody;
		var user = req.body.user;

		User.findOne({ username: user }, (err, findData) => {
			if (err)
				console.log(err);
			else if (findData) {
				const newBlog = new Blog({ title: postTitle, body: postBody, composedBy: user });
				newBlog.save();
				findData.userBlogList.push(newBlog);
				findData.save();
				res.send(true);
			}
			else {
				res.send(false);
			}
		})

	})


app.route("/blogServer")
	.get(function (req, res) {
		console.log("getting all blogs");
		Blog.find({}, (err, blogs) => {
			if (err) console.log(err);
			const reverseArr = blogs;
			reverseArr.reverse();
			res.send(reverseArr);
		});
	});

app.route("/myblogServer")
	.post(function (req, res) {
		var userName = req.body.user;
		User.findOne({ username: userName }, (err, findUser) => {
			if (err)
				console.log(err);
			else if (findUser) {
				const reverseArr = findUser.userBlogList;
				reverseArr.reverse();
				res.send(reverseArr);
			}
		})
	})

app.route("/deleteBlogServer")
	.post(function (req, res) {
		var id = req.body.id;
		var userName = req.body.user;
		console.log(id + " " + userName);
		Blog.deleteOne({ _id: id }, (err) => {
			if (err)
				console.log(err);
		});
		User.findOne({ username: userName }, (err, findUser) => {
			if (err)
				console.log(err);
			else if (findUser) {
				const arr = findUser.userBlogList;
				for (var i = 0; i < arr.length; i++) {
					console.log(arr[i]._id + " " + id);
					if (arr[i]._id == id) {
						console.log("Deleting from myblog");
						findUser.userBlogList.splice(i, i + 1);
						findUser.save();
						break;
					}
				}
			}
		})
		res.send(true);
	});

app.route("/contactServer")
	.post(function (req, res) {
		const name = req.body.name;
		const email = req.body.email;
		const message = req.body.message;
		console.log("hello contact");
		const newContact = new Contact({ name: name, email: email, message: message });
		newContact.save();
		res.send(true);

	});


app.get("/server", (req, res) => {
	res.send({ message: "i have a message" });
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	})
}

app.listen(PORT, () => {
	console.log("Server started on port " + PORT);
}
);