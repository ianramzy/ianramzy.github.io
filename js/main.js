function loadProjects(loadTarget) {
	console.log(loadTarget);
	$('.filter li').removeClass();
	$('#filter-' + loadTarget).addClass('active');
	var isLoaded = true;
	switch (loadTarget) {
		case 'all':
			renderProjects(featured);
			$('.load-more').removeClass('display-none');
			$('.more-work').removeClass('isLoaded');
			isLoaded = false;
			break;

		case 'all-more':
			addProjects();
			$('#filter-all').addClass('active');
			break;

		case 'frontend':
			console.log("frontend");
			renderProjects(frontend);
			break;

		case 'datascience':
			console.log("datascience");
			renderProjects(datascience);
			break;

		case 'game':
			console.log("game");
			renderProjects(game);
			break;

		// case 'hackathon':
		// 	console.log("hackathon");
		//
		// 	renderProjects(hackathon);
		// 	break;
	}

	if (isLoaded) {
		$('.load-more').addClass('display-none');
		$('.more-work').addClass('isLoaded');
	}
}

function renderProjects(projects) {
	$('.js-project--container').html('');
	$('.js-project--container').html(projects);
}

function addProjects() {
	$('.js-project--container').append(all);
}

//load in all projects for default
loadProjects('all');