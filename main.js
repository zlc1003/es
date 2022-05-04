////////// set blocks //////////////////////////////////////////////////////////////////////
kuan = document.body.clientWidth
gao = document.body.clientHeight
Blockly.Blocks['set_beat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set beat");
        this.appendDummyInput()
            .appendField("name:");
        this.appendValueInput("NAME")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE);
        this.appendDummyInput()
            .appendField("beat:");
        this.appendValueInput("BEAT")
            .setCheck("String");
        this.setInputsInline(true);
        this.setColour(120);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
Blockly.Blocks['gogo'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("song #1");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['randint'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("random number");
        this.appendValueInput("vn")
            .setCheck("String")
            .appendField("varble name");
        this.appendValueInput("st")
            .setCheck("Number")
            .appendField("start number");
        this.appendValueInput("end")
            .setCheck("Number")
            .appendField("end numbar");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['db'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("drum beat");
        this.appendValueInput("BVAR")
            .setCheck("String")
            .appendField("beat varble name");
        this.appendValueInput("vbar")
            .setCheck("Number")
            .appendField("vertical bar number");
        this.appendValueInput("start")
            .setCheck("Number")
            .appendField("start bar number");
        this.setInputsInline(false);
        this.setColour(230);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
Blockly.Blocks['mb__'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("media beat");
        this.appendValueInput("mn")
            .setCheck("String")
            .appendField("media name");
        this.appendValueInput("bvn")
            .setCheck("String")
            .appendField("beat varble name");
        this.appendValueInput("vb")
            .setCheck("Number")
            .appendField("vertical bar number");
        this.appendValueInput("sb")
            .setCheck("Number")
            .appendField("start bar number");
        this.setColour(230);
        this.setTooltip("");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl("");
    }
};
Blockly.Blocks['importrandom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("import randomizer framework");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['cb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("clap beat");
        this.appendValueInput("vn")
            .setCheck("String")
            .appendField("beat varble name");
        this.appendValueInput("vb")
            .setCheck("Number")
            .appendField("vertical bar number");
        this.appendValueInput("sb")
            .setCheck("Number")
            .appendField("start bar number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['finish__'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("finish");
        this.setPreviousStatement(true, null);
        this.setColour(230);
    }
};
Blockly.Blocks['int'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("init");
        this.setNextStatement(true, null);
        this.setColour(230);
    }
};
Blockly.Blocks['fm'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Media");
        this.appendValueInput("mn")
            .setCheck("String")
            .appendField("Media Name");
        this.appendValueInput("vb")
            .setCheck("Number")
            .appendField("vertical bar number");
        this.appendValueInput("sb")
            .setCheck("Number")
            .appendField("start bar number");
        this.appendValueInput("eb")
            .setCheck("Number")
            .appendField("end bar number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['bs'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set beat speed");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("bpm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
////////// END ////////////////////////////////////////////////////////////////////////////////

////////// set translator //////////////////////////////////////////////////////////////////////

Blockly.Python['bs'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'setTempo(' + value_name + ')\n';
    return code;
};
Blockly.Python['finish__'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'finish()\n';
    return code;
};
Blockly.Python['int'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'from earsketch import *\ninit()\n';
    return code;
};
Blockly.Python['set_beat'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var value_beat = Blockly.Python.valueToCode(block, 'BEAT', Blockly.Python.ORDER_ATOMIC);
    var code = value_name.substring(1, value_name.length - 1) + " = " + value_beat + "\n";
    return code;
};
Blockly.Python['db'] = function (block) {
    var value_bvar = Blockly.Python.valueToCode(block, 'BVAR', Blockly.JavaScript.ORDER_ATOMIC);
    var value_vbar = Blockly.Python.valueToCode(block, 'vbar', Blockly.JavaScript.ORDER_ATOMIC);
    var value_start = Blockly.Python.valueToCode(block, 'start', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'makeBeat(OS_SNARE03, ' + value_vbar + ', ' + value_start + ', ' + value_bvar.substring(1, value_bvar.length - 1) + ')\n';
    return code;
};
Blockly.Python['cb'] = function (block) {
    var value_vn = Blockly.Python.valueToCode(block, 'vn', Blockly.Python.ORDER_ATOMIC);
    var value_vb = Blockly.Python.valueToCode(block, 'vb', Blockly.Python.ORDER_ATOMIC);
    var value_sb = Blockly.Python.valueToCode(block, 'sb', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'makeBeat(MILKNSIZZ_BAYSIQUE_CLAPIT_CLAPS, ' + value_vb + ', ' + value_sb + ', ' + value_vn.substring(1, value_vn.length - 1) + ')\n';
    return code;
};
Blockly.Python['importrandom'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'import random\n';
    return code;
};
Blockly.Python['fm'] = function (block) {
    var value_mn = Blockly.Python.valueToCode(block, 'mn', Blockly.Python.ORDER_ATOMIC);
    var value_vb = Blockly.Python.valueToCode(block, 'vb', Blockly.Python.ORDER_ATOMIC);
    var value_sb = Blockly.Python.valueToCode(block, 'sb', Blockly.Python.ORDER_ATOMIC);
    var value_eb = Blockly.Python.valueToCode(block, 'eb', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'fitMedia(' + value_mn.substring(1, value_mn.length - 1) + ', ' + value_vb + ', ' + value_sb + ', ' + value_eb + ')\n';
    return code;
};
Blockly.Python['gogo'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from earsketch import *\ninit()\nsetTempo(120) \nfitMedia(ELECTRO_ANALOGUE_BASS_004, 2, 2, 6) \nfitMedia(CIARA_SET_PERC_CLAP_2, 1, 2, 6) \nfillC = "0-0-00-0-0-000-0"*3 \nend="0-0-00-00-000" \nenc="-0-0--0-0-0---0--0-0--0--0---" \nstart="00-000-0-000000" \nfitMedia(HIPHOP_STOMP_BEAT_PART_001,3,2,4) \nmakeBeat(OS_SNARE01, 3, 4, fillC) \nmakeBeat(OS_SNARE01, 3, 7, end) \nmakeBeat(MILKNSIZZ_BAYSIQUE_CLAPIT_CLAPS, 1, 1, start) \nmakeBeat(MILKNSIZZ_BAYSIQUE_CLAPIT_CLAPS,4,6,enc) \nfinish()\n';
    return code;
};
Blockly.Python['randint'] = function (block) {
    var value_vn = Blockly.Python.valueToCode(block, 'vn', Blockly.Python.ORDER_ATOMIC);
    var value_st = Blockly.Python.valueToCode(block, 'st', Blockly.Python.ORDER_ATOMIC);
    var value_end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_vn.substring(1, value_vn.length - 1) + ' = random.randint(' + value_st + ',' + value_end + ')\n';
    return code;
};
Blockly.Python['mb__'] = function (block) {
    var value_mn = Blockly.Python.valueToCode(block, 'mn', Blockly.Python.ORDER_ATOMIC);
    var value_bvn = Blockly.Python.valueToCode(block, 'bvn', Blockly.Python.ORDER_ATOMIC);
    var value_vb = Blockly.Python.valueToCode(block, 'vb', Blockly.Python.ORDER_ATOMIC);
    var value_sb = Blockly.Python.valueToCode(block, 'sb', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'makeBeat(' + value_mn.substring(1, value_mn.length - 1) + ', ' + value_vb + ', ' + value_sb + ', ' + value_bvn.substring(1, value_bvn.length - 1) + ')\n';
    return code;
};
////////// END ////////////////////////////////////////////////////////////////////////////////////

audiodiv = document.getElementById("ao");

var toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
        {
            "kind": "block",
            "type": "gogo",
        },
        {
            "kind": "block",
            "type": "text",
            "fields": {
                "text": "Hello World"
            }
        },
        {
            "kind": "block",
            "type": "math_number"
        },
        {
            "kind": "block",
            "type": "int"
        },
        {
            "kind": "block",
            "type": "bs",
            "fields": {
                "NAME": 120
            }
        },
        {
            "kind": "block",
            "type": "set_beat",
            "fields": {
                "NAME": {
                    "kind": "block",
                    "type": "text",
                    "fields": {
                        "text": "Hello World"
                    }
                },
                "BEAT": "0-00-0-00"
            }
        },
        {
            "kind": "block",
            "type": "db",
            "fields": {
                "BVAR": {
                    "kind": "block",
                    "type": "text",
                    "fields": {
                        "text": "Hello World"
                    }
                },
                "vbar": "1",
                "start": "1"
            }
        },

        {
            "kind": "block",
            "type": "cb",
            "fields": {
                "vn": {
                    "kind": "block",
                    "type": "text",
                    "fields": {
                        "text": "Hello World"
                    }
                },
                "vb": "1",
                "sb": "1"
            }
        },
        {
            "kind": "block",
            "type": "mb__",
            "fields": {
                "mn": {
                    "kind": "block",
                    "type": "text",
                    "fields": {
                        "text": "Hello World"
                    }
                },
                "bvn": "1",
                "vb": "1",
                "sb": "1"
            }
        },
        {
            "kind": "block",
            "type": "fm",
            "fields": {
                "mn": {
                    "kind": "block",
                    "type": "text",
                    "fields": {
                        "text": "Hello World"
                    }
                },
                "vb": "1",
                "sb": "1",
                "eb": "1"
            }
        },
        {
            "kind": "block",
            "type": "finish__"
        },
    ]
}
// const worker=new Worker("https://zlc1003.github.io/es/worker.js");
let lg = document.getElementById("lg")
lg.style.height = (gao * 0.8) + "px"
lg.style.width = (kuan * 0.25) + "px"

window.onresize = function () {
    kuan = document.body.clientWidth
    gao = document.body.clientHeight
    let lg = document.getElementById("lg")
    lg.style.height = (gao * 0.8) + "px"
    lg.style.width = (kuan * 0.25) + "px"
    // console.log("resize")
}

function upd() {var code = Blockly.Python.workspaceToCode(workspace);document.getElementById("code").innerHTML = code;}
function copyandplay(id) {
    aud = id
    navigator.clipboard.writeText(aud)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    audiodiv.innerHTML = "<audio controls autoplay> <source src=\"https://api.ersktch.gatech.edu/EarSketchWS/audio/sample?name=" + aud + "\"> </audio>";

}


var workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });
workspace.addChangeListener(upd);