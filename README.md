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

* **`getDataItemById (kendoGrid, id)`**

    Returns the dataItem found by Id.

    The result is DataItem if found, otherwise null.

* **`getColumnDefinition (kendoGrid, fieldName)`**

    Gets the grid column definition.

    The result is Kendo column definition if found, otherwise null.

* **`getSelectedDataItem (kendoGrid)`**

    Returns DataItem of the selected row. Selectable config is required.

    The result is DataItem if found, otherwise null.

* **`getSelectedDataItemsList (kendoGrid)`**

    Returns the list of DataItems from the selected rows. Selectable config is required.

    The result is DataItem Array if found, otherwise null.

* **`getSelectedDataItemByCurrentCell (kendoGrid)`**

    Returns DataItem of the current active cell. Selectable config is not required.

    The result is DataItem if found, otherwise null

* **`selectNextCell (kendoGrid, cell, editCell, editRow)`**

    Selects the next cell of the current cell

* **`selectCell (kendoGrid, cell, editCell, editRow)`**

    Selects and activates the current/specified cell of the grid.

* **`selectCellByIndex (kendoGrid, colIndex, cell, editCell, editRow)`**

    Selects the next cell of the grid

* **`refreshAndKeepEditing (kendoGrid, editTheCurrent)`**

    Refreshes the grid, keeps the cell in editing mode if there is any.

* **`selectRowByUid (kendoGrid, rowUid)`**

    Activates and selects the specified row by Uid.

* **`selectRowByIndex (kendoGrid, rowNumber, editRow, colIndex, editCell)`**

    Activates and selects the row by row number. Also selects the cell if requested

* **`selectByCondition (kendoGrid, conditionFunc)`**

    Selects a row if provided function applies

* **`selectCellByCondition (kendoGrid, conditionFunc, editCell)`**

    Activates a cell by provided function.

* **`eventRowDoubleClick (kendoGrid, onDoubleClick)`**

    Double click event on rows for grid.

* **`eventCellDoubleClick (kendoGrid, onDoubleClick)`**

    Double click event on cells for grid.

####TabStrip
Available at `kendoHelpers.tabstrip.*`

* **`displayLoading (tabstrip)`**

    Displays loading process on the tabStrip.

####TreeView
Available at `kendoHelpers.treeview.*`

* **`applyRightClickSelection (treeview, onRightClick)`**

    Makes treeview select the item on the right click

* **`checkSubItems (node, check, checkSubItems)`**

    Checks the node and its sub items

* **`getCheckedItems (treeview, uncheck)`**

    Returns the checked items if there is any.

    The result is DataItem Array if found, otherwise empty array.

####Upload
Available at `kendoHelpers.upload.*`

* **`hasAnyFileSelected (kendoUpload)`**

    Check if any file is selected.

    The result is boolean.

* **`getUploadElements (kendoUpload)`**

    Retrieving the upload elements from the upload control.

    The result is Array of elements if found, otherwise null.

####Validator
Available at `kendoHelpers.validator.*`

* **`isValid (form)`**

    Triggers kendo validation for form and returns the status of form.

    The result is boolean.

* **`hideMessages (form)`**

    Enables kendo validation for form then hides any visible message.

    The result is boolean.

####DataSource
Available at `kendoHelpers.datasource.*`

* **`findDataItemByUid (data, uid)`**

    Finds the dataItem by Uid.

* **`findDataIndexByUid (data, uid)`**

    Finds the index of Uid.

