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


