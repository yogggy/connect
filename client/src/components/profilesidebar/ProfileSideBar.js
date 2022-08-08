import React from 'react';
import './profilesidebar.css';
const ProfileSideBar = () => {
	return (
		<aside className="user-side-bar">
			<div className="sidebar-header">
				<img className="sidebar-pic-1" src="instagram-logo.png" alt="" />
				<img className="sidebar-pic-2 width-20" src="insta-logo.png" alt="" />
			</div>
			<div className="user-side-image">
				<img className="user-side-avatar" src="user.jpg" />
			</div>
			<div className="profile-section-into-3">
				<div className="post-sec-1">
					<span>
						<strong>{42}</strong>
					</span>
					<span className="text-muted">Posts</span>
				</div>
				<div className="follower-sec-2 post-sec-1 bor">
					<span>
						<strong>{'42.3k'}</strong>
					</span>
					<span className="text-muted">Followers</span>
				</div>
				<div className="following-sec-3 post-sec-1 bor">
					<span>
						<strong>{2000}</strong>
					</span>
					<span className="text-muted">Following</span>
				</div>
			</div>
			<div className="follow-btn">
				{/* <span className="profile-follow-btn">Follow</span> */}
				<span className="profile-followed-btn">
					<i className="profile-tick-icon">
						<span className="material-symbols-outlined">check_small</span>
					</i>
					<span>Followed</span>
				</span>
			</div>
			<div className="profile-description">
				<p className="sidebar-name-para">{'Bhavesh'}</p>
				<p>
					<strong>Description:-</strong>
				</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
			</div>
			<strong className="px-4 py-2">Stories</strong>
			<div className="profile-stories">
				<img className="profile-side-avatar" src="user.jpg" alt="" />
				<img className="profile-side-avatar" src="user.jpg" alt="" />
				<img className="profile-side-avatar" src="user.jpg" alt="" />
				<img className="profile-side-avatar" src="user.jpg" alt="" />
				<img className="profile-side-avatar" src="user.jpg" alt="" />
				<img className="profile-side-avatar" src="user.jpg" alt="" />
			</div>
		</aside>
	);
};

export default ProfileSideBar;
