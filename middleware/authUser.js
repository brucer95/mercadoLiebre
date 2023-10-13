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
	if (!req.session.user) {
		return res.redirect("/");
	}
	const admin = JSON.stringify(req.session.user.admin);
	console.log(admin);
	if (admin == 0) {
		return res.redirect("/");
	} else {
		next();
	}
}

module.exports = { allowAdmin, allowSignedIn, allowUnsignedIn };
