(() => {
  // frappe-html:/home/ubuntu/environment/bench3/apps/cre/cre/public/frappe/frappe/public/js/frappe/ui/list/list_sidebar.html
  frappe.templates["list_sidebar"] = `
<ul class="list-unstyled sidebar-menu user-actions hide">
	<li class="divider"></li>
</ul>
<ul class="list-unstyled sidebar-menu">
	<div class="sidebar-section views-section hide">
		<li class="sidebar-label">
		</li>
		<div class="current-view">
			<li class="list-link">
				<a class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span class="selected-view ellipsis">
					</span>
					<span>
						<svg class="icon icon-xs">
							<use xlink:href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu views-dropdown" role="menu">
				</ul>
			</li>
			<li class="sidebar-action">
				<a class="view-action"></a>
			</li>
		</div>
	</div>

	<div class="sidebar-section filter-section">
		<li class="sidebar-label">
			{{ __("Filter By") }}
		</li>

		<div class="list-group-by">
		</div>

		<div class="list-tags">
			<li class="list-stats list-link">
				<a
					class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span>{{ __("Tags") }}</span>
					<span>
						<svg class="icon icon-xs">
							<use xlink:href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu list-stats-dropdown" role="menu">
					<div class="dropdown-search">
						<input type="text" placeholder={{__("Search") }} data-element="search" class="form-control input-xs">
					</div>
					<div class="stat-result">
					</div>
				</ul>
			</li>
			<li class="sidebar-action show-tags">
				<a class="list-tag-preview">{{ __("Show Tags") }}</a>
			</li>
		</div>
	</div>

	<div class="sidebar-section save-filter-section">
		<li class="sidebar-label">
			{{ __("Save Filter") }}
		</li>
		<li class="list-filters list-link"></li>
</ul>
`;

  // frappe-html:/home/ubuntu/environment/bench3/apps/cre/cre/public/js/jmg_list_sidebar.html
  frappe.templates["jmg_list_sidebar"] = `<ul class="standard-sidebar leaderboard-sidebar">
	
</ul>

<ul class="list-unstyled sidebar-menu user-actions hide">
	<li class="divider"></li>
</ul>
<ul class="list-unstyled sidebar-menu">
	<div class="sidebar-section views-section hide">
		<li class="sidebar-label">
		</li>
		<div class="current-view">
			<li class="list-link">
				<a class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span class="selected-view ellipsis">
					</span>
					<span>
						<svg class="icon icon-xs">
							<use xlink:href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu views-dropdown" role="menu">
				</ul>
			</li>
			<li class="sidebar-action">
				<a class="view-action"></a>
			</li>
		</div>
	</div>

	<div class="sidebar-section filter-section">
		<li class="sidebar-label">
			{{ __("Filter By") }}
		</li>

		<div class="list-group-by">
		</div>

		<div class="list-tags">
			<li class="list-stats list-link">
				<a
					class="btn btn-default btn-sm list-sidebar-button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href="#"
				>
					<span>{{ __("Tags") }}</span>
					<span>
						<svg class="icon icon-xs">
							<use xlink:href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu list-stats-dropdown" role="menu">
					<div class="dropdown-search">
						<input type="text" placeholder={{__("Search") }} data-element="search" class="form-control input-xs">
					</div>
					<div class="stat-result">
					</div>
				</ul>
			</li>
			<li class="sidebar-action show-tags">
				<a class="list-tag-preview">{{ __("Show Tags") }}</a>
			</li>
		</div>
	</div>

	<div class="sidebar-section save-filter-section">
		<li class="sidebar-label">
			{{ __("Save Filter") }}
		</li>
		<li class="list-filters list-link"></li>
</ul>
`;
})();
//# sourceMappingURL=cre.bundle.XMHJOMEC.js.map
