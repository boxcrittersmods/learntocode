Blockly.Blocks['say'] = {
	init: function () {
		this.appendValueInput("MESSAGE")
			.setCheck(null)
			.appendField("say");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(160);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['pos'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("pos");
		this.appendValueInput("X")
			.setCheck("Number");
		this.appendValueInput("Y")
			.setCheck("Number");
		this.setInputsInline(true);
		this.setOutput(true, "pos");
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['goto'] = {
	init: function () {
		this.appendValueInput("POS")
			.setCheck("pos")
			.appendField("goto");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['player_pos'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("player position");
		this.setOutput(true, "pos");
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['pos_x'] = {
	init: function () {
		this.appendValueInput("POS")
			.setCheck("pos");
		this.appendDummyInput()
			.appendField("x");
		this.setOutput(true, "Number");
		this.setColour(230);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['pos_y'] = {
	init: function () {
		this.appendValueInput("POS")
			.setCheck("pos");
		this.appendDummyInput()
			.appendField("y");
		this.setOutput(true, "Number");
		this.setColour(210);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['repeat_forver'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("repeat forever");
		this.appendStatementInput("REPEAT_DO")
			.setCheck(null)
			.appendField("do");
		this.setPreviousStatement(true, null);
		this.setColour(120);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['run'] = {
	init: function() {
	  this.appendValueInput("CODE")
		  .setCheck("function")
		  .appendField(new Blockly.FieldLabelSerializable("run"), "CODE");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['run_return'] = {
	init: function() {
	  this.appendValueInput("FUNCTION")
		  .setCheck(null)
		  .appendField("run");
	  this.setOutput(true, null);
	  this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['var'] = {
	init: function() {
	  this.appendValueInput("CODE")
		  .setCheck("String")
		  .appendField(new Blockly.FieldLabelSerializable("var"), "CODE");
	  this.setOutput(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };
  
  Blockly.Blocks['return'] = {
	init: function() {
	  this.appendValueInput("RETURN")
		  .setCheck(null)
		  .appendField("return");
	  this.setPreviousStatement(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['function'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("function");
	  this.appendStatementInput("CODE")
		  .setCheck(null)
		  .setAlign(Blockly.ALIGN_CENTRE);
	  this.setOutput(true, "function");
	  this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['object'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("object");
	  this.appendStatementInput("PROPERTIES")
		  .setCheck("obj_prop");
	  this.setOutput(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.Blocks['object_property'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldTextInput("default"), "KEY");
	  this.appendValueInput("VALUE")
		  .setCheck(null);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, "obj_prop");
	  this.setNextStatement(true, "obj_prop");
	  this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };


  Blockly.Blocks['get_prop'] = {
	init: function() {
	  this.appendValueInput("NEXT")
		  .setCheck("String")
		  .appendField(".")
		  .appendField(new Blockly.FieldTextInput("property"), "PROP");
	  this.setOutput(true, null);
	  this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };