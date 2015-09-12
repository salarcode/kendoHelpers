# kendoHelpers
Pack of helper methods to make your life easier when working with Kendo UI® framework.


##NuGet Package 
```
PM> Install-Package Salar.kendoHelpers
```
This package will install kendoHelpers.js in `/scripts/kendoHelpers.js`

It is easy to use, just add the kendoHelper.js to your project/page and voila, you can now use it.

###How to use it:
```js
// Get the grid
var grid = $('#SampleGrid').data('kendoGrid');

// Call your desired function
var dataItem = kendoHelpers.grid.getSelectedDataItem(grid);

// Manipulate the results
if (dataItem != null){
    // dataItem.MyId = ...
}
```

###Helpers list:
Here is the list of all available helpers.

####Grid
Available at `kendoHelpers.grid.*`

* <font color="navy">**`getDataItemById (kendoGrid, id)`**</font>

    Returns the dataItem found by Id.

    The result is DataItem if found, otherwise null.

* <font color="navy">**`getColumnDefinition (kendoGrid, fieldName)`**</font>

    Gets the grid column definition.

    The result is Kendo column definition if found, otherwise null.

* <font color="navy">**`getSelectedDataItem (kendoGrid)`**</font>

    Returns DataItem of the selected row. Selectable config is required.

    The result is DataItem if found, otherwise null.

* <font color="navy">**`getSelectedDataItemsList (kendoGrid)`**</font>

    Returns the list of DataItems from the selected rows. Selectable config is required.

    The result is DataItem Array if found, otherwise null.

* <font color="navy">**`getSelectedDataItemByCurrentCell (kendoGrid)`**</font>

    Returns DataItem of the current active cell. Selectable config is not required.

    The result is DataItem if found, otherwise null

* <font color="navy">**`selectNextCell (kendoGrid, cell, editCell, editRow)`**</font>

    Selects the next cell of the current cell

* <font color="navy">**`selectCell (kendoGrid, cell, editCell, editRow)`**</font>

    Selects and activates the current/specified cell of the grid.

* <font color="navy">**`selectCellByIndex (kendoGrid, colIndex, cell, editCell, editRow)`**</font>

    Selects the next cell of the grid

* <font color="navy">**`refreshAndKeepEditing (kendoGrid, editTheCurrent)`**</font>

    Refreshes the grid, keeps the cell in editing mode if there is any.

* <font color="navy">**`selectRowByUid (kendoGrid, rowUid)`**</font>

    Activates and selects the specified row by Uid.

* <font color="navy">**`selectRowByIndex (kendoGrid, rowNumber, editRow, colIndex, editCell)`**</font>

    Activates and selects the row by row number. Also selects the cell if requested

* <font color="navy">**`selectByCondition (kendoGrid, conditionFunc)`**</font>

    Selects a row if provided function applies

* <font color="navy">**`selectCellByCondition (kendoGrid, conditionFunc, editCell)`**</font>

    Activates a cell by provided function.

* <font color="navy">**`eventRowDoubleClick (kendoGrid, onDoubleClick)`**</font>

    Double click event on rows for grid.

* <font color="navy">**`eventCellDoubleClick (kendoGrid, onDoubleClick)`**</font>

    Double click event on cells for grid.

####TabStrip
Available at `kendoHelpers.tabstrip.*`

* <font color="navy">**`displayLoading (tabstrip)`**</font>

    Displays loading process on the tabStrip.

####TreeView
Available at `kendoHelpers.treeview.*`

* <font color="navy">**`applyRightClickSelection (treeview, onRightClick)`**</font>

    Makes treeview select the item on the right click

* <font color="navy">**`checkSubItems (node, check, checkSubItems)`**</font>

    Checks the node and its sub items

* <font color="navy">**`getCheckedItems (treeview, uncheck)`**</font>

    Returns the checked items if there is any.

    The result is DataItem Array if found, otherwise empty array.

####Upload
Available at `kendoHelpers.upload.*`

* <font color="navy">**`hasAnyFileSelected (kendoUpload)`**</font>

    Check if any file is selected.

    The result is boolean.

* <font color="navy">**`getUploadElements (kendoUpload)`**</font>

    Retrieving the upload elements from the upload control.

    The result is Array of elements if found, otherwise null.

####Validator
Available at `kendoHelpers.validator.*`

* <font color="navy">**`isValid (form)`**</font>

    Triggers kendo validation for form and returns the status of form.

    The result is boolean.

* <font color="navy">**`hideMessages (form)`**</font>

    Enables kendo validation for form then hides any visible message.

    The result is boolean.

####DataSource
Available at `kendoHelpers.datasource.*`

* <font color="navy">**`findDataItemByUid (data, uid)`**</font>

    Finds the dataItem by Uid.

* <font color="navy">**`findDataIndexByUid (data, uid)`**</font>

    Finds the index of Uid.

