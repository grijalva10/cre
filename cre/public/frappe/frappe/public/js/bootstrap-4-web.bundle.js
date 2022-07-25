
// multilevel dropdown
$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
	e.preventDefault();
	e.stopImmediatePropagation();
	if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	}
	var $subMenu = $(this).next(".dropdown-menu");
	$subMenu.toggleClass('show');


	$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
		$('.dropdown-submenu .show').removeClass("show");
	});

	return false;
});

frappe.get_modal = function (title, content) {
	return $(
		`<div class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-dialog-scrollable" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">${title}</h5>
						<button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close">
						${frappe.utils.icon('close-alt', 'sm', 'close-alt')}
						</button>
					</div>
					<div class="modal-body">
						${content}
					</div>
					<div class="modal-footer hidden">
						<button type="button" class="btn btn-modal-close" data-bs-dismiss="modal">
							<i class="octicon octicon-x visible-xs" style="padding: 1px 0px;"></i>
							<span class="hidden-xs">${__("Close")}</span>
						</button>
						<button type="button" class="btn btn-sm btn-primary invisible"></button>
					</div>
				</div>
			</div>
		</div>`
	);
};

frappe.ui.Dialog = class Dialog extends frappe.ui.Dialog {
	get_primary_btn() {
		return this.$wrapper.find(".modal-footer .btn-primary");
	}

	set_primary_action(label, click) {
		this.$wrapper.find('.modal-footer').removeClass('invisible');
		return super.set_primary_action(label, click)
			.removeClass('invisible');
	}

	make() {
		super.make();
		if (this.fields) {
			this.$wrapper.find('.section-body').addClass('w-100');
		}
	}
};
