(function(){
	
	function Pivot() {
		this._data = [];
		this._pivoted_data = [];
		this._headers = [];
		this._rows = [];
		this._columns = [];
		this._filters = [];
		this.aggregates = [];
		this.exportDrivers = [];
		this.table_classes = {};
	}

	function Filter() {
		this.name = "";
	}

	Pivot.prototype.setData = function(){};
	Pivot.prototype.refreshData = function(){};

	Pivot.prototype.getDistinctValues = function() {

	}

	Pivot.prototype.registerAggregate = function(name, func) {
		var aggregate = {
							"name" : name,
							"func" : func
						};
		this.aggregates.push(aggregate);
	}

	Pivot.prototype.mapHeaders = function() {

	}

	Pivot.prototype.getHeaders = function() {
		var data = this.data;
		var headers = [];
		for (var i = data.length - 1; i >= 0; i--) {
			data[i]
		};
	}

	Pivot.prototype.listColumns = function(){};
	Pivot.prototype.listRows = function(){};
	Pivot.prototype.listFilters = function(){};

	Pivot.prototype.removeColumn = function(){};
	Pivot.prototype.removeRow = function(){};
	Pivot.prototype.removeFilter = function(){};

	Pivot.prototype.addColumn = function(){};
	Pivot.prototype.addRow = function(){};
	Pivot.prototype.addFilter = function(){};

	Pivot.prototype.renderTable = function(){};

	Pivot.prototype.listExportDrivers = function(){};

	var $pivot = new Pivot();

	$pivot.registerAggregate("sum",function(list){

	});

	$pivot.registerAggregate("average",function(list){
		
	});

	$pivot.registerAggregate("max",function(list){
		
	});

	$pivot.registerAggregate("min",function(list){
		
	});

	window.$pivot = $pivot;


})();
