import React from 'react';
import './usersidebar.css';

const UserSideBar = () => {
	return (
		<aside className="user-side-bar">
			<div className="sidebar-header">
				<img className="sidebar-pic-1" src="instagram-logo.png" alt="" />
				<img className="sidebar-pic-2 width-20" src="insta-logo.png" alt="" />
			</div>
			<div className="user-side-image">
				<img className="user-side-avatar" src="user.jpg" />
				<p className="sidebar-name-para">{'Bhavesh'}</p>
				<p className="sidebar-username-para">{'Bhav_09'}</p>
			</div>
			<div className="sections-into-3">
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
			<div className="sidebar-list">
				<div className="sidebar-list-item">
					<i className='pt-2'>
						<span class="material-symbols-outlined">grid_view</span>
					</i>
					<span>Feed</span>
				</div>
				<div className="sidebar-list-item">
					<i className='pt-2 sidebar-list-icon'>
						<span class="material-symbols-outlined">send</span>
					</i>
					<span>Direct Messaging</span>
				</div>
				<div className="sidebar-list-item">
					<i className='pt-2'>
						<span class="material-symbols-outlined">settings</span>
					</i>
					<span>Setting</span>
				</div>
				<div className="sidebar-list-item sidebar-list-item-end">
				<i className='pt-2'>
					<span class="material-symbols-outlined">logout</span>
				</i>
				<span>Logout</span>
			</div>
			</div>
			
		</aside>
	);
};

export default UserSideBar;
