Blockly.JavaScript["say"] = function(block) {
  var value_message = Blockly.JavaScript.valueToCode(
    block,
    "MESSAGE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `BoxCritters.Say(${value_message});\n`;
  return code;
};

Blockly.JavaScript["pos"] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(
    block,
    "X",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_y = Blockly.JavaScript.valueToCode(
    block,
    "Y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `{x:${value_x},y:${value_y}}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["goto"] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(
    block,
    "POS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `BoxCritters.Goto(${value_pos});\n`;
  return code;
};

Blockly.JavaScript["player_pos"] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "BoxCritters.PlayerPos()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["pos_x"] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(
    block,
    "POS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_pos}.x`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["pos_y"] = function(block) {
  var value_pos = Blockly.JavaScript.valueToCode(
    block,
    "POS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_pos}.y`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["repeat_forver"] = function(block) {
  var statements_repeat_do = Blockly.JavaScript.statementToCode(
    block,
    "REPEAT_DO"
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
setInterval(function() {
	${statements_repeat_do}
},1000/30)`;
  return code;
};

Blockly.JavaScript["var"] = function(block) {
  var value_code = Blockly.JavaScript.valueToCode(
    block,
    "CODE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_code}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["run_return"] = function(block) {
  var value_function = Blockly.JavaScript.valueToCode(
    block,
    "FUNCTION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_code}();`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["run"] = function(block) {
  var value_function = Blockly.JavaScript.valueToCode(
    block,
    "FUNCTION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_code}();`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["return"] = function(block) {
  var value_return = Blockly.JavaScript.valueToCode(
    block,
    "RETURN",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `return ${value_return};\n`;
  return code;
};

Blockly.JavaScript["function"] = function(block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, "CODE");
  // TODO: Assemble JavaScript into code variable.
  var code = `function() {
		${statements_code}
	}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["object"] = function(block) {
  var statements_properties = Blockly.JavaScript.statementToCode(
    block,
    "PROPERTIES"
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `
	{
		${statements_properties}
	}
	`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['object_property'] = function(block) {
	var text_key = block.getFieldValue('KEY');
	var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `"${text_key}":${value_value}`,;
	return code;
  };

  Blockly.JavaScript['get_prop'] = function(block) {
	var text_prop = block.getFieldValue('PROP');
	var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	var code = `.${text_prop}${value_next}`;
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE];
  };