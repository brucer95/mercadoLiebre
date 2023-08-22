function allowUnsignedIn(req, res, next) {
	if (!req.session.user) {
		next();
	} else {
		res.redirect("/");
	}
}

function allowSignedIn(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		res.redirect("/");
	}
}

function allowAdmin(req, res, next) {
	if (req.session.user.type === "admin") {
		next();
	} else {
		res.redirect("/");
	}
}

module.exports = { allowAdmin, allowSignedIn, allowUnsignedIn };
