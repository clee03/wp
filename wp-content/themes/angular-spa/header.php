<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?> ng-app="wpAngularTheme">
<head>
  	<meta charset="<?php bloginfo( 'charset' ); ?>" />
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  	<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  	<meta name="author" content="Ciplex">
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  	<link rel="shortcut icon" href="/favicon.ico">
  	<link rel="apple-touch-icon" href="/favicon.png">
   	<?php wp_head();?>
    <!--[if lt IE 9]>
	    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <link href='https://fonts.googleapis.com/css?family=Yellowtail|Catamaran:400,900,100' rel='stylesheet' type='text/css'>
</head>
<body <?php body_class(); ?>>
<!-- <header class="container header">
		<div class="row">
			<div class="col-sm-7">
				<h1>
					<a ui-sref="list">
						<?php echo bloginfo('name'); ?>
					</a>
				</h1>
			</div>
			<div class="col-sm-4 col-sm-offset-1">
				<span>by: <a href="http://www.roysivan.com">Roy Sivan</a></span>
			</div>
		</div>
</header> -->
<div class="container-fluid content-wrapper">
	<div class="container container-fluid">

<div class="row row-offcanvas row-offcanvas-left">

	 <div class="col-xs-12 col-sm-6 sidebar-offcanvas" id="sidebar" role="navigation">

	 	 	 	<!-- <video autoplay  poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop> -->
	 	 	 	<!-- <video autoplay poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid"> -->
	 	 	 	<video autoplay id="bgvid">
				  <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
				<!-- <source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm"> -->
				<!-- <source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4"> -->
				<source src="dog.webm" type="video/webm">
				<source src="dog.m4v" type="video/mp4">
				</video>
	 	 	<div class="row">
				<div class="col-sm-12">
					<h1>
						<a ui-sref="home">
							<?php echo bloginfo('description'); ?>
						</a>
					</h1>
				</div>
			</div>
			<div class="row">
            <div class="col-sm-12" id="header-content">
			<p>
				<a href="https://www.linkedin.com/pub/cathy-lee/10/730/978">linkedin</a> |
                <a href="https://github.com/clee03">github</a> |
                <a href="http://www.twitter.com/cllckwrko">twitter</a>
            </p>
            </div>
          </div>
            <ul class="nav">
              <li class=""><a ui-sref="list">Project + Skills List</a></li>
              <li><a ui-sref="resume">Ol' School Resume</a></li>
              <li><a ui-sref="about">About + Contact</a></li>
            </ul>
        </div>

  <div class="col-xs-12 hidden" id="top-nav" role="navigation" style="background-color:white;">
    <div class="col-xs-6">
      <h1 class="logo"><a ui-sref="home">
        <?php echo bloginfo('description'); ?>
      </a></h1>
    </div>
    <div class="col-xs-6 top-div">
    <ul class="nav top">
      <li class="active"><a ui-sref="list">Project + Skills List</a></li>
      <li><a ui-sref="resume">Ol' School Resume</a></li>
      <li><a ui-sref="about">About + Contact</a></li>
    </ul>
  </div>
  </div>
