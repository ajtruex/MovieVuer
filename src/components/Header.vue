<template>
    <nav class="navbar fixed-top navbar-toggleable-sm bg-inverse navbar-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/"><img src="movievuer.png" width="64px" height="45px" alt=""><span style="margin-left:16px; margin-top: 20px; font-size:24px">MovieVuer</span></a>
        <div class="collapse navbar-collapse" id="navbarText">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="nav nav-pills nav-fill">
                            <!-- <router-link to="/" tag="li" class="nav-link" activeClass="active" exact>
                            <a>Home</a>
                            </router-link> -->
                            <router-link to="/" tag="li" class="nav-link" activeClass="active" exact>
                                <a>In Theaters</a>
                            </router-link>
                            <router-link to="/popular" tag="li" class="nav-link" activeClass="active">
                                <a>Popular</a>
                            </router-link>
                            <router-link to="/upcoming" tag="li" class="nav-link" active-class="active" exact>
                                <a>Upcoming</a>
                            </router-link>
                            <router-link to="/top" tag="li" class="nav-link" active-class="active" exact>
                            <a>Top Rated</a>
                            </router-link>
                            <router-link to="/login" tag="li" class="nav-link" active-class="active" exact>
                            <a>Login</a>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style>
.nav-pills .nav-link.active {
	background-color: #41b883;
}
.nav-pills .nav-link.active a {
	color: black;
	text-decoration: none;
}
a:hover {
	text-decoration: none;
	font-weight: bold;
	color: #41b883;
}
</style>
