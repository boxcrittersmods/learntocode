Blockly.Blocks['say'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
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
  init: function() {
    this.appendDummyInput()
        .appendField("player position");
    this.setOutput(true, "pos");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pos_x'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
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