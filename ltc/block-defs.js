Blockly.JavaScript['say'] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `BoxCritters.Say(${value_message});\n`;
  return code;
};

Blockly.JavaScript['pos'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `{x:${value_x},y:${value_y}}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['goto'] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `BoxCritters.Goto(${value_pos});\n`;
  return code;
};

Blockly.JavaScript['player_pos'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'BoxCritters.PlayerPos()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pos_x'] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_pos}.x`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['pos_y'] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_pos}.y`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['repeat_forver'] = function(block) {
  var statements_repeat_do = Blockly.JavaScript.statementToCode(block, 'REPEAT_DO');
  // TODO: Assemble JavaScript into code variable.
  var code = [
  'while (true) {',
  `  ${statements_repeat_do}`,
  '}'].join("\n") + "\n";
  return code;
};