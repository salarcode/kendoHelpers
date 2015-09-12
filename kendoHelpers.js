kendoHelpers={
	///<summary>Pack of helper methods to make your life easier when working with Kendo UI® framework.</summary>
	///<author>Salar Khalilzadeh</author>
	///<source>https://github.com/salarcode/kendoHelpers</source>
	datasource:{
		
	},
	grid:{
		getColumnDefinition: function (kendoGrid, fieldName) {
			///<summary>Gets the grid column definition</summary>
			try {
				var cols = kendoGrid.columns;
				for (var i = 0; i < cols.length; i++) {
					var col = cols[i];
					if (col.field === fieldName)
						return col;
				}
			} catch (e) {
				console.warn("getColumnDefinition failed, fieldName=" + fieldName, kendoGrid, e);
			}
			return null;
		},
		getDataItemById: function (kendoGrid, id) {
			///<summary>Returns the dataItem found by Id</summary>
			try {
				return kendoGrid.dataSource.get(id);
			} catch (e) {
				console.warn("getDataItemById failed, id=" + id + " for ", kendoGrid, e);
			}
			return null;
		},
		getSelectedItem: function (kendoGrid) {
			///<summary>Returns DataItem of the selected row. Selectable config is required</summary>
			try {
				var selected = kendoGrid.select();
				return kendoGrid.dataItem(selected);
			} catch (e) {
				console.warn("getSelectedItem has for ", kendoGrid, e);
			}
			return null;
		},
		getSelectedItemsList: function (kendoGrid) {
			///<summary>Returns the list of DataItems from the selected rows. Selectable config is required</summary>
			try {
				var selected = kendoGrid.select();
				if (selected.length == 0) {
					return null;
				} else {
					var dataItems = [];

					for (var i = 0; i < selected.length; i++) {
						dataItems.push(kendoGrid.dataItem(selected[i]));
					}

					return dataItems;
				}
			} catch (e) {
				console.warn("getSelectedItemsList has for ", kendoGrid, e);
			}
			return null;
		},
		getSelectedDataItemByCurrentCell: function (kendoGrid) {
			///<summary>Returns DataItem of the current active cell. Selectable config is not required.</summary>
			try {
				var cell = kendoGrid.current();
				if (cell == null || cell.length == 0)
					return null;
				var row = cell.parent();
				if (row == null || row.length == 0)
					return null;

				// retrieving from the row
				return kendoGrid.dataItem(row);
			} catch (e) {
				console.warn("getSelectedDataItemByCurrentCell failed for ", kendoGrid, e);
			}
			return null;
		},

	},
	tabstrip:{
		displayLoading: function (tabstrip) {
			///<summary>Displays loading process on the tabStrip</summary>
			if (tabstrip == null)
				return;

			function showLoading() {
				window.setTimeout(function () {
					kendo.ui.progress(tabstrip.element, true);
				});
			}

			function hideLoading() {
				window.setTimeout(function () {
					kendo.ui.progress(tabstrip.element, false);
				});
			}

			tabstrip.bind("select", showLoading);
			tabstrip.bind("activate", hideLoading);
			tabstrip.bind("contentLoad", hideLoading);
		},
	},
	treeview:{
		applyRightClickSelection: function (treeview, onRightClick) {
			///<summary>Makes treeview select the item on the right click</summary>
			var treeviewElement = treeview.element;
			if (treeviewElement == null) {
				console.error("applyRightClickSelection failed because of null treeview.element", treeview);
				return;
			}
			treeviewElement.on('mousedown', '.k-item', function (event) {
				if (event.which === 3) {
					event.stopPropagation(); // to avoid propagation of this event to the root of the treeview

					treeview.select(this);

					if (onRightClick) {
						onRightClick();
					}
				}
			});
		},
		treeViewCheckTheSubItems: function (node, check, checkSubItems) {
			///<summary>Checks the sub items of a node</summary>
			var nodeChildren = node.children.view();
			for (var i = 0; i < nodeChildren.length; i++) {
				var n = nodeChildren[i];
				n.checked = check;
				n.trigger("change", { field: "checked" });

				if (checkSubItems && n.hasChildren) {
					kendoHelpers.treeview.treeViewCheckTheSubItems(n, check, checkSubItems);
				}
			}
		},
	},
	upload:{
		hasAnyFileSelected: function (kendoUpload) {
			///<summary>Check if any file is selected</summary>
			if (!kendoUpload.wrapper) {
				return false;
			}
			return kendoUpload.wrapper.find(".k-file").length > 0;
		},

		getUploadElements: function (kendoUpload) {
			///<summary>Retrieving the upload elements from the upload control</summary>
			if (!kendoUpload.wrapper) {
				return null;
			}
			return kendoUpload.wrapper.find('[data-role=upload]');
		},
	},
	dropdown:{
		
	},
	validator:{
		isValid: function (form) {
			///<summary></summary>
			try {
				form = $(form);
				if (form == null || form.length == 0)
					return false;

				var validator = form.kendoValidator().data("kendoValidator");
				if (!validator.validate())
					return false;
				return true;
			} catch (e) {
				console.warn("isValid is failed, ", form, e);
				return false;
			}
		},
		hideMessages: function (form) {
			///<summary></summary>
			try {
				form = $(form);
				if (form == null || form.length == 0)
					return;

				var validator = form.kendoValidator().data("kendoValidator");
				validator.hideMessages();
			} catch (e) {
				console.warn("hideMessages has failed>", form, e);
			}
		},
	},
	getDataItemById: function (kendoWidget, id) {
		///<summary>Returns the dataItem found by Id</summary>
		try {
			return kendoWidget.dataSource.get(id);
		} catch (e) {
			console.warn("getDataItemById failed, id=" + id + " for ", kendoWidget, e);
		}
		return null;
	},

};