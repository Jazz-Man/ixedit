var ixedit = {
  appName : "IxEdit",
  version : "0.0.1",
  term : "2014",
  hasLocalDb : false,
  /**
   * @return {?}
   */
  detectBrowserLang : function() {
    try {
      return(navigator.browserLanguage || (navigator.language || navigator.userLanguage)).substr(0, 2);
    } catch (e) {
      return undefined;
    }
  },
  babyLang : {
    en : {
      "needLocalStorage" : "IxEdit needs client-side database storage",
      "needCurrentJQueryUI" : "IxEdit needs jQuery UI 1.7 or higher.",
      "needJQueryUI" : "IxEdit needs jQuery UI.",
      "needCurrentJQuery" : "IxEdit jQuery 1.3 or higher.",
      "needJQuery" : "IxEdit needs jQuery."
    }
  },
  /**
   * @return {?}
   */
  boot : function() {
    if (window.jQuery) {
      var jQueryVersion = jQuery.fn.jquery;
      var jQueryVersionArray = jQueryVersion.split(".");
      if (jQueryVersionArray[0] >= "1") {
        if (jQuery.ui) {
          var jQueryUIVersion = jQuery.ui.version;
          var jQueryUIVersionArray = jQueryUIVersion.split(".");
          return true;
        } else {
          window.alert(ixedit.babyLabel.needJQueryUI);
          return false;
        }
      } else {
        window.alert(ixedit.babyLabel.needCurrentJQuery);
        return false;
      }
    } else {
      window.alert(ixedit.babyLabel.needJQuery);
      return false;
    }
  }
};
ixedit.browserLang = ixedit.detectBrowserLang();
ixedit.babyLabel = ixedit.babyLang["en"];
// switch(ixedit.browserLang) {
//   case "en":
//     ixedit.babyLabel = ixedit.babyLang["en"];
//     break;
//   case "ja":
//     ixedit.babyLabel = ixedit.babyLang["ja"];
//     break;
//   case "zh":
//     ixedit.babyLabel = ixedit.babyLang["zh"];
//     break;
//   default:
//     ixedit.babyLabel = ixedit.babyLang["en"];
// }
if (ixedit.boot()) {
  ixedit.lang = {
    en : {
      "appName" : "IxEdit",
      "listStatusItem" : "Item",
      "listStatusItems" : "Items",
      "listStatusSelected" : "Selected",
      "inputHeaderUseracton" : "Action",
      "inputHeaderSystemfeedback" : "Reaction",
      "inputHeaderCondition" : "Condition",
      "inputHeaderComment" : "Comment",
      "inputHeaderStatusItem" : "Item",
      "inputHeaderStatusItems" : "Items",
      "inputHeaderStatusNone" : "None",
      "inputHeaderStatusCommented" : "Commented",
      "inputLabelElement" : "Selector",
      "inputLabelEvent" : "Event",
      "inputLabelPreventDefault" : "Prevent default behavior",
      "inputLabelStopBubbling" : "Stop bubbling",
      "inputLabelDelay" : "Delay",
      "inputLabelCommand" : "Command",
      "inputLabelCss" : "Property",
      "inputLabelClassName" : "Class Name",
      "inputLabelValue" : "Value",
      "inputLabelAttribute" : "Attribute",
      "inputLabelEventName" : "Event Name",
      "inputLabelDuration" : "Duration",
      "inputLabelEffect" : "Effect",
      "inputLabelOpacity" : "Opacity",
      "inputLabelEasing" : "Easing",
      "inputLabelStatus" : "Status",
      "inputLabelIncludeComment" : "Include comment",
      "inputLabelFunction" : "Function Name",
      "inputLabelArgument" : "Argument",
      "inputLabelAlertMessage" : "Message",
      "inputLabelInsertHTMLValue" : "HTML",
      "inputLabelInsertHTMLPoint" : "Insert Point",
      "inputLabelDraggableMoveCursor" : "Move Cursor",
      "inputLabelDraggableOpacify" : "Opacify while dragging",
      "inputLabelDraggableRevert" : "Revert unless dropped on a droppable",
      "inputLabelDraggableContainment" : "Bound to parent element",
      "inputLabelResizableKeepAspect" : "Keep aspect ratio",
      "inputLabelResizableHandle" : "Handle",
      "inputLabelResizableTop" : "Top",
      "inputLabelResizableRight" : "Right",
      "inputLabelResizableBottom" : "Bottom",
      "inputLabelResizableLeft" : "Left",
      "inputLabelResizableTR" : "T-R",
      "inputLabelResizableBR" : "B-R",
      "inputLabelResizableBL" : "B-L",
      "inputLabelResizableTL" : "T-L",
      "inputLabelResizableContainment" : "Bound to parent element",
      "inputLabelDragAxes" : "Axis",
      "inputLabelSortableRevert" : "Animated Insertion",
      "inputLabelAccordionAutoHeight" : "Fixed Height",
      "inputLabelAccordionCollapsible" : "Allow All Closed",
      "inputLabelTabsSelected" : "Default Tab Number",
      "inputLabelTabsSelectedAnnotation" : "(1-based index. 0 for none.)",
      "inputLabelTabsFade" : "Fade",
      "inputLabelTabsSlide" : "Slide",
      "inputLabelBlockSwitchFade" : "Fade",
      "inputLabelBlockSwitchSlide" : "Slide",
      "inputLabelDatePickerFormat" : "Format",
      "inputLabelDatePickerHasButton" : "Has Picker Button",
      "inputLabelDatePickerShowMonthAfterYear" : "Show Month after Year",
      "inputLabelLoadURL" : "URL",
      "inputLabelLoadURLAnnotation" : "Notice: Remote file you request and this page should be in the same domain.",
      "inputLabelDialogWidth" : "Width",
      "inputLabelDialogHeight" : "Height",
      "inputLabelDialogLeft" : "Left",
      "inputLabelDialogTop" : "Top",
      "inputLabelDialogDraggable" : "Draggable",
      "inputLabelDialogButtons" : "Buttons",
      "inputLabelDialogLabel" : "Label",
      "inputLabelDialogId" : "ID",
      "inputLabelDialogLeftAnnotation" : "(Blank for Center. - for Right.)",
      "inputLabelDialogTopAnnotation" : "(Blank for Center. - for Bottom.)",
      "inputLabelJumpUrl" : "URL",
      "eventLoad" : "Load",
      "eventUnload" : "Unload",
      "eventChange" : "Change",
      "eventClick" : "Click",
      "eventDblClick" : "Double Click",
      "eventDrop" : "Drop",
      "eventError" : "Error",
      "eventFocus" : "Focus",
      "eventFocusOut" : "Focus Out",
      "eventKeyDown" : "Key Down",
      "eventKeyPress" : "Key Press",
      "eventKeyUp" : "Key Up",
      "eventMouseDown" : "Mouse Down",
      "eventMouseMove" : "Mouse Move",
      "eventMouseOut" : "Mouse Out",
      "eventMouseOver" : "Mouse Over",
      "eventMouseUp" : "Mouse Up",
      "eventResize" : "Resize",
      "eventScroll" : "Scroll",
      "eventSelect" : "Select",
      "eventSubmit" : "Submit",
      "insertHTMLOverwrite" : "Overwrite inside of selected element",
      "insertHTMLInsideBottom" : "Inside-bottom of selected element",
      "insertHTMLInsideTop" : "Inside-top of selected element",
      "insertHTMLAfter" : "After selected element",
      "insertHTMLBefore" : "Before selected element",
      "dragAxesX" : "X",
      "dragAxesY" : "Y",
      "dragAxesXY" : "X and Y",
      "mainButtonNew" : "New",
      "mainButtonDuplicate" : "Duplicate",
      "mainButtonDelete" : "Delete",
      "mainButtonReload" : "Reload",
      "mainButtonEdit" : "Edit",
      "mainButtonCancel" : "Cancel",
      "mainButtonReset" : "Revert",
      "mainButtonDoneReload" : "Done and Reload",
      "mainButtonDone" : "Done",
      "mainButtonClose" : "Close",
      "mainButtonImport" : "Import",
      "condTypeIf" : "matches",
      "condTypeIfNot" : "doesn't match",
      "of" : "of",
      "listHeaderCheck" : " ",
      "listHeaderEvent" : "Action Event",
      "listHeaderTrigger" : "Action Selector",
      "listHeaderTarget" : "Reaction Selector",
      "listHeaderCommand" : "Reaction Command",
      "listHeaderComment" : "Comment",
      "utilityAbout" : "About " + ixedit.appName,
      "utilityDeploy" : "Deploy",
      "utilityExport" : "Export",
      "utilityImport" : "Import",
      "utilityShowJson" : "Show JSON",
      "utilityShowDb" : "Show DB records",
      "utilityDiscardDb" : "Discard DB table",
      "commandHelp" : "Command Help",
      "messageNoCondition" : 'There is no condition currently. Click "+" button to add one.',
      "messageCommndNotSupported" : "command is not editable now.",
      "none" : "None",
      "normal" : "Normal",
      "linear" : "None",
      "add" : "Add",
      "remove" : "Remove",
      "alertDeletingItem1" : "Are you sure you want to delete this item?",
      "alertDeletingItem2" : "Are you sure you want to delete these ",
      "alertDeletingItem3" : " items?",
      "alertloadDemo" : "Some interactions are embedded on this page. Do you want to load them?",
      "version" : "Version",
      "copyright" : "Created by Sociomedia Inc. <br />Maintained by Perchouli  &lt; jp.chenyang@gmail.com  &gt;",
      "instructionDeploy" : '<h2>To embed the generated JavaScript code to your HTML</h2><ol><li>Copy the following JavaScript code.</li><li>Open your HTML file with a text editor.</li><li>Paste the code to very bottom of inside the &lt;head&gt; element.</li><li>Delete the line which is loading IxEdit script file like &lt;script type="text/javascript" src="yourpath/ixedit.js"&gt;&lt;/script&gt;.</li><li>Delete the line which is loading IxEdit CSS file like &lt;link type="text/css" href="yourpath/ixedit.css" rel="stylesheet"&gt; also.</li><li>Save the HTML file and reload it with a browser.</li></ol>',
      "instructionImport" : "<h2>To import data by copy-pasting from another IxEdit-editing page</h2><ol><li>Copy data from the Exporting dialog of the page you want to import from.</li><li>Paste the data into the following text area.</li><li>Hit the Import button.</li></ol>",
      "instructionImportFromDB" : "<h2>To import data from existing interactions which have made on this browser</h2><ol><li>Choose one from following table.</li><li>Hit the Import button.</li></ol>",
      "instructionExport" : "<h2>To export the data to another IxEdit-editing page</h2><ol><li>Copy the following data.</li><li>Go to the IxEdit-editing browser window you want to import to.</li><li>Open Import dialog and paste the data.</li></ol>",
      "importSelectorLabel" : "Import by : ",
      "importSelectorOptionLabel0" : "Copy-Pasting",
      "importSelectorOptionLabel1" : "Choose from existing data",
      "tipRouteBtn" : "Route Menu",
      "tipXRayBtn" : "Choose selector by clicking on the page.",
      "instructionXRay1" : "Click on the target element to specify the selector.",
      "cancel" : "Cancel",
      "unloadingCaution" : 'You have modified some data with IxEdit, and it has not saved. If you close/leave/reload the window, your changes will be lost. \n\nTo save, cancel leaving this page and hit the "Done" button on IxEdit editor.',
      "dayNamesMinSu" : "Su",
      "dayNamesMinMo" : "Mo",
      "dayNamesMinTu" : "Tu",
      "dayNamesMinWe" : "We",
      "dayNamesMinTh" : "Th",
      "dayNamesMinFr" : "Fr",
      "dayNamesMinSa" : "Sa",
      "dayNamesShortSu" : "Sun",
      "dayNamesShortMo" : "Mon",
      "dayNamesShortTu" : "Tue",
      "dayNamesShortWe" : "Wed",
      "dayNamesShortTh" : "Thr",
      "dayNamesShortFr" : "Fri",
      "dayNamesShortSa" : "Sat",
      "monthNames1" : "January",
      "monthNames2" : "February",
      "monthNames3" : "March",
      "monthNames4" : "April",
      "monthNames5" : "May",
      "monthNames6" : "June",
      "monthNames7" : "July",
      "monthNames8" : "August",
      "monthNames9" : "September",
      "monthNames10" : "October",
      "monthNames11" : "November",
      "monthNames12" : "December",
      "monthNamesShort1" : "Jan",
      "monthNamesShort2" : "Feb",
      "monthNamesShort3" : "Mar",
      "monthNamesShort4" : "Apr",
      "monthNamesShort5" : "May",
      "monthNamesShort6" : "Jun",
      "monthNamesShort7" : "Jul",
      "monthNamesShort8" : "Aug",
      "monthNamesShort9" : "Sep",
      "monthNamesShort10" : "Oct",
      "monthNamesShort11" : "Nov",
      "monthNamesShort12" : "Dec",
      "dayName" : "Dayname",
      "cmdCat0" : "DOM",
      "cmdCat1" : "Effect",
      "cmdCat2" : "Generate",
      "cmdCat11" : "Misc",
      "cmdCat21" : "Advanced",
      "datePickerToday" : "This Month",
      "datePickerClose" : "Close"
    }
  };
  ixedit.label = ixedit.lang["en"];
  /** @type {number} */
  ixedit.format = 1;
  /** @type {boolean} */
  ixedit.enableMultiActions = true;
  /** @type {boolean} */
  ixedit.advancedMode = false;
  /** @type {boolean} */
  ixedit.inactivatingAll = false;
  /** @type {boolean} */
  ixedit.deployed = false;
  /** @type {number} */
  ixedit.prevScrollTop = 0;
  /** @type {number} */
  ixedit.prevScrollLeft = 0;
  /** @type {string} */
  ixedit.dbName = "ixedit-database";
  /** @type {string} */
  ixedit.applicationName = "application1";
  /** @type {string} */
  ixedit.projectName = "project1";
  /** @type {string} */
  ixedit.screenID = "";
  /** @type {boolean} */
  ixedit.addingNewIx = false;
  /** @type {boolean} */
  ixedit.gimmickAnimation = false;
  /** @type {string} */
  ixedit.evtMenuSource = "";
  /** @type {string} */
  ixedit.cmdMenuSource = "";
  /** @type {string} */
  ixedit.condCmdMenuSource = "";
  /** @type {Array} */
  ixedit.embedSources = [];
  ixedit.localdbi = {};
  ixedit.dbi = ixedit.localdbi;
  ixedit.commonPrefs = {};
  /** @type {number} */
  ixedit.commonPrefs.inspectorWidth = 530;
  /** @type {number} */
  ixedit.commonPrefs.inspectorHeight = 350;
  /** @type {number} */
  ixedit.commonPrefs.inspectorColumnCheckWidth = 25;
  /** @type {string} */
  ixedit.commonPrefs.inspectorColumnEventWidth = "17%";
  /** @type {string} */
  ixedit.commonPrefs.inspectorColumnTriggerWidth = "17%";
  /** @type {string} */
  ixedit.commonPrefs.inspectorColumnTargetsWidth = "17%";
  /** @type {string} */
  ixedit.commonPrefs.inspectorColumnCommandsWidth = "17%";
  /** @type {boolean} */
  ixedit.commonPrefs.inspectorShaded = false;
  /** @type {Array} */
  ixedit.commonPrefs.areasShown = [true, true, false, false];
  /** @type {boolean} */
  ixedit.commonPrefs.deployWithComment = false;
  ixedit.prefs = {};
  /** @type {string} */
  ixedit.prefs.sortKey = "trigger";
  /** @type {number} */
  ixedit.prefs.inspectorScrollTop = 0;
  /** @type {Array} */
  ixedit.prefs.selectedLineNo = [];
  /** @type {Array} */
  ixedit.ixs = [];
  /**
   * @param {?} ixObj
   * @return {undefined}
   */
  ixedit.ixs.add = function(ixObj) {
    this[this.length] = ixObj;
  };
  /**
   * @return {undefined}
   */
  ixedit.ixs.setAll = function() {
    var thisLength = this.length;
    /** @type {number} */
    var cnt = 0;
    for (;cnt < thisLength;cnt++) {
      var theIx = this[cnt];
      theIx.set();
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.ixs.unsetAll = function() {
    var thisLength = this.length;
    /** @type {number} */
    var cnt = 0;
    for (;cnt < thisLength;cnt++) {
      var theIx = this[cnt];
      theIx.unset();
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.ixs.resetAll = function() {
    var thisLength = this.length;
    /** @type {number} */
    var cnt = 0;
    for (;cnt < thisLength;cnt++) {
      this.unsetAll();
      this.setAll();
    }
  };
  /**
   * @param {?} ixNo
   * @return {undefined}
   */
  ixedit.ixs.del = function(ixNo) {
    this.splice(ixNo, 1);
  };
  /**
   * @param {?} isActivating
   * @param {?} lineNo
   * @return {undefined}
   */
  ixedit.ixs.activate = function(isActivating, lineNo) {
    var targetIxNo = ixedit.listItems[lineNo].no;
    var targetIx = this[targetIxNo];
    var theTr = jQuery(".ixedit-table-item").eq(lineNo);
    var theEditButton = jQuery("#ixedit-button-edit");
    if (isActivating) {
      theTr.removeClass("inactive");
      /** @type {boolean} */
      targetIx.active = true;
      targetIx.set();
      theEditButton.removeAttr("disabled").removeClass("disabled");
    } else {
      theTr.addClass("inactive");
      /** @type {boolean} */
      targetIx.active = false;
      targetIx.unset();
      theEditButton.attr("disabled", "disabled").addClass("disabled");
    }
  };
  /**
   * @return {?}
   */
  ixedit.ixs.getJqueryCode = function() {
    var usedCommands = {};
    /** @type {Array} */
    var preserves = [];
    var isIncludingComments = ixedit.commonPrefs.deployWithComment;
    /** @type {Array} */
    var theCodes = [];
    /** @type {string} */
    var prefix = '<script type="text/javascript">\n\t\n\tif(window.ixedit){ixedit.deployed = true}\n\tif(window.jQuery){jQuery(function(){\n';
    var thisLength = this.length;
    /** @type {number} */
    var ixCnt = 0;
    for (;ixCnt < thisLength;ixCnt++) {
      /** @type {number} */
      var k = 0;
      for (;k < ixedit.ixs[ixCnt].actions.length;k++) {
        var theCommandName = ixedit.ixs[ixCnt].actions[k].command;
        if (!usedCommands[theCommandName]) {
          usedCommands[theCommandName] = ixedit.cmds[theCommandName];
        }
      }
      if (isIncludingComments) {
        var theComment = this[ixCnt].code.comment;
        if (theComment != "") {
          var insertingComment = theComment.replace(/\n/g, "\n\t\t// ");
          /** @type {string} */
          insertingComment = "\t\t// " + insertingComment + "\n";
        } else {
          /** @type {string} */
          insertingComment = "";
        }
        /** @type {string} */
        theCodes[theCodes.length] = insertingComment + "\t\t" + this[ixCnt].code.source + "\n";
      } else {
        /** @type {string} */
        theCodes[theCodes.length] = "\t\t" + this[ixCnt].code.source + "\n";
      }
    }
    var i;
    for (i in usedCommands) {
      if (ixedit.cmds[i] && (ixedit.cmds[i].preserve && ixedit.cmds[i].preserv != "")) {
        preserves[preserves.length] = ixedit.cmds[i].preserve;
      }
    }
    if (preserves.length > 0) {
      /** @type {string} */
      var preservedCode = "\t\t" + preserves.join("\n\t\t") + "\n"
    } else {
      /** @type {string} */
      preservedCode = "";
    }
    /** @type {string} */
    var suffix = "\t})};\n\x3c/script>";
    return prefix + preservedCode + theCodes.join("") + suffix;
  };
  ixedit.selectOptions = {};
  ixedit.cmds = {};
  ixedit.condcmds = {};
  ixedit.lostWorld = {};
  /**
   * @return {undefined}
   */
  ixedit.ix = function() {
    /** @type {string} */
    this.name = "";
    /** @type {string} */
    this.screenName = "";
    /** @type {boolean} */
    this.active = true;
    /** @type {string} */
    this.trigger = "";
    /** @type {string} */
    this.screenTrigger = this.trigger;
    /** @type {string} */
    this.event = "click";
    /** @type {string} */
    this.screenEvent = "";
    /** @type {boolean} */
    this.preventDefault = false;
    /** @type {boolean} */
    this.stopBubbling = false;
    /** @type {string} */
    this.target = "";
    /** @type {string} */
    this.screenTarget = "";
    /** @type {number} */
    this.delay = 0;
    /** @type {string} */
    this.screenDelay = "";
    /** @type {string} */
    this.comment = "";
    /** @type {string} */
    this.screenComment = "";
    /** @type {Array} */
    this.conditions = [];
    /** @type {Array} */
    this.actions = [];
    /** @type {string} */
    this.screenActions = "";
  };
  /**
   * @return {undefined}
   */
  ixedit.ix.prototype.set = function() {
    /**
     * @param {string} funcCode
     * @return {?}
     */
    function getFunked(funcCode) {
      if (theStopBubbling) {
        /**
         * @param {?} event
         * @param {?} ui
         * @return {undefined}
         */
        var funked = function(event, ui) {
          eval(funcCode);
          event.stopPropagation();
        }
      } else {
        /**
         * @param {?} event
         * @param {?} ui
         * @return {undefined}
         */
        funked = function(event, ui) {
          eval(funcCode);
        };
      }
      return funked;
    }
    /**
     * @param {Object} theIx
     * @param {string} theString
     * @return {?}
     */
    function addCondition(theIx, theString) {
      if (theIx.conditions && theIx.conditions.length > 0) {
        var builtConds = theIx.retrieveCondition(isLive);
        /** @type {string} */
        var theCode = "if(" + builtConds + "){" + theString + "}";
      } else {
        /** @type {string} */
        theCode = theString;
      }
      return theCode;
    }
    /** @type {boolean} */
    var isToRealtimeBinding = false;
    /**
     * @return {undefined}
     */
    this.func = function() {
    };
    this.code = {};
    var theIx = this;
    var theEvent = theIx.event;
    var theStopBubbling = theIx.stopBubbling;
    var theTrigger = theIx.trigger;
    var theComment = theIx.comment;
    var theLostWorld = ixedit.lostWorld;
    /** @type {boolean} */
    var isLive = false;
    if (theEvent == "load" || theEvent == "unload") {
      /** @type {boolean} */
      isToRealtimeBinding = true;
    } else {
      if (theTrigger != "") {
        /** @type {boolean} */
        isToRealtimeBinding = true;
      }
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainPrefix0 = "";
      /** @type {string} */
      var chainPrefix1 = "";
    } else {
      if (theEvent == "unload") {
        /** @type {string} */
        chainPrefix0 = "jQuery(window)";
        /** @type {string} */
        chainPrefix1 = "jQuery(window)";
      } else {
        if (theTrigger == "window") {
          /** @type {string} */
          chainPrefix0 = "jQuery(window)";
          /** @type {string} */
          chainPrefix1 = "jQuery(window)";
        } else {
          /** @type {string} */
          chainPrefix0 = "var theIxeditDialog = jQuery('.ixedit-dialog'); jQuery('" + theTrigger + "')" + ".not(theIxeditDialog.add(jQuery('*', theIxeditDialog)))";
          /** @type {string} */
          chainPrefix1 = "jQuery('" + theTrigger + "')";
        }
      }
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainMiddle0 = ""
    } else {
      if (theTrigger == "window" || (theTrigger == "html" || (theTrigger == "body" || jQuery(theTrigger, theLostWorld).length > 0))) {
        /** @type {string} */
        chainMiddle0 = ".on('" + theEvent + "', ";
      } else {
        /** @type {string} */
        chainMiddle0 = ".live('" + theEvent + "', ";
        /** @type {boolean} */
        isLive = true;
      }
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainMiddle1 = ""
    } else {
      if (theTrigger == "window" || (theTrigger == "html" || (theTrigger == "body" || jQuery(theTrigger, theLostWorld).length > 0))) {
        /** @type {string} */
        chainMiddle1 = ".on('" + theEvent + "', function(event, ui){";
      } else {
        /** @type {string} */
        chainMiddle1 = ".live('" + theEvent + "', function(event, ui){";
      }
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainMiddle2 = "; "
    } else {
      /** @type {string} */
      chainMiddle2 = "})";
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainMiddle3 = "(); "
    } else {
      /** @type {string} */
      chainMiddle3 = ")";
    }
    if (theEvent == "load") {
      /** @type {string} */
      var chainSuffix = ""
    } else {
      /** @type {string} */
      chainSuffix = ";";
    }
    /** @type {Array} */
    var theFuncCodesArray0 = [];
    /** @type {Array} */
    var theFuncCodesArray1 = [];
    var thisActionsLength = this.actions.length;
    var usedCommands = {};
    /** @type {number} */
    var actnCnt = 0;
    for (;actnCnt < thisActionsLength;actnCnt++) {
      var theCommandName = this.actions[actnCnt].command;
      if (!usedCommands[theCommandName]) {
        usedCommands[theCommandName] = ixedit.cmds[theCommandName];
      }
      var funcStrings = this.retrieveAction(this.actions[actnCnt], isLive);
      if (funcStrings.length == 2 && (funcStrings[0] != "" && funcStrings[1] != "")) {
        theFuncCodesArray0[theFuncCodesArray0.length] = funcStrings[0];
        theFuncCodesArray1[theFuncCodesArray1.length] = funcStrings[1];
      }
    }
    /** @type {string} */
    var theJoinedFuncString0 = theFuncCodesArray0.join("; ");
    /** @type {string} */
    var theJoinedFuncString1 = theFuncCodesArray1.join("; ");
    if (this.preventDefault) {
      theJoinedFuncString0 += "; event.preventDefault()";
      theJoinedFuncString1 += "; event.preventDefault()";
    }
    if (this.stopBubbling) {
      theJoinedFuncString1 += "; event.stopPropagation()";
    }
    theJoinedFuncString0 = addCondition(theIx, theJoinedFuncString0);
    theJoinedFuncString1 = addCondition(theIx, theJoinedFuncString1);
    if (this.active) {
      this.func = getFunked(theJoinedFuncString0);
    }
    if (this.active) {
      /** @type {string} */
      var finalString0 = chainPrefix0 + chainMiddle0 + "this.func" + chainMiddle3 + chainSuffix
    }
    /** @type {string} */
    var finalString1 = "(function(){ " + chainPrefix1 + chainMiddle1 + theJoinedFuncString1 + chainMiddle2 + chainSuffix + "})();";
    /** @type {Array} */
    var preserves = [];
    var s;
    for (s in usedCommands) {
      if (ixedit.cmds[s] && (ixedit.cmds[s].preserve && ixedit.cmds[s].preserv != "")) {
        preserves[preserves.length] = ixedit.cmds[s].preserve;
      }
    }
    /** @type {string} */
    var preservedCode = preserves.join(";");
    this.code.comment = theComment;
    if (this.active) {
      /** @type {string} */
      this.code.source = finalString1;
      if (isToRealtimeBinding == true) {
        eval(preservedCode);
        eval(finalString0);
      }
    } else {
      /** @type {string} */
      this.code.source = "// " + finalString1;
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.ix.prototype.unset = function() {
    var thisFunc = this.func;
    var thisTrigger = this.trigger;
    var thisEvent = this.event;
    thisTrigger = thisTrigger.replace(/   /g, " ");
    thisTrigger = thisTrigger.replace(/  /g, " ");
    thisTrigger = thisTrigger.replace(/  /g, " ");
    thisTrigger = thisTrigger.replace(/ \+/g, "+");
    thisTrigger = thisTrigger.replace(/\+ /g, "+");
    jQuery(thisTrigger).off(thisEvent, thisFunc);
    if (this.code && this.code.source) {
      /** @type {string} */
      this.code.source = "// " + this.code.source;
    }
  };
  /**
   * @param {Object} action
   * @param {boolean} isLive
   * @return {?}
   */
  ixedit.ix.prototype.retrieveAction = function(action, isLive) {
    var target = action.target;
    var delay = action.delay;
    var command = action.command;
    var attributes = action.params;
    var attributesSub = action.subparams;
    if (!target || target == "") {
      /** @type {string} */
      target = "<anonymous></anonymous>";
    }
    if (!command) {
      return[];
    }
    if (!attributes) {
      return[];
    }
    if (delay == null) {
      /** @type {number} */
      delay = 0;
    } else {
      if (!delay) {
        /** @type {number} */
        delay = 0;
      }
    }
    if (ixedit.advancedMode) {
      if (this.event == "load" && (target == "secret about unchain" && command == "show")) {
        $("#ixedit-dialog-main").addClass("ixedit-dialog-aboutbox");
      }
    }
    if (ixedit.cmds[command]) {
      var theCmd = ixedit.cmds[command]
    } else {
      return[];
    }
    var theCommandString = theCmd.func(attributes, attributesSub);
    if (isLive) {
      /** @type {string} */
      var targetStr = "target"
    } else {
      /** @type {string} */
      targetStr = "currentTarget";
    }
    if (target == "this") {
      /** @type {string} */
      var exc = "var ixeditDialog = jQuery('.ixedit-dialog'); ";
      /** @type {string} */
      var targetingForRealtimeBinding = "var target = jQuery(event." + targetStr + ").not(ixeditDialog.add(jQuery('*', ixeditDialog))); ";
      /** @type {string} */
      var targetingForDeploy = "var target = jQuery(event." + targetStr + "); ";
    } else {
      if (target == "drop") {
        /** @type {string} */
        exc = "var ixeditDialog = jQuery('.ixedit-dialog'); ";
        /** @type {string} */
        targetingForRealtimeBinding = "var target = ui.draggable.not(ixeditDialog.add(jQuery('*', ixeditDialog))); ";
        /** @type {string} */
        targetingForDeploy = "var target = ui.draggable; ";
      } else {
        /** @type {string} */
        exc = "var ixeditDialog = jQuery('.ixedit-dialog'); ";
        /** @type {string} */
        targetingForRealtimeBinding = "var target = jQuery('" + target + "').not(ixeditDialog.add(jQuery('*', ixeditDialog))); ";
        /** @type {string} */
        targetingForDeploy = "var target = jQuery('" + target + "'); ";
      }
    }
    /** @type {string} */
    var targetPlusCommandString = "target." + theCommandString;
    if (theCmd.dontNeedTarget == true) {
      /** @type {string} */
      exc = "";
      /** @type {string} */
      targetingForRealtimeBinding = "";
      /** @type {string} */
      targetingForDeploy = "";
      targetPlusCommandString = theCommandString;
    }
    /** @type {Array} */
    var funcStrings = [];
    if (delay > 0 || this.conditions.length > 0) {
      /** @type {string} */
      funcStrings[0] = "setTimeout(function(){" + exc + targetingForRealtimeBinding + targetPlusCommandString + "}, " + delay + ")";
      /** @type {string} */
      funcStrings[1] = "setTimeout(function(){" + targetingForDeploy + targetPlusCommandString + "}, " + delay + ")";
    } else {
      /** @type {string} */
      funcStrings[0] = exc + targetingForRealtimeBinding + targetPlusCommandString;
      /** @type {string} */
      funcStrings[1] = targetingForDeploy + targetPlusCommandString;
    }
    return funcStrings;
  };
  /**
   * @param {boolean} isLive
   * @return {?}
   */
  ixedit.ix.prototype.retrieveCondition = function(isLive) {
    var conditions = this.conditions;
    /** @type {string} */
    var builtConds = "";
    var conditionsLength = conditions.length;
    /** @type {number} */
    var condCnt = 0;
    for (;condCnt < conditionsLength;condCnt++) {
      var cType = conditions[condCnt].type;
      var cTarget = conditions[condCnt].target;
      var cCommand = conditions[condCnt].command;
      var cAttributes = conditions[condCnt].params;
      if (ixedit.condcmds[cCommand]) {
        var theCmd = ixedit.cmds[cCommand]
      } else {
        return[];
      }
      if (cTarget == "") {
        /** @type {string} */
        cTarget = "body";
      }
      var theCondCmd = ixedit.condcmds[cCommand];
      if (isLive) {
        /** @type {string} */
        var targetStr = "target"
      } else {
        /** @type {string} */
        targetStr = "currentTarget";
      }
      if (cTarget == "this") {
        /** @type {string} */
        var targetString = "jQuery(event." + targetStr + ")"
      } else {
        if (cTarget == "drop") {
          /** @type {string} */
          targetString = "ui.draggable";
        } else {
          if (cTarget.substr(0, 6) == "event.") {
            targetString = cTarget;
          } else {
            /** @type {string} */
            targetString = "jQuery('" + cTarget + "')";
          }
        }
      }
      if (cType == "if") {
        /** @type {string} */
        var eq = "=="
      } else {
        /** @type {string} */
        eq = "!=";
      }
      var currentCond = theCondCmd.funcStr(targetString, cAttributes, eq);
      if (builtConds == "") {
        builtConds = currentCond;
      } else {
        /** @type {string} */
        builtConds = builtConds + " && " + currentCond;
      }
    }
    return builtConds;
  };
  /**
   * @return {undefined}
   */
  ixedit.ix.prototype.execute = function() {
    /** @type {number} */
    var actnCnt = 0;
    for (;actnCnt < this.actions.length;actnCnt++) {
      var theCommandString = this.retrieveAction(this.actions[actnCnt]);
      eval("jQuery(this.target)." + theCommandString);
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.cmd = function() {
    /** @type {string} */
    this.name = "";
    /** @type {string} */
    this.screenName = "";
    /** @type {string} */
    this.category = "";
    /** @type {Array} */
    this.attrs = [];
    /** @type {string} */
    this.help = "";
    /** @type {boolean} */
    this.dontNeedTarget = false;
    /** @type {boolean} */
    this.dontNeedDelay = false;
    /** @type {string} */
    this.preserve = "";
    /**
     * @return {undefined}
     */
    this.func = function() {
    };
    /**
     * @return {undefined}
     */
    this.initFunc = function() {
    };
    /**
     * @return {undefined}
     */
    this.afterValueLoadedFunc = function() {
    };
  };
  /**
   * @param {?} effactName
   * @param {string} speed
   * @return {?}
   */
  ixedit.cmd.prototype.effectParams = function(effactName, speed) {
    switch(effactName) {
      case "blind-v":
        /** @type {string} */
        var subCmd = "blind";
        /** @type {string} */
        var params = "{ direction: 'vertical' }";
        break;
      case "blind-h":
        /** @type {string} */
        subCmd = "blind";
        /** @type {string} */
        params = "{ direction: 'horizontal' }";
        break;
      case "clip-v":
        /** @type {string} */
        subCmd = "clip";
        /** @type {string} */
        params = "{ direction: 'vertical' }";
        break;
      case "clip-h":
        /** @type {string} */
        subCmd = "clip";
        /** @type {string} */
        params = "{ direction: 'horizontal' }";
        break;
      case "drop-l":
        /** @type {string} */
        subCmd = "drop";
        /** @type {string} */
        params = "{ direction: 'left' }";
        break;
      case "drop-r":
        /** @type {string} */
        subCmd = "drop";
        /** @type {string} */
        params = "{ direction: 'right' }";
        break;
      case "drop-u":
        /** @type {string} */
        subCmd = "drop";
        /** @type {string} */
        params = "{ direction: 'up' }";
        break;
      case "drop-d":
        /** @type {string} */
        subCmd = "drop";
        /** @type {string} */
        params = "{ direction: 'down' }";
        break;
      case "explode":
        /** @type {string} */
        subCmd = "explode";
        /** @type {string} */
        params = "{ pieces: 9 }";
        break;
      case "fold":
        /** @type {string} */
        subCmd = "fold";
        /** @type {string} */
        params = "{ size: 40 }";
        break;
      case "puff":
        /** @type {string} */
        subCmd = "puff";
        /** @type {string} */
        params = "{ percent: 150 }";
        break;
      case "slide-l":
        /** @type {string} */
        subCmd = "slide";
        /** @type {string} */
        params = "{ direction: 'left' }";
        break;
      case "slide-r":
        /** @type {string} */
        subCmd = "slide";
        /** @type {string} */
        params = "{ direction: 'right' }";
        break;
      case "slide-u":
        /** @type {string} */
        subCmd = "slide";
        /** @type {string} */
        params = "{ direction: 'up' }";
        break;
      case "slide-d":
        /** @type {string} */
        subCmd = "slide";
        /** @type {string} */
        params = "{ direction: 'down' }";
        break;
      case "scale":
        /** @type {string} */
        subCmd = "scale";
        /** @type {string} */
        params = "{ }";
        break;
      case "pulsate":
        /** @type {string} */
        subCmd = "pulsate";
        /** @type {string} */
        params = "{ times: 3 }";
        break;
      default:
        /** @type {string} */
        subCmd = "";
        /** @type {string} */
        params = "";
        break;
    }
    if (subCmd != "") {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + subCmd + "'" + ", " + params + ", " + speed + "" + ")"
    } else {
      /** @type {string} */
      commandString = this.name + "(" + speed + ")";
    }
    return commandString;
  };
  /**
   * @param {number} actionNo
   * @return {?}
   */
  ixedit.cmd.prototype.jqueryObj = function(actionNo) {
    var theAttrsArea = jQuery('<div class="ixedit-attrsarea ixedit-attrsarea-' + this.name + '"></div>');
    if (this.attrs.length > 0) {
      /** @type {Array} */
      var theHTML = [];
      var thisAttrsLength = this.attrs.length;
      /** @type {number} */
      var a = 0;
      for (;a < thisAttrsLength;a++) {
        /** @type {number} */
        var number = a + 1;
        var theAttr = this.attrs[a];
        switch(typeof theAttr[1]) {
          case "string":
            if (theAttr[1] == "") {
              theHTML[theHTML.length] = theAttr[0] + '<input type="text" class="ixedit-inputitem ixedit-' + this.name + "-" + number + '" value="" />' + theAttr[2];
            }
            break;
          case "boolean":
            if (theAttr[1] == true) {
              /** @type {string} */
              var checking = ' checked="checked" '
            } else {
              /** @type {string} */
              checking = "";
            }
            theHTML[theHTML.length] = theAttr[0] + '<input type="checkbox" class="ixedit-inputitem ixedit-' + this.name + "-" + number + '"' + checking + " />" + theAttr[2];
            break;
          case "object":
            theHTML[theHTML.length] = theAttr[0] + '<select class="ixedit-inputitem ixedit-' + this.name + "-" + number + '">' + ixedit.arrayToOptions(theAttr[1]) + "</select>" + theAttr[2];
            break;
          case "function":
            theHTML[theHTML.length] = theAttr[0] + theAttr[1](this) + theAttr[2];
            break;
          default:
            break;
        }
      }
      theAttrsArea.append(jQuery(theHTML.join("")));
    }
    return theAttrsArea;
  };
  /**
   * @return {undefined}
   */
  ixedit.condcmd = function() {
    /** @type {string} */
    this.name = "";
    /** @type {string} */
    this.screenName = "";
    /** @type {Array} */
    this.attrSelects = [];
  };
  /**
   * @return {?}
   */
  ixedit.condcmd.prototype.jqueryObj = function() {
    if (this.attrs.length > 0) {
      var theAttrsArea = jQuery('<div class="ixedit-cond-attrsarea ixedit-cond-attrsarea-' + this.name + '"></div>');
      /** @type {string} */
      var theHTML = "";
      var thisAttrsLength = this.attrs.length;
      /** @type {number} */
      var a = 0;
      for (;a < thisAttrsLength;a++) {
        /** @type {number} */
        var number = a + 1;
        var theAttr = this.attrs[a];
        switch(typeof theAttr[1]) {
          case "string":
            if (theAttr[1] == "") {
              theHTML += theAttr[0] + '<input type="text" class="ixedit-inputitem ixedit-cond-input-' + this.name + "-" + number + '" value="" />' + theAttr[2];
            }
            break;
          case "object":
            theHTML += theAttr[0] + '<select class="ixedit-inputitem ixedit-cond-input-' + this.name + "-" + number + '">' + ixedit.arrayToOptions(theAttr[1]) + "</select>" + theAttr[2];
            break;
          default:
            break;
        }
      }
      theAttrsArea.append(jQuery(theHTML));
      return theAttrsArea;
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.listItem = function() {
    /** @type {string} */
    this.active = "";
    /** @type {string} */
    this.trigger = "";
    /** @type {string} */
    this.event = "";
    /** @type {string} */
    this.target = "";
    /** @type {string} */
    this.delay = "";
    /** @type {string} */
    this.comment = "";
    /** @type {string} */
    this.command = "";
    /** @type {string} */
    this.condition = "";
  };
  /**
   * @return {undefined}
   */
  ixedit.preAssignSelectOptions = function() {
    var options = this.selectOptions;
    var label = this.label;
    /** @type {Array} */
    options.eventHandlers = [[label.eventLoad, "load"], [label.eventUnload, "unload"], [label.eventChange, "change"], [label.eventClick, "click"], [label.eventDblClick, "dblclick"], [label.eventDrop, "drop"], [label.eventFocus, "focus"], [label.eventFocusOut, "blur"], [label.eventKeyUp, "keyup"], [label.eventMouseDown, "mousedown"], [label.eventMouseMove, "mousemove"], [label.eventMouseOut, "mouseout"], [label.eventMouseOver, "mouseover"], [label.eventMouseUp, "mouseup"], [label.eventResize, "resize"],
      [label.eventScroll, "scroll"], [label.eventSelect, "select"], [label.eventSubmit, "submit"]];
    /** @type {Array} */
    options.eventHandlersForAccordion = [[label.eventClick, "click"], [label.eventDblClick, "dblclick"], [label.eventMouseDown, "mousedown"], [label.eventMouseOver, "mouseover"], [label.eventMouseUp, "mouseup"]];
    /** @type {Array} */
    options.cssProperties = [["background", "background"], ["background-attachment", "background-attachment"], ["background-color", "background-color"], ["background-image", "background-image"], ["background-position", "background-position"], ["background-repeat", "background-repeat"], ["border", "border"], ["border-bottom", "border-bottom"], ["border-bottom-color", "border-bottom-color"], ["border-bottom-style", "border-bottom-style"], ["border-bottom-width", "border-bottom-width"], ["border-collapse",
      "border-collapse"], ["border-color", "border-color"], ["border-left", "border-left"], ["border-left-color", "border-left-color"], ["border-left-style", "border-left-style"], ["border-left-width", "border-left-width"], ["border-right", "border-right"], ["border-right-color", "border-right-color"], ["border-right-style", "border-right-style"], ["border-right-width", "border-right-width"], ["border-spacing", "border-spacing"], ["border-style", "border-style"], ["border-top", "border-top"], ["border-top-color",
      "border-top-color"], ["border-top-style", "border-top-style"], ["border-top-width", "border-top-width"], ["border-width", "border-width"], ["bottom", "bottom"], ["caption-side", "caption-side"], ["clear", "clear"], ["clip", "clip"], ["color", "color"], ["content", "content"], ["counter-increment", "counter-increment"], ["counter-reset", "counter-reset"], ["cursor", "cursor"], ["direction", "direction"], ["display", "display"], ["empty-cells", "empty-cells"], ["float", "float"], ["font", "font"],
      ["font-family", "font-family"], ["font-size", "font-size"], ["font-style", "font-style"], ["font-variant", "font-variant"], ["font-weight", "font-weight"], ["height", "height"], ["left", "left"], ["letter-spacing", "letter-spacing"], ["line-height", "line-height"], ["list-style", "list-style"], ["list-style-image", "list-style-image"], ["list-style-position", "list-style-position"], ["list-style-type", "list-style-type"], ["margin", "margin"], ["margin-bottom", "margin-bottom"], ["margin-left",
        "margin-left"], ["margin-right", "margin-right"], ["margin-top", "margin-top"], ["max-height", "max-height"], ["max-width", "max-width"], ["min-height", "min-height"], ["min-width", "min-width"], ["outline", "outline"], ["outline-color", "outline-color"], ["outline-style", "outline-style"], ["outline-width", "outline-width"], ["overflow", "overflow"], ["padding", "padding"], ["padding-bottom", "padding-bottom"], ["padding-left", "padding-left"], ["padding-right", "padding-right"], ["padding-top",
        "padding-top"], ["position", "position"], ["quotes", "quotes"], ["right", "right"], ["table-layout", "table-layout"], ["text-align", "text-align"], ["text-decoration", "text-decoration"], ["text-indent", "text-indent"], ["text-transform", "text-transform"], ["top", "top"], ["unicode-bidi", "unicode-bidi"], ["vertical-align", "vertical-align"], ["visibility", "visibility"], ["white-space", "white-space"], ["width", "width"], ["word-spacing", "word-spacing"], ["z-index", "z-index"]];
    /** @type {Array} */
    options.cssProperties = [["alignment-adjust", "alignment-adjust"], ["alignment-baseline", "alignment-baseline"], ["animation", "animation"], ["animation-delay", "animation-delay"], ["animation-direction", "animation-direction"], ["animation-duration", "animation-duration"], ["animation-iteration-count", "animation-iteration-count"], ["animation-name", "animation-name"], ["animation-play-state", "animation-play-state"], ["animation-timing-function", "animation-timing-function"], ["appearance",
      "appearance"], ["azimuth", "azimuth"], ["background", "background"], ["background-attachment", "background-attachment"], ["background-break", "background-break"], ["background-clip", "background-clip"], ["background-color", "background-color"], ["background-image", "background-image"], ["background-origin", "background-origin"], ["background-position", "background-position"], ["background-repeat", "background-repeat"], ["background-size", "background-size"], ["baseline-shift", "baseline-shift"],
      ["binding", "binding"], ["bookmark-label", "bookmark-label"], ["bookmark-level", "bookmark-level"], ["bookmark-target", "bookmark-target"], ["border", "border"], ["border-bottom", "border-bottom"], ["border-bottom-color", "border-bottom-color"], ["border-bottom-left-radius", "border-bottom-left-radius"], ["border-bottom-right-radius", "border-bottom-right-radius"], ["border-bottom-style", "border-bottom-style"], ["border-bottom-width", "border-bottom-width"], ["border-break", "border-break"],
      ["border-collapse", "border-collapse"], ["border-color", "border-color"], ["border-image", "border-image"], ["border-left", "border-left"], ["border-left-color", "border-left-color"], ["border-left-style", "border-left-style"], ["border-left-width", "border-left-width"], ["border-length", "border-length"], ["border-radius", "border-radius"], ["border-right", "border-right"], ["border-right-color", "border-right-color"], ["border-right-style", "border-right-style"], ["border-right-width", "border-right-width"],
      ["border-spacing", "border-spacing"], ["border-style", "border-style"], ["border-top", "border-top"], ["border-top-color", "border-top-color"], ["border-top-left-radius", "border-top-left-radius"], ["border-top-right-radius", "border-top-right-radius"], ["border-top-style", "border-top-style"], ["border-top-width", "border-top-width"], ["border-width", "border-width"], ["bottom", "bottom"], ["box-align", "box-align"], ["box-direction", "box-direction"], ["box-flex", "box-flex"], ["box-flex-group",
        "box-flex-group"], ["box-lines", "box-lines"], ["box-ordinal-group", "box-ordinal-group"], ["box-orient", "box-orient"], ["box-pack", "box-pack"], ["box-shadow", "box-shadow"], ["box-sizing", "box-sizing"], ["caption-side", "caption-side"], ["clear", "clear"], ["clip", "clip"], ["color", "color"], ["color-profile", "color-profile"], ["column-break-after", "column-break-after"], ["column-break-before", "column-break-before"], ["column-count", "column-count"], ["column-fill", "column-fill"], ["column-gap",
        "column-gap"], ["column-rule", "column-rule"], ["column-rule-color", "column-rule-color"], ["column-rule-style", "column-rule-style"], ["column-rule-width", "column-rule-width"], ["column-span", "column-span"], ["column-width", "column-width"], ["columns", "columns"], ["content", "content"], ["counter-increment", "counter-increment"], ["counter-reset", "counter-reset"], ["crop", "crop"], ["cue", "cue"], ["cue-after", "cue-after"], ["cue-before", "cue-before"], ["cursor", "cursor"], ["direction",
        "direction"], ["display", "display"], ["display-model", "display-model"], ["display-role", "display-role"], ["dominant-baseline", "dominant-baseline"], ["drop-initial-after-adjust", "drop-initial-after-adjust"], ["drop-initial-after-align", "drop-initial-after-align"], ["drop-initial-before-adjust", "drop-initial-before-adjust"], ["drop-initial-before-align", "drop-initial-before-align"], ["drop-initial-size", "drop-initial-size"], ["drop-initial-value", "drop-initial-value"], ["elevation", "elevation"],
      ["empty-cells", "empty-cells"], ["fit", "fit"], ["fit-position", "fit-position"], ["float", "float"], ["float-offset", "float-offset"], ["font", "font"], ["font-family", "font-family"], ["font-size", "font-size"], ["font-size-adjust", "font-size-adjust"], ["font-stretch", "font-stretch"], ["font-style", "font-style"], ["font-variant", "font-variant"], ["font-weight", "font-weight"], ["grid-columns", "grid-columns"], ["grid-rows", "grid-rows"], ["hanging-punctuation", "hanging-punctuation"], ["height",
        "height"], ["hyphenate-after", "hyphenate-after"], ["hyphenate-before", "hyphenate-before"], ["hyphenate-character", "hyphenate-character"], ["hyphenate-lines", "hyphenate-lines"], ["hyphenate-resource", "hyphenate-resource"], ["hyphens", "hyphens"], ["icon", "icon"], ["image-orientation", "image-orientation"], ["image-resolution", "image-resolution"], ["inline-box-align", "inline-box-align"], ["left", "left"], ["letter-spacing", "letter-spacing"], ["line-height", "line-height"], ["line-stacking",
        "line-stacking"], ["line-stacking-ruby", "line-stacking-ruby"], ["line-stacking-shift", "line-stacking-shift"], ["line-stacking-strategy", "line-stacking-strategy"], ["list-style", "list-style"], ["list-style-image", "list-style-image"], ["list-style-position", "list-style-position"], ["list-style-type", "list-style-type"], ["margin", "margin"], ["margin-bottom", "margin-bottom"], ["margin-left", "margin-left"], ["margin-right", "margin-right"], ["margin-top", "margin-top"], ["mark", "mark"],
      ["mark-after", "mark-after"], ["mark-before", "mark-before"], ["marks", "marks"], ["marquee-direction", "marquee-direction"], ["marquee-play-count", "marquee-play-count"], ["marquee-speed", "marquee-speed"], ["marquee-style", "marquee-style"], ["max-height", "max-height"], ["max-width", "max-width"], ["min-height", "min-height"], ["min-width", "min-width"], ["move-to", "move-to"], ["nav-down", "nav-down"], ["nav-index", "nav-index"], ["nav-left", "nav-left"], ["nav-right", "nav-right"], ["nav-up",
        "nav-up"], ["opacity", "opacity"], ["orphans", "orphans"], ["outline", "outline"], ["outline-color", "outline-color"], ["outline-offset", "outline-offset"], ["outline-style", "outline-style"], ["outline-width", "outline-width"], ["overflow", "overflow"], ["overflow-style", "overflow-style"], ["overflow-x", "overflow-x"], ["overflow-y", "overflow-y"], ["padding", "padding"], ["padding-bottom", "padding-bottom"], ["padding-left", "padding-left"], ["padding-right", "padding-right"], ["padding-top",
        "padding-top"], ["page", "page"], ["page-break-after", "page-break-after"], ["page-break-before", "page-break-before"], ["page-break-inside", "page-break-inside"], ["page-policy", "page-policy"], ["pause", "pause"], ["pause-after", "pause-after"], ["pause-before", "pause-before"], ["phonemes", "phonemes"], ["pitch", "pitch"], ["pitch-range", "pitch-range"], ["play-during", "play-during"], ["position", "position"], ["presentation-level", "presentation-level"], ["punctuation-trim", "punctuation-trim"],
      ["quotes", "quotes"], ["rendering-intent", "rendering-intent"], ["resize", "resize"], ["rest", "rest"], ["rest-after", "rest-after"], ["rest-before", "rest-before"], ["richness", "richness"], ["right", "right"], ["rotation", "rotation"], ["rotation-point", "rotation-point"], ["ruby-align", "ruby-align"], ["ruby-overhang", "ruby-overhang"], ["ruby-position", "ruby-position"], ["ruby-span", "ruby-span"], ["size", "size"], ["speak", "speak"], ["speak-header", "speak-header"], ["speak-numeral", "speak-numeral"],
      ["speak-punctuation", "speak-punctuation"], ["speech-rate", "speech-rate"], ["stress", "stress"], ["string-set", "string-set"], ["tab-side", "tab-side"], ["table-layout", "table-layout"], ["target", "target"], ["target-name", "target-name"], ["target-new", "target-new"], ["target-position", "target-position"], ["text-align", "text-align"], ["text-align-last", "text-align-last"], ["text-decoration", "text-decoration"], ["text-emphasis", "text-emphasis"], ["text-height", "text-height"], ["text-indent",
        "text-indent"], ["text-justify", "text-justify"], ["text-outline", "text-outline"], ["text-replace", "text-replace"], ["text-shadow", "text-shadow"], ["text-transform", "text-transform"], ["text-wrap", "text-wrap"], ["top", "top"], ["transition", "transition"], ["transition-delay", "transition-delay"], ["transition-duration", "transition-duration"], ["transition-property", "transition-property"], ["transition-timing-function", "transition-timing-function"], ["unicode-bidi", "unicode-bidi"], ["vertical-align",
        "vertical-align"], ["visibility", "visibility"], ["voice-balance", "voice-balance"], ["voice-duration", "voice-duration"], ["voice-family", "voice-family"], ["voice-pitch", "voice-pitch"], ["voice-pitch-range", "voice-pitch-range"], ["voice-rate", "voice-rate"], ["voice-stress", "voice-stress"], ["voice-volume", "voice-volume"], ["volume", "volume"], ["white-space", "white-space"], ["white-space-collapse", "white-space-collapse"], ["widows", "widows"], ["width", "width"], ["word-break", "word-break"],
      ["word-spacing", "word-spacing"], ["word-wrap", "word-wrap"], ["z-index", "z-index"], ["-webkit-border-radius", "-webkit-border-radius"]];
    /** @type {Array} */
    options.elementAttrs = [["abbr", "abbr"], ["accept", "accept"], ["accept-charset", "accept-charset"], ["accesskey", "accesskey"], ["action", "action"], ["align", "align"], ["alink", "alink"], ["alt", "alt"], ["archive", "archive"], ["axis", "axis"], ["background", "background"], ["bgcolor", "bgcolor"], ["border", "border"], ["cellpadding", "cellpadding"], ["cellspacing", "cellspacing"], ["char", "char"], ["charoff", "charoff"], ["charset", "charset"], ["checked", "checked"], ["cite", "cite"],
      ["class", "class"], ["classid", "classid"], ["clear", "clear"], ["code", "code"], ["codebase", "codebase"], ["codetype", "codetype"], ["color", "color"], ["cols", "cols"], ["colspan", "colspan"], ["compact", "compact"], ["coords", "coords"], ["data", "data"], ["datetime", "datetime"], ["declare", "declare"], ["defer", "defer"], ["dir", "dir"], ["disabled", "disabled"], ["enctype", "enctype"], ["face", "face"], ["for", "for"], ["frame", "frame"], ["frameborder", "frameborder"], ["headers", "headers"],
      ["height", "height"], ["href", "href"], ["hreflang", "hreflang"], ["hspace", "hspace"], ["id", "id"], ["ismap", "ismap"], ["label", "label"], ["lang", "lang"], ["link", "link"], ["longdesc", "longdesc"], ["marginheight", "marginheight"], ["marginwidth", "marginwidth"], ["maxlength", "maxlength"], ["media", "media"], ["method", "method"], ["multiple", "multiple"], ["name", "name"], ["nohref", "nohref"], ["noresize", "noresize"], ["noshade", "noshade"], ["nowrap", "nowrap"], ["object", "object"],
      ["profile", "profile"], ["prompt", "prompt"], ["readonly", "readonly"], ["rel", "rel"], ["rev", "rev"], ["rows", "rows"], ["rowspan", "rowspan"], ["rules", "rules"], ["scope", "scope"], ["scrolling", "scrolling"], ["selected", "selected"], ["shape", "shape"], ["size", "size"], ["span", "span"], ["src", "src"], ["standby", "standby"], ["start", "start"], ["style", "style"], ["summary", "summary"], ["tabindex", "tabindex"], ["target", "target"], ["text", "text"], ["title", "title"], ["type", "type"],
      ["usemap", "usemap"], ["valign", "valign"], ["value", "value"], ["valuetype", "valuetype"], ["vlink", "vlink"], ["vspace", "vspace"], ["width", "width"], ["wrap", "wrap"]];
    /** @type {Array} */
    options.statusAttrs = [["Checked", "checked"], ["Unchecked", "unchecked"], ["Disabled", "disabled"], ["Enabled", "enabled"], ["Selected", "selected"], ["Unselected", "selected"]];
    /** @type {Array} */
    options.speedAttrs = [[label.normal, "0"], ["1ms", "1"], ["10ms", "10"], ["100ms", "100"], ["250ms", "250"], ["500ms", "500"], ["1000ms", "1000"], ["2500ms", "2500"], ["5000ms", "5000"], ["10000ms", "10000"]];
    /** @type {Array} */
    options.delayAttrs = [[label.none, "0"], ["1ms", "1"], ["10ms", "10"], ["100ms", "100"], ["250ms", "250"], ["500ms", "500"], ["1000ms", "1000"], ["2500ms", "2500"], ["5000ms", "5000"], ["10000ms", "10000"]];
    /** @type {Array} */
    options.opacityAttrs = [["0%", "0"], ["25%", "0.25"], ["50%", "0.5"], ["75%", "0.75"], ["100%", "1"]];
    /** @type {Array} */
    options.animateProperties = [["background-color", "backgroundColor"], ["border-bottom-color", "borderBottomColor"], ["border-bottom-width", "borderBottomWidth"], ["border-left-color", "borderLeftColor"], ["border-left-width", "borderLeftWidth"], ["border-right-color", "borderRightColor"], ["border-right-width", "borderRightWidth"], ["border-spacing", "borderSpacing"], ["border-top-color", "borderTopColor"], ["border-top-width", "borderTopWidth"], ["border-width", "borderWidth"], ["bottom", "bottom"],
      ["color", "color"], ["font-size", "fontSize"], ["height", "height"], ["left", "left"], ["letter-spacing", "letterSpacing"], ["line-height", "lineHeight"], ["margin", "margin"], ["margin-bottom", "marginBottom"], ["margin-left", "marginLeft"], ["margin-right", "marginRight"], ["margin-top", "marginTop"], ["max-height", "maxHeight"], ["max-width", "maxWidth"], ["min-height", "minHeight"], ["min-width", "minWidth"], ["opacity", "opacity"], ["outline-color", "outlineColor"], ["outline-width", "outlineWidth"],
      ["padding", "padding"], ["padding-bottom", "paddingBottom"], ["padding-left", "paddingLeft"], ["padding-right", "paddingRight"], ["padding-top", "paddingTop"], ["right", "right"], ["scroll-v", "scrollTop"], ["scroll-h", "scrollLeft"], ["text-indent", "textIndent"], ["top", "top"], ["width", "width"], ["word-spacing", "wordSpacing"]];
    /** @type {Array} */
    options.relativeAttrs = [["To", ""], ["+", "+="], ["-", "-="]];
    /** @type {Array} */
    options.easingAttrs = [[label.linear, "linear"], ["Swing", "swing"], ["In Quad", "easeInQuad"], ["In Out Quad", "easeInOutQuad"], ["In Cubic", "easeInCubic"], ["Out Cubic", "easeOutCubic"], ["In Out Cubic", "easeInOutCubic"], ["In Quart", "easeInQuart"], ["Out Quart", "easeOutQuart"], ["In Out Quart", "easeInOutQuart"], ["In Quint", "easeInQuint"], ["Out Quint", "easeOutQuint"], ["In Out Quint", "easeInOutQuint"], ["In Sine", "easeInSine"], ["Out Sine", "easeOutSine"], ["In Out Sine", "easeInOutSine"],
      ["In Expo", "easeInExpo"], ["Out Expo", "easeOutExpo"], ["In Out Expo", "easeInOutExpo"], ["In Circ", "easeInCirc"], ["Out Circ", "easeOutCirc"], ["In Out Circ", "easeInOutCirc"], ["In Elastic", "easeInElastic"], ["Out Elastic", "easeOutElastic"], ["In Out Elastic", "easeInOutElastic"], ["In Back", "easeInBack"], ["Out Back", "easeOutBack"], ["In Out Back", "easeInOutBack"], ["In Bounce", "easeInBounce"], ["Out Bounce", "easeOutBounce"], ["In Out Bounce", "easeInOutBounce"]];
    /** @type {Array} */
    options.basicEffectAttrs = [[label.none, ""], ["Blind Vertical", "blind-v"], ["Blind Horizontal", "blind-h"], ["Clip Vertical", "clip-v"], ["Clip Horizontal", "clip-h"], ["Drop Left", "drop-l"], ["Drop Right", "drop-r"], ["Drop Up", "drop-u"], ["Drop Down", "drop-d"], ["Explode", "explode"], ["Fold", "fold"], ["Puff", "puff"], ["Slide Left", "slide-l"], ["Slide Right", "slide-r"], ["Slide Up", "slide-u"], ["Slide Down", "slide-d"], ["Scale", "scale"], ["Pulsate", "pulsate"]];
    /** @type {Array} */
    options.statuses = [["Visible", "visible"], ["Hidden", "hidden"], ["Checked", "checked"], ["Selected", "selected"], ["Disabled", "disabled"]];
    /** @type {Array} */
    options.condTypes = [["Shown", "visible"], ["Hidden", "hidden"], ["Checked", "checked"], ["Selected", "selected"], ["Enabled", "enabled"], ["Disabled", "disabled"]];
    /** @type {Array} */
    options.insertHTMLTypes = [[label.insertHTMLOverwrite, "html"], [label.insertHTMLInsideBottom, "append"], [label.insertHTMLInsideTop, "prepend"], [label.insertHTMLAfter, "after"], [label.insertHTMLBefore, "before"]];
    /** @type {Array} */
    options.dragAxes = [[label.none, "0"], [label.dragAxesX, "1"], [label.dragAxesY, "2"]];
    /** @type {Array} */
    options.datePickerFormats = [["mm/dd/yy", "mm/dd/yy"], ["yy/mm/dd", "yy/mm/dd"], ["yy-mm-dd", "yy-mm-dd"]];
  };
  ixedit.cmdCat = {
    0 : "dom",
    1 : "effect",
    2 : "generate",
    11 : "misc",
    21 : "advanced"
  };
  /**
   * @return {undefined}
   */
  ixedit.preAssignCmds = function() {
    var lang = ixedit.lang;
    var cmd = ixedit.cmd;
    var cmds = ixedit.cmds;
    var options = ixedit.selectOptions;
    var label = ixedit.label;
    /** @type {string} */
    lang.en.cmdSNAddClass = "Add Class";
    /** @type {string} */
    lang.en.commandHelpAddClass = "<h2>About Add Class Command</h2><p>Add Class command will add the specified class name to the selected element.</p>";
    var newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "addClass";
    newCmd.screenName = label.cmdSNAddClass;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-addclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-addclassvalue">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpAddClass;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.addClass = newCmd;
    /** @type {string} */
    lang.en.cmdSNRemoveClass = "Remove Class";
    /** @type {string} */
    lang.en.commandHelpRemoveClass = "<h2>About Remove Class Command</h2><p>Remove Class command will remove the specified class name from the selected element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "removeClass";
    newCmd.screenName = label.cmdSNRemoveClass;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-removeclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-removeclassvalue">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpRemoveClass;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.removeClass = newCmd;
    /** @type {string} */
    lang.en.cmdSNAddRemoveClass = "Add/Remove Class";
    /** @type {string} */
    lang.en.commandHelpAddRemoveClass = "<h2>About Add/Remove Class Command</h2><p>Add/Remove Class command will add the specified class name to the selected element if it is not present, or will remove the specified class name from the target element if it is present.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "toggleClass";
    newCmd.screenName = label.cmdSNAddRemoveClass;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-addremoveclassvalue ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-addremoveclassvalue">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpAddRemoveClass;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.toggleClass = newCmd;
    /** @type {string} */
    lang.en.cmdSNCss = "Change Style";
    /** @type {string} */
    lang.en.commandHelpCss = "<h2>About Change Style Command</h2><p>Change Style command will add or change style on the selected element. Specify CSS property and it's value. It's just like how you edit CSS.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "css";
    newCmd.screenName = label.cmdSNCss;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-cssproperty ixedit-labelarea-default">' + label.inputLabelCss + '</td><td class="ixedit-inputarea-cssproperty ixedit-inputarea-xlarge">', options.cssProperties, "</td>"], ['<td class="ixedit-inputarea-cssvalue">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpCss;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + "," + "'" + attributeArray[1] + "'" + ")";
      return commandString;
    };
    cmds.css = newCmd;
    /** @type {string} */
    lang.en.cmdSNVal = "Change Value";
    /** @type {string} */
    lang.en.commandHelpVal = "<h2>About Change Value Command</h2><p>Change Value command will change value of value attribute on the selected element.</p><h3>Available Elements</h3><ul><li>button</li><li>input</li><li>li (under ol)</li><li>option</li></ul>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "val";
    newCmd.screenName = label.cmdSNVal;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelValue + '</td><td class="ixedit-inputarea-attributevalue">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpVal;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.val = newCmd;
    /** @type {string} */
    lang.en.cmdSNStatus = "Change Status";
    /** @type {string} */
    lang.en.commandHelpStatus = '<h2>About Change Status Command</h2><p>Change Status command will change status of selected element.</p><h3>Available Elements</h3><ul><li>Checked and Unchecked for input[type="checkbox"] and input[type="radio"].</li><li>Selected and Unselected for option.</li><li>Disabled and Enabled for button, input, optgroup, option, select, and textarea.</li></ul>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "status";
    newCmd.screenName = label.cmdSNStatus;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelStatus + '</td><td class="ixedit-inputarea-attributename ixedit-inputarea-xlarge">', options.statusAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpStatus;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      switch(attributeArray[0]) {
        case "checked":
          /** @type {string} */
          var commandString = "attr('checked', 'true')";
          break;
        case "unchecked":
          /** @type {string} */
          commandString = "removeAttr('checked')";
          break;
        case "selected":
          /** @type {string} */
          commandString = "attr('selected', 'true')";
          break;
        case "unselected":
          /** @type {string} */
          commandString = "removeAttr('selected')";
          break;
        case "disabled":
          /** @type {string} */
          commandString = "attr('disabled', 'true')";
          break;
        case "enabled":
          /** @type {string} */
          commandString = "removeAttr('disabled')";
          break;
        default:
          /** @type {string} */
          commandString = "attr('checked', 'true')";
      }
      return commandString;
    };
    cmds.status = newCmd;
    /** @type {string} */
    lang.en.cmdSNRemoveAttr = "Remove Attribute";
    /** @type {string} */
    lang.en.commandHelpRemoveAttr = "<h2>About Remove Attribute Command</h2><p>Remove Attribute command will remove specified attribute from the selected element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "removeAttr";
    newCmd.screenName = label.cmdSNRemoveAttr;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-removeattributename ixedit-labelarea-default">' + label.inputLabelAttribute + '</td><td class="ixedit-inputarea-removeattributename ixedit-inputarea-xlarge">', options.elementAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpRemoveAttr;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.removeAttr = newCmd;
    /** @type {string} */
    lang.en.cmdSNInsertHTML = "Insert HTML";
    /** @type {string} */
    lang.en.commandHelpInsertHtml = '<h2>About Insert HTML Command</h2><p>Insert HTML command will insert specified HTML string (e.g. "&lt;p&gt;Hello&lt;/p&gt;") by several ways such as overwriting inside of the selected element, inserting to the inside-bottom of the selected element, inserting to the inside-top of the selected element, inserting after the selected element, or inserting before selected element.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "insertHTML";
    newCmd.screenName = label.cmdSNInsertHTML;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-inserthtmlvalue ixedit-labelarea-default">' + label.inputLabelInsertHTMLValue + '</td><td class="ixedit-inputarea-inserthtmlvalue">', "", "</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-inserthtmltype ixedit-labelarea-default">' + label.inputLabelInsertHTMLPoint + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-xxlarge">', options.insertHTMLTypes, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpInsertHtml;
    /** @type {boolean} */
    newCmd.dontNeedTarget = false;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var htmlValue = attributeArray[0].replace(/'/g, "");
      switch(attributeArray[1]) {
        case "html":
          /** @type {string} */
          var commandString = "html('" + htmlValue + "')";
          break;
        case "append":
          /** @type {string} */
          commandString = "append('" + htmlValue + "')";
          break;
        case "prepend":
          /** @type {string} */
          commandString = "prepend('" + htmlValue + "')";
          break;
        case "after":
          /** @type {string} */
          commandString = "after('" + htmlValue + "')";
          break;
        case "before":
          /** @type {string} */
          commandString = "before('" + htmlValue + "')";
          break;
      }
      return commandString;
    };
    cmds.insertHTML = newCmd;
    /** @type {string} */
    lang.en.cmdSNLoad = "Insert Remote HTML";
    /** @type {string} */
    lang.en.commandHelpLoad = "<h2>About Insert Remote HTML Command</h2><p>Insert Remote HTML command will insert HTML from a remote file to the selected element. This will overwrite the existing content of the selected element. Remote file you request and this page should be in the same domain. HTML from a different domain cannot be loaded unless this page is on your local computer.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "load";
    newCmd.screenName = label.cmdSNLoad;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-loadurl ixedit-labelarea-default">' + label.inputLabelLoadURL + '</td><td class="ixedit-inputarea-loadurl">', "", "</td></tr><tr><td>&nbsp;</td><td>" + label.inputLabelLoadURLAnnotation + "</td></tr></table>"]];
    newCmd.help = label.commandHelpLoad;
    /** @type {boolean} */
    newCmd.dontNeedTarget = false;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "('" + attributeArray[0] + "')";
      return commandString;
    };
    cmds.load = newCmd;
    /** @type {string} */
    lang.en.cmdSNEmpty = "Empty Element";
    /** @type {string} */
    lang.en.commandHelpEmpty = "<h2>About Empty Element Command</h2><p>Empty Element command will remove all child nodes from the selected element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "empty";
    newCmd.screenName = label.cmdSNEmpty;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [];
    newCmd.help = label.commandHelpEmpty;
    /**
     * @param {?} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "()";
      return commandString;
    };
    cmds.empty = newCmd;
    /** @type {string} */
    lang.en.cmdSNRemove = "Remove Element";
    /** @type {string} */
    lang.en.commandHelpRemove = "<h2>About Remove Element Command</h2><p>Remove Element command will remove the selected element from the DOM.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "remove";
    newCmd.screenName = label.cmdSNRemove;
    newCmd.category = ixedit.cmdCat[0];
    /** @type {Array} */
    newCmd.attrs = [];
    newCmd.help = label.commandHelpRemove;
    /**
     * @param {?} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "()";
      return commandString;
    };
    cmds.remove = newCmd;
    /** @type {string} */
    lang.en.cmdSNShow = "Show";
    /** @type {string} */
    lang.en.commandHelpShow = "<h2>About Show Command</h2><p>Show command will display the selected element if it is hidden. If you apply duration on an inline-element, it will be changed as a block-element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "show";
    newCmd.screenName = label.cmdSNShow;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-showspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-showspeed ixedit-inputarea-medium">', options.speedAttrs, "</td>"], ['<td class="ixedit-labelarea-showeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-showeffect ixedit-inputarea-large">', options.basicEffectAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpShow;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
      return commandString;
    };
    cmds.show = newCmd;
    /** @type {string} */
    lang.en.cmdSNHide = "Hide";
    /** @type {string} */
    lang.en.commandHelpHide = "<h2>About Hide Command</h2><p>Hide command will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "hide";
    newCmd.screenName = label.cmdSNHide;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-hidespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-hidespeed ixedit-inputarea-medium">', options.speedAttrs, "</td>"], ['<td class="ixedit-labelarea-hideeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-hideeffect ixedit-inputarea-large">', options.basicEffectAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpHide;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
      return commandString;
    };
    cmds.hide = newCmd;
    /** @type {string} */
    lang.en.cmdSNToggle = "Show/Hide";
    /** @type {string} */
    lang.en.commandHelpToggle = "<h2>About Show/Hide Command</h2><p>Show/Hide command will show the selected element if it is hidden and will hide the selected element if it is shown. If you apply duration on an inline-element, it will be changed as a block-element.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "toggle";
    newCmd.screenName = label.cmdSNToggle;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-showhidespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-showhidespeed ixedit-inputarea-medium">', options.speedAttrs, "</td>"], ['<td class="ixedit-labelarea-showhideeffect ixedit-labelarea-small">' + label.inputLabelEffect + '</td><td class="ixedit-inputarea-showhideeffect ixedit-inputarea-large">', options.basicEffectAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpToggle;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var commandString = this.effectParams(attributeArray[1], attributeArray[0]);
      return commandString;
    };
    cmds.toggle = newCmd;
    /** @type {string} */
    lang.en.cmdSNSlideDown = "Slide Down";
    /** @type {string} */
    lang.en.commandHelpSlideDown = "<h2>About Slide Down Command</h2><p>Slide Down command will reveal the selected element with sliding-down effect.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "slideDown";
    newCmd.screenName = label.cmdSNSlideDown;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slidedownspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slidedownspeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpSlideDown;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[0] + ")";
      return commandString;
    };
    cmds.slideDown = newCmd;
    /** @type {string} */
    lang.en.cmdSNSlideUp = "Slide Up";
    /** @type {string} */
    lang.en.commandHelpSlideUp = "<h2>About Slide Up Command</h2><p>Slide Up command will hide the selected element with sliding-up effect.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "slideUp";
    newCmd.screenName = label.cmdSNSlideUp;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slideupspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slideupspeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpSlideUp;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[0] + ")";
      return commandString;
    };
    cmds.slideUp = newCmd;
    /** @type {string} */
    lang.en.cmdSNSlideToggle = "Slide Down/Up";
    /** @type {string} */
    lang.en.commandHelpSlideToggle = "<h2>About Slide Down/Up Command</h2><p>Slide Down/Up command will reveal the selected element with sliding-down effect if it is hidden and will hide the selected element with sliding-up effect if it is shown.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "slideToggle";
    newCmd.screenName = label.cmdSNSlideToggle;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-slidedownupspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-slidedownupspeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpSlideToggle;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[0] + ")";
      return commandString;
    };
    cmds.slideToggle = newCmd;
    /** @type {string} */
    lang.en.cmdSNFadeIn = "Fade In";
    /** @type {string} */
    lang.en.commandHelpFadeIn = "<h2>About Fade In Command</h2><p>Fade In command will show the selected element with fading-in effect.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "fadeIn";
    newCmd.screenName = label.cmdSNFadeIn;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadeinspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadeinspeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpFadeIn;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[0] + ")";
      return commandString;
    };
    cmds.fadeIn = newCmd;
    /** @type {string} */
    lang.en.cmdSNFadeOut = "Fade Out";
    /** @type {string} */
    lang.en.commandHelpFadeOut = "<h2>About Fade Out Command</h2><p>Fade Out command will hide the selected element with fading-out effect.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "fadeOut";
    newCmd.screenName = label.cmdSNFadeOut;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadeoutspeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadeoutspeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpFadeOut;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[0] + ")";
      return commandString;
    };
    cmds.fadeOut = newCmd;
    /** @type {string} */
    lang.en.cmdSNFadeTo = "Fade To";
    /** @type {string} */
    lang.en.commandHelpFadeTo = "<h2>About Fade To Command</h2><p>Fade To command will fade the opacity of the selected element to a specified opacity.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "fadeTo";
    newCmd.screenName = label.cmdSNFadeTo;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-fadetoopacity ixedit-labelarea-default">' + label.inputLabelOpacity + '</td><td class="ixedit-inputarea-fadetoopacity ixedit-inputarea-small">', options.opacityAttrs, "</td>"], ['<td class="ixedit-labelarea-fadetospeed ixedit-labelarea-medium">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-fadetospeed ixedit-inputarea-medium">', options.speedAttrs, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpFadeTo;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + attributeArray[1] + "," + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.fadeTo = newCmd;
    /** @type {string} */
    lang.en.cmdSNAnimate = "Animate";
    /** @type {string} */
    lang.en.commandHelpAnimate = '<h2>About Animate Command</h2><p>Animate command will animate the selected element. Specify the style propertie(s) that will be animated and to what end. Not only sizes (e.g. "width", "margin", or "line-height") but also colors, opacities, and scroll positions can be animated. You can animate multiple properties of one element at the same time.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "animate";
    newCmd.screenName = label.cmdSNAnimate;
    newCmd.category = ixedit.cmdCat[1];
    /** @type {Array} */
    newCmd.subParamAttrsHTMLs = [];
    /** @type {string} */
    newCmd.subParamAttrsHTMLs[0] = '<td class="ixedit-labelarea-animatecssproperty ixedit-labelarea-default">' + label.inputLabelCss + "</td><td class=\"ixedit-inputarea-animatecssproperty ixedit-inputarea-xlarge\"><select class=\"ixedit-inputitem-sub ixedit-inputitem-sub-selectCssProperty\" onchange=\"if(jQuery(this).val()=='backgroundColor' || jQuery(this).val()=='borderBottomColor' || jQuery(this).val()=='borderLeftColor' || jQuery(this).val()=='borderRightColor' || jQuery(this).val()=='borderTopColor' || jQuery(this).val()=='color' || jQuery(this).val()=='outlineColor'){jQuery('.ixedit-inputitem-sub-selectRelative', jQuery(this).closest('tr')).val('')}\">" +
        ixedit.arrayToOptions(ixedit.selectOptions.animateProperties) + "</select></td>";
    /** @type {string} */
    newCmd.subParamAttrsHTMLs[1] = "<td class=\"ixedit-inputarea-animaterelative ixedit-inputarea-xsmall\"><select class=\"ixedit-inputitem-sub ixedit-inputitem-sub-selectRelative\" onchange=\"if(jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='backgroundColor' || jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='borderBottomColor' || jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='borderLeftColor' || jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='borderRightColor' || jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='borderTopColor' || jQuery('.ixedit-inputitem-sub-selectCssProperty', jQuery(this).closest('tr')).val()=='color' || jQuery('.ixedit-inputitem-sub-selectCssProperty:first', jQuery(this).closest('tr')).val()=='outlineColor'){jQuery(this).val('')}\">" +
        ixedit.arrayToOptions(ixedit.selectOptions.relativeAttrs) + "</select></td>";
    /** @type {string} */
    newCmd.subParamAttrsHTMLs[2] = '<td class="ixedit-input-animatevalue"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-animatespeed ixedit-labelarea-default">' + label.inputLabelDuration + '</td><td class="ixedit-inputarea-animatespeed ixedit-inputarea-medium">', options.speedAttrs, "</td>"], ['<td class="ixedit-labelarea-animateeasing ixedit-labelarea-small">' + label.inputLabelEasing + '</td><td class="ixedit-inputarea-animateeasing ixedit-inputarea-large">', options.easingAttrs, "</td><td>&nbsp;</td></tr></table>"], ["", ixedit.makeSubParams, ""]];
    newCmd.help = label.commandHelpAnimate;
    /**
     * @param {Array} attributeArray
     * @param {Array} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var theSpeed = attributeArray[0];
      var theEasing = attributeArray[1];
      /** @type {Array} */
      var subParamsString = [];
      /** @type {string} */
      subParamsString = "{";
      var theLen = attributeSubArray.length;
      /** @type {Array} */
      var subParamsElements = [];
      /** @type {number} */
      var i = 0;
      for (;i < theLen;i++) {
        /** @type {string} */
        subParamsElements[subParamsElements.length] = "'" + attributeSubArray[i][0] + "'" + ":" + "'" + attributeSubArray[i][1] + attributeSubArray[i][2] + "'";
      }
      subParamsString += subParamsElements.join(",");
      subParamsString += "}";
      /** @type {string} */
      var commandString = this.name + "(" + subParamsString + "," + theSpeed + "," + "'" + theEasing + "'" + ")";
      return commandString;
    };
    cmds.animate = newCmd;
    /** @type {string} */
    lang.en.cmdSNDraggable = "Draggable";
    /** @type {string} */
    lang.en.commandHelpDraggable = '<h2>About Draggable Command</h2><p>Draggable command will make the selected element draggable with the mouse.</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-draggable" will be added to the draggabled element.</li><li>"ui-draggable-dragging" will be added during drag.</li></ul>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "draggable";
    newCmd.screenName = label.cmdSNDraggable;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dragAxes ixedit-labelarea-default">' + label.inputLabelDragAxes + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-medium">', options.dragAxes, "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-draggablemovecursor ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-draggablemovecursor ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelDraggableMoveCursor + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-draggableopacity ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-draggableopacity ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelDraggableOpacify + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-draggablerevert ixedit-labelarea-default">' +
    "&nbsp;" + '</td><td class="ixedit-inputarea-draggablerevert ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelDraggableRevert + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-draggablecontainment ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-draggablecontainment ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelDraggableContainment + "</label></td></tr></table>"]];
    newCmd.help = label.commandHelpDraggable;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      var additionalString = "";
      /** @type {string} */
      var axisString = "";
      switch(attributeArray[0]) {
        case "0":
          /** @type {string} */
          axisString = "";
          break;
        case "1":
          /** @type {string} */
          axisString = "axis:'x'";
          break;
        case "2":
          /** @type {string} */
          axisString = "axis:'y'";
          break;
      }
      if (axisString != "") {
        /** @type {string} */
        optionsArray[optionsArray.length] = axisString;
      }
      if (attributeArray[1] == true) {
        additionalString += ".css('cursor', 'move')";
      }
      if (attributeArray[2] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "opacity:0.5";
      }
      if (attributeArray[3] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "revert:'invalid'";
        /** @type {string} */
        optionsArray[optionsArray.length] = "revertDuration:250";
      }
      if (attributeArray[4] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "containment:'parent'";
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = this.name + "({" + optionsString + "})" + additionalString;
      return commandString;
    };
    cmds.draggable = newCmd;
    /** @type {string} */
    lang.en.cmdSNDroppable = "Droppable";
    /** @type {string} */
    lang.en.commandHelpDroppable = '<h2>About Droppable Command</h2><p>Droppable command will make the selected element droppable (meaning it accepts being dropped on by draggables).</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-droppable" will be added to the droppabled element.</li><li>"drophover" will be added during being hovered by draggables.</li></ul><h3>For Advanced Use</h3><p>You can specify the reaction kicked by "Drop" event by choosing from the event menu. To specify the dropped element as the reaction selector, type "drop" in the Reaction Selector textbox.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "droppable";
    newCmd.screenName = label.cmdSNDroppable;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [];
    newCmd.help = label.commandHelpDraggable;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {?} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "({hoverClass: 'drophover','tolerance':'pointer'})";
      return commandString;
    };
    cmds.droppable = newCmd;
    /** @type {string} */
    lang.en.cmdSNResizable = "Resizable";
    /** @type {string} */
    lang.en.commandHelpResizable = '<h2>About Resizable Command</h2><p>Resizable command will make selected element resizable (meaning it has draggable resize handles). </p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-resizable" will be added to the resizabled element.</li><li>"ui-resizable-handle" will be added to the resize handles which are generated dynamically around the selected element to be as the grabbers.</li><li>"ui-resizable-n" will be added to the North grabber.</li><li>"ui-resizable-s" will be added to the South grabber.</li><li>"ui-resizable-e" will be added to the East grabber.</li><li>"ui-resizable-w" will be added to the West grabber.</li><li>"ui-resizable-se" will be added to the South-East grabber.</li><li>"ui-resizable-sw" will be added to the South-West grabber.</li><li>"ui-resizable-nw" will be added to the North-West grabber.</li><li>"ui-resizable-ne" will be added to the North-East grabber.</li></ul>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "resizable";
    newCmd.screenName = label.cmdSNResizable;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-resizablekeepaspect ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-resizablekeepaspect ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableKeepAspect + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' + label.inputLabelResizableHandle + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">',
      false, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(0)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableTop + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', true, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(1)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableRight + "</label></td>"],
      ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', true, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(2)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableBottom + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(3)', jQuery(this).closest('tr')).trigger('click')\">" +
      label.inputLabelResizableLeft + "</label></td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">', false, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(0)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableTR + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">',
        true, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(1)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableBR + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(2)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableBL + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">',
        false, "</td><td class=\"ixedit-labelarea-small ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(3)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelResizableTL + "</label></td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-resizablecontainment ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-resizablecontainment ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
      label.inputLabelResizableContainment + "</label></td></tr></table>"]];
    newCmd.help = label.commandHelpResizable;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {Array} */
      var handlesArray = [];
      /** @type {string} */
      var additionalString = "";
      if (attributeArray[0] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "aspectRatio:true";
      }
      if (attributeArray[1] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "n";
      }
      if (attributeArray[2] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "e";
      }
      if (attributeArray[3] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "s";
      }
      if (attributeArray[4] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "w";
      }
      if (attributeArray[5] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "ne";
      }
      if (attributeArray[6] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "se";
      }
      if (attributeArray[7] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "sw";
      }
      if (attributeArray[8] == true) {
        /** @type {string} */
        handlesArray[handlesArray.length] = "nw";
      }
      if (attributeArray[9] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "containment:'parent'";
      }
      if (handlesArray.length > 0) {
        /** @type {string} */
        var handlesString = "handles:'" + handlesArray.join(",") + "'";
        /** @type {string} */
        optionsArray[optionsArray.length] = handlesString;
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = this.name + "({" + optionsString + "})" + additionalString;
      return commandString;
    };
    cmds.resizable = newCmd;
    /** @type {string} */
    lang.en.cmdSNSortable = "Reorderable";
    /** @type {string} */
    lang.en.commandHelpSortable = '<h2>About Reorderable Command</h2><p>Reorderable command will make the child block elements of the selected element reorderable by dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id="reorderable1"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-sortable" will be added to the reorderabled element (parent element of the draggabled items).</li></ul>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "sortable";
    newCmd.screenName = label.cmdSNSortable;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dragAxes ixedit-labelarea-default">' + label.inputLabelDragAxes + '</td><td class="ixedit-inputarea-inserthtmltype ixedit-inputarea-medium">', options.dragAxes, "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-reorderablemovecursor ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-reorderablemovecursor ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelDraggableMoveCursor + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-reorderableopacity ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-reorderableopacity ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelDraggableOpacify + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-reorderablerevert ixedit-labelarea-default">' +
    "&nbsp;" + '</td><td class="ixedit-inputarea-reorderablerevert ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelSortableRevert + "</label></td></tr></table>"]];
    newCmd.help = label.commandHelpSortable;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      var additionalString = "";
      /** @type {string} */
      var axisString = "";
      switch(attributeArray[0]) {
        case "0":
          /** @type {string} */
          axisString = "";
          break;
        case "1":
          /** @type {string} */
          axisString = "axis:'x'";
          break;
        case "2":
          /** @type {string} */
          axisString = "axis:'y'";
          break;
      }
      if (axisString != "") {
        /** @type {string} */
        optionsArray[optionsArray.length] = axisString;
      }
      if (attributeArray[1] == true) {
        additionalString += ".css('cursor', 'move')";
      }
      if (attributeArray[2] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "opacity:0.5";
      }
      if (attributeArray[3] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "revert:true";
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = "sortable" + "({" + optionsString + "})" + additionalString;
      return commandString;
    };
    cmds.sortable = newCmd;
    /** @type {string} */
    lang.en.cmdSNReorderable = "Selectable";
    /** @type {string} */
    lang.en.commandHelpSelectable = '<h2>About Selectable Command</h2><p>Selectable command will make the child block elements of the selected element selectable by clicking, ctrl+clicking, and dragging with the mouse.</p><h3>Required HTML Format</h3><p>&lt;block id="selectable1"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content1&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content2&lt;/block&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&gt;content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-selectable" will be added to the selectabled element (parent element of the items you can select individually).</li><li>"ui-selecting" will added to each item during mousedown and drag-selecting.</li><li>"ui-selected" will be added to each selected item.</li></ul>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "selectable";
    newCmd.screenName = label.cmdSNReorderable;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [];
    newCmd.help = label.commandHelpSelectable;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {?} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var additionalString = "";
      additionalString += ".css('cursor', 'default')";
      /** @type {string} */
      var commandString = "selectable" + "()" + additionalString;
      return commandString;
    };
    cmds.selectable = newCmd;
    /** @type {string} */
    lang.en.cmdSNDatePicker = "Make Date Picker";
    /** @type {string} */
    lang.en.commandHelpDatePicker = '<h2>About Make Date Picker Command</h2><p>Make Date Picker command will generate a date picker calendar for the selected textbox.</p><h3>Required HTML Format</h3><p>&lt;input type="text" id="datepicker1" /&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-datepicker" will be added to the generated calendar block.</li><li>"ui-datepicker-header" will be added to the header of the calendar.</li><li>"ui-datepicker-prev" and "ui-datepicker-next" will be added to the navigation links within the header.</li><li>"ui-datepicker-prev-hover" and "ui-datepicker-next-hover" will be added to the navigation links durting mouse-hovered.</li><li>"ui-datepicker-title" will be added to the title widthin the header.</li><li>"ui-datepicker-calendar" will be added to the calendar table.</li><li>"ui-state-active" will added to the selected day link.</li><li>"ui-state-highlight" will added to the current day link.</li><li>"ui-state-hover" will added to each day link during mouse-hovered.</li><li>"ui-datepicker-buttonpane" will be added to the button pane.</li><li>"ui-datepicker-trigger" will be added to the picker button.</li></ul><p>For more information about dynamically-added classes, see<a href="http://jqueryui.com/demos/datepicker/" target="_blank"> jQuery UI Datepicker documentation</a>.</p><p>You can also change styles with the <a href="http://jqueryui.com/themeroller/" target="_blank">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "datepicker";
    newCmd.screenName = label.cmdSNDatePicker;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-datepickerformat ixedit-labelarea-default">' + label.inputLabelDatePickerFormat + '</td><td class="ixedit-inputarea-datepickerformat ixedit-inputarea-xlarge">', options.datePickerFormats, "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-datepickericon ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-datepickericon ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelDatePickerHasButton + "</label></td></tr></table>"]];
    newCmd.help = label.commandHelpDatePicker;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var dayNamesMins = "['" + label.dayNameMinSu + "', '" + label.dayNameMinMo + "', '" + label.dayNameMinTu + "', '" + label.dayNameMinWe + "', '" + label.dayNameMinTh + "', '" + label.dayNameMinFr + "', '" + label.dayNameMinSa + "']";
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      optionsArray[optionsArray.length] = "dateFormat:'" + attributeArray[0] + "'";
      /** @type {string} */
      optionsArray[optionsArray.length] = "dayNamesMin:['" + label.dayNamesMinSu + "', '" + label.dayNamesMinMo + "', '" + label.dayNamesMinTu + "', '" + label.dayNamesMinWe + "', '" + label.dayNamesMinTh + "', '" + label.dayNamesMinFr + "', '" + label.dayNamesMinSa + "']";
      /** @type {string} */
      optionsArray[optionsArray.length] = "dayNamesShort:['" + label.dayNamesShortSu + "', '" + label.dayNamesShortMo + "', '" + label.dayNamesShortTu + "', '" + label.dayNamesShortWe + "', '" + label.dayNamesShortTh + "', '" + label.dayNamesShortFr + "', '" + label.dayNamesShortSa + "']";
      /** @type {string} */
      optionsArray[optionsArray.length] = "monthNames:['" + label.monthNames1 + "', '" + label.monthNames2 + "', '" + label.monthNames3 + "', '" + label.monthNames4 + "', '" + label.monthNames5 + "', '" + label.monthNames6 + "', '" + label.monthNames7 + "', '" + label.monthNames8 + "', '" + label.monthNames9 + "', '" + label.monthNames10 + "', '" + label.monthNames11 + "', '" + label.monthNames12 + "']";
      /** @type {string} */
      optionsArray[optionsArray.length] = "monthNamesShort:['" + label.monthNamesShort1 + "', '" + label.monthNamesShort2 + "', '" + label.monthNamesShort3 + "', '" + label.monthNamesShort4 + "', '" + label.monthNamesShort5 + "', '" + label.monthNamesShort6 + "', '" + label.monthNamesShort7 + "', '" + label.monthNamesShort8 + "', '" + label.monthNamesShort9 + "', '" + label.monthNamesShort10 + "', '" + label.monthNamesShort11 + "', '" + label.monthNamesShort12 + "']";
      if (attributeArray[1] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "showOn:'button'";
      }
      if (ixedit.label == ixedit.lang["ja"]) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "showMonthAfterYear:true";
      }
      /** @type {string} */
      optionsArray[optionsArray.length] = "showButtonPanel: true";
      /** @type {string} */
      optionsArray[optionsArray.length] = "currentText: '" + label.datePickerToday + "'";
      /** @type {string} */
      optionsArray[optionsArray.length] = "closeText: '" + label.datePickerClose + "'";
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = "datepicker" + "({" + optionsString + "})";
      return commandString;
    };
    cmds.datepicker = newCmd;
    /** @type {string} */
    lang.en.cmdSNAccordion = "Make Accordion";
    /** @type {string} */
    lang.en.commandHelpAccordion = '<h2>About Make Accordion Command</h2><p>Make Accordion command will generate an accordion container.</p><h3>Required HTML Format</h3><p>&lt;block id="accordion1"&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header1&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header2&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;&lt;a href=&quot;#&quot;&gt;Header3&lt;/a&gt;&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-accordion" will be added to the wrapper block which contains all headers and contents.</li><li>"ui-accordion-header" will be added to the header blocks.</li><li>"ui-accordion-content" will be added to the content blocks.</li><li>"ui-state-active" will added to the selected header block</li><li>"ui-state-hover" will added to each header block during mouse-hovered.</li></ul><p>You can also change styles with the <a href="http://jqueryui.com/themeroller/" target="_blank">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "accordion";
    newCmd.screenName = label.cmdSNAccordion;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-accordioneventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-accordioneventname ixedit-inputarea-xlarge">', options.eventHandlersForAccordion, "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-accordionautoheight ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-accordionautoheight ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelAccordionAutoHeight + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-accordioncollapsible ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-accordioncollapsible ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelAccordionCollapsible + "</label></td></tr></table>"]];
    newCmd.help = label.commandHelpAccordion;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      optionsArray[optionsArray.length] = "event:'" + attributeArray[0] + "'";
      if (attributeArray[1] == false) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "autoHeight:false";
      }
      if (attributeArray[2] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "collapsible:true";
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = "accordion" + "({" + optionsString + "})";
      return commandString;
    };
    cmds.accordion = newCmd;
    /** @type {string} */
    lang.en.cmdSNTabs = "Make Tabs";
    /** @type {string} */
    lang.en.commandHelpTabs = '<h2>About Make Tabs Command</h2><p>Make Tabs command will generate tabs container.</p><h3>Required HTML Format</h3><p>&lt;block id=&quot;tabs1&quot;&gt;<br />&nbsp;&nbsp;&lt;ul&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content1&quot;&gt;Tab1&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content2&quot;&gt;Tab2&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a href=&quot;#content3&quot;&gt;Tab3&lt;/a&gt;&lt;/li&gt;<br />&nbsp;&nbsp;&lt;/ul&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content1&quot;&gt;Content1&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content2&quot;&gt;Content2&lt;/block&gt;<br />&nbsp;&nbsp;&lt;block id=&quot;content3&quot;&gt;Content3&lt;/block&gt;<br />&lt;/block&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-tabs" will be added to the wrapper block which contains all tabs and content blocks.</li><li>"ui-tabs-nav" will be added to the UL element which contains items to become tabs.</li><li>"ui-tabs-selected" and "ui-state-active" will be added to the selected tab (LI element).</li><li>"ui-state-hover" will added to each tab (LI element) during mouse-hovered.</li><li>"ui-tabs-panel" will be added to each content blocks.</li></ul><p>You can also change styles with the <a href="http://jqueryui.com/themeroller/" target="_blank">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "tabs";
    newCmd.screenName = label.cmdSNTabs;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-accordioneventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-accordioneventname ixedit-inputarea-xlarge">', options.eventHandlersForAccordion, "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-tabsselected ixedit-labelarea-default">' + label.inputLabelTabsSelected + '</td><td class="ixedit-inputarea-tabsselected ixedit-inputarea-xsmall">', "", "</td><td>&nbsp;" +
    label.inputLabelTabsSelectedAnnotation + "</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-accordioncollapsible ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-accordioncollapsible ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelAccordionCollapsible + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-resizablehandle ixedit-labelarea-default">' +
    label.inputLabelEffect + '</td><td class="ixedit-inputarea-resizablehandle ixedit-inputarea-checkbox">', false, "</td><td class=\"ixedit-labelarea-medium ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(0)', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelTabsFade + "</label></td>"], ['<td class="ixedit-inputarea-checkbox ixedit-inputarea-checkbox">', false, "</td><td class=\"ixedit-labelarea-medium ixedit-labelarea-checkbox\"><label onclick=\"jQuery('input:eq(1)', jQuery(this).closest('tr')).trigger('click')\">" +
    label.inputLabelTabsSlide + "</label></td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpTabs;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      optionsArray[optionsArray.length] = "event:'" + attributeArray[0] + "'";
      if (attributeArray[1] != "") {
        /** @type {number} */
        var theVal = parseInt(attributeArray[1]);
        if (isNaN(theVal) == false) {
          /** @type {number} */
          theVal = theVal - 1;
          if (theVal < -1) {
            /** @type {number} */
            theVal = -1;
          }
          /** @type {string} */
          optionsArray[optionsArray.length] = "selected:" + theVal;
        }
      }
      if (attributeArray[2] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "collapsible:true";
      }
      var fx0 = attributeArray[3];
      var fx1 = attributeArray[4];
      if (fx0 == true || fx1 == true) {
        /** @type {Array} */
        var fxParam = [];
        if (fx0 == true) {
          /** @type {string} */
          fxParam[fxParam.length] = "opacity:'toggle'";
        }
        if (fx1 == true) {
          /** @type {string} */
          fxParam[fxParam.length] = "height:'toggle'";
        }
        /** @type {string} */
        fxParam[fxParam.length] = "duration:'normal'";
        /** @type {string} */
        var fxParamString = fxParam.join(",");
        /** @type {string} */
        var fxString = "fx:{" + fxParamString + "}";
        /** @type {string} */
        optionsArray[optionsArray.length] = fxString;
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = "tabs" + "({" + optionsString + "})";
      return commandString;
    };
    cmds.tabs = newCmd;
    /** @type {string} */
    lang.en.cmdSNDialog = "Make Dialog";
    /** @type {string} */
    lang.en.commandHelpDialog = '<h2>About Make Dialog Command</h2><p>Make Dialog command will generate a modal dialog. A wrapper block, a titlebar, and a button pane will be generated around the original block.</p><h3>Required HTML Format</h3><p>&lt;div id=&quot;dialog1&quot; title=&quot;My Dialog1&quot;&gt;Content&lt;/div&gt;</p><h3>Dynamic Classes</h3><p>You can change styles with those dyamically-added class names.</p><ul><li>"ui-dialog" will be added to the wrapper block which is generated dynamically to wrap the selected block, the titlebar and the button bar.</li><li>"ui-dialog-titlebar" will be added to the dynamically-generated titlebar.</li><li>"ui-dialog-title-dialog" will be added to the dynamically-generated title on the titlebar. The title string is from the title attribute of the selected element.</li><li>"ui-dialog-titlebar-close" will added to the dynamically-generated close link on the titlebar.</li><li>"ui-dialog-content" will be added to the selected element.</li><li>"ui-dialog-buttonpane" will be added to the dynamically-generated button pane.</li><li>"ui-widget-overlay" will be added to the dynamically-generated background overlay.</li></ul><p>You can also change styles with the <a href="http://jqueryui.com/themeroller/" target="_blank">ThemeRoller</a> tool by accessing jQuery UI CSS framework.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "dialog";
    newCmd.screenName = label.cmdSNDialog;
    newCmd.category = ixedit.cmdCat[2];
    /** @type {Array} */
    newCmd.subParamAttrsHTMLs = [];
    /** @type {string} */
    newCmd.subParamAttrsHTMLs[0] = '<td class="ixedit-labelarea-dialogbutton ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-labelarea-dialogbuttonlabel ixedit-labelarea-small">' + label.inputLabelDialogLabel + '</td><td class="ixedit-input-dialogbuttonlabel"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
    /** @type {string} */
    newCmd.subParamAttrsHTMLs[1] = '<td class="ixedit-labelarea-dialogbuttonid ixedit-labelarea-xsmall">' + label.inputLabelDialogId + '</td><td class="ixedit-input-dialogbuttonid"><input class="ixedit-inputitem-sub ixedit-inputitem-sub-textbox" type="text" /></td>';
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-dialogwidth ixedit-labelarea-default">' + label.inputLabelDialogWidth + '</td><td class="ixedit-inputarea-dialogwidth ixedit-inputarea-small">', "", "</td><td>px</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-dialogheight ixedit-labelarea-default">' + label.inputLabelDialogHeight + '</td><td class="ixedit-inputarea-dialogheight ixedit-inputarea-small">', "", "</td><td>px</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-dialogleft ixedit-labelarea-default">' +
    label.inputLabelDialogLeft + '</td><td class="ixedit-inputarea-dialogleft ixedit-inputarea-small">', "", "</td><td>px&nbsp;&nbsp;" + label.inputLabelDialogLeftAnnotation + "</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-dialogtop ixedit-labelarea-default">' + label.inputLabelDialogTop + '</td><td class="ixedit-inputarea-dialogtop ixedit-inputarea-small">', "", "</td><td>px&nbsp;&nbsp;" + label.inputLabelDialogTopAnnotation + "</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-dialogdraggable ixedit-labelarea-default">' +
    "&nbsp;" + '</td><td class="ixedit-inputarea-dialogdraggable ixedit-inputarea-checkbox">', true, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click')\">" + label.inputLabelDialogDraggable + "</label></td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-dialogbutton ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-dialogbutton ixedit-inputarea-checkbox">', false, "</td><td><label onclick=\"jQuery('input', jQuery(this).closest('tr')).trigger('click').trigger('change')\">" +
    label.inputLabelDialogButtons + "</label></td></tr></table>"], ["", ixedit.makeSubParams, ""]];
    /**
     * @param {?} theTarget
     * @return {undefined}
     */
    newCmd.initFunc = function(theTarget) {
      var theSP = jQuery(".subparam", theTarget);
      var theBtnCB = jQuery(".ixedit-dialog-6", theTarget);
      if (theBtnCB.is(":checked")) {
        theSP.show();
      } else {
        theSP.hide();
      }
      theBtnCB.on("change", function() {
        var theSP = jQuery(".subparam", theTarget);
        if ($(this).is(":checked")) {
          theSP.show();
        } else {
          theSP.hide();
        }
      });
    };
    /**
     * @param {?} theTarget
     * @return {undefined}
     */
    newCmd.afterValueLoadedFunc = function(theTarget) {
      var theSP = jQuery(".subparam", theTarget);
      var theBtnCB = jQuery(".ixedit-dialog-6", theTarget);
      if (theBtnCB.is(":checked")) {
        theSP.show();
      } else {
        theSP.hide();
      }
    };
    newCmd.help = label.commandHelpDialog;
    /** @type {boolean} */
    newCmd.dontNeedDelay = true;
    /**
     * @param {Array} attributeArray
     * @param {Array} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {Array} */
      var optionsArray = [];
      /** @type {string} */
      optionsArray[optionsArray.length] = "autoOpen:false";
      /** @type {string} */
      optionsArray[optionsArray.length] = "bgiframe:true";
      /** @type {string} */
      optionsArray[optionsArray.length] = "modal:true";
      /** @type {string} */
      optionsArray[optionsArray.length] = "resizable:false";
      if (attributeArray[0] != "") {
        optionsArray[optionsArray.length] = "width:" + attributeArray[0];
      }
      if (attributeArray[1] != "") {
        optionsArray[optionsArray.length] = "height:" + attributeArray[1];
      }
      if (attributeArray[2] == "") {
        /** @type {string} */
        var theH = "'center'"
      } else {
        if (attributeArray[2] == "-") {
          /** @type {string} */
          theH = "'right'";
        } else {
          theH = attributeArray[2];
        }
      }
      if (attributeArray[3] == "") {
        /** @type {string} */
        var theV = "'center'"
      } else {
        if (attributeArray[3] == "-") {
          /** @type {string} */
          theV = "'bottom'";
        } else {
          theV = attributeArray[3];
        }
      }
      /** @type {string} */
      optionsArray[optionsArray.length] = "position:[" + theH + ", " + theV + "]";
      if (attributeArray[4] == true) {
        /** @type {string} */
        optionsArray[optionsArray.length] = "draggable:true";
      } else {
        /** @type {string} */
        optionsArray[optionsArray.length] = "draggable:false";
      }
      /** @type {string} */
      additionalString = "";
      if (attributeArray[5] == true) {
        /** @type {Array} */
        var btnIDs = [];
        /** @type {Array} */
        var btnNames = [];
        var theLen = attributeSubArray.length;
        /** @type {number} */
        var i = 0;
        for (;i < theLen;i++) {
          /** @type {string} */
          btnNames[btnNames.length] = "'" + attributeSubArray[i][0] + "':function(){jQuery(this).dialog('close')}";
          btnIDs[btnIDs.length] = attributeSubArray[i][1];
        }
        /** @type {string} */
        var subParamsString = btnNames.join(",");
        /** @type {string} */
        optionsArray[optionsArray.length] = "buttons:{" + subParamsString + "}";
        additionalString += "var theBtnPane = jQuery('.ui-dialog-buttonpane', target.closest('.ui-dialog'));";
        /** @type {number} */
        k = 0;
        for (;k < btnIDs.length;k++) {
          additionalString += "jQuery('button:eq(" + k + ")', theBtnPane).attr('id', '" + btnIDs[k] + "');";
        }
      }
      /** @type {string} */
      var optionsString = optionsArray.join(",");
      /** @type {string} */
      var commandString = "show(); if(!target.dialog('isOpen')){target.dialog({" + optionsString + "})}; target.dialog('open');" + additionalString;
      return commandString;
    };
    cmds.dialog = newCmd;
    /** @type {string} */
    lang.en.cmdSNAlert = "Alert";
    /** @type {string} */
    lang.en.commandHelpAlert = '<h2>About Alert Command</h2><p>Alert command will show a regular alertbox generated by JavaScript\'s "window.alert()" function with the specified message string. You can use "\\n" for return and "\\t" for tab spacing, but single quotation will be ignored.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "alert";
    newCmd.screenName = label.cmdSNAlert;
    newCmd.category = ixedit.cmdCat[11];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-alertmessage ixedit-labelarea-default">' + label.inputLabelAlertMessage + '</td><td class="ixedit-inputarea-alertmessage">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpAlert;
    /** @type {boolean} */
    newCmd.dontNeedTarget = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      var theMessage = attributeArray[0].replace(/'/g, "");
      theMessage = theMessage.replace(/"/g, '"');
      /** @type {string} */
      var commandString = "window.alert('" + theMessage + "')";
      return commandString;
    };
    cmds.alert = newCmd;
    /** @type {string} */
    lang.en.cmdSNJump = "Jump";
    /** @type {string} */
    lang.en.commandHelpJump = "<h2>About Jump Command</h2><p>Jump command will make the browser access the specified URL.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "jump";
    newCmd.screenName = label.cmdSNJump;
    newCmd.category = ixedit.cmdCat[11];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-jumpurl ixedit-labelarea-default">' + label.inputLabelJumpUrl + '</td><td class="ixedit-inputarea-jumpurl">', "", "</td></tr></table>"]];
    newCmd.help = label.commandHelpJump;
    /** @type {boolean} */
    newCmd.dontNeedTarget = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = "window.location.href=('" + attributeArray[0] + "')";
      return commandString;
    };
    cmds.jump = newCmd;
    /** @type {string} */
    lang.en.cmdSNTrigger = "Send Event";
    /** @type {string} */
    lang.en.commandHelpTrigger = '<h2>About Send Event Command</h2><p>Send Event command will send the specified event to the selected element. For example, if you send a "Click" event to the element "#button1", the same thing will happen as you click "#button1".</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "trigger";
    newCmd.screenName = label.cmdSNTrigger;
    newCmd.category = ixedit.cmdCat[11];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-sendeventname ixedit-labelarea-default">' + label.inputLabelEventName + '</td><td class="ixedit-inputarea-sendeventname ixedit-inputarea-xlarge">', options.eventHandlers, "</td><td>&nbsp;</td></tr></table>"]];
    newCmd.help = label.commandHelpTrigger;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = this.name + "(" + "'" + attributeArray[0] + "'" + ")";
      return commandString;
    };
    cmds.trigger = newCmd;
    /** @type {string} */
    lang.en.cmdSNExecutejQuery = "Execute jQuery";
    /** @type {string} */
    lang.en.commandHelpExecutejQuery = '<h2>About Execute jQuery Command</h2><p>Execute jQuery command will let you write a jQuery script. Using this command, you can add some advanced programming which cannot be made by IxEdit\'s built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the "inactivatingAll" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>';
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "executeJQuery";
    newCmd.screenName = label.cmdSNExecutejQuery;
    newCmd.category = ixedit.cmdCat[21];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-executejqueryselector ixedit-labelarea-default">' + "$" + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executejqueryselector">', "", '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>'], ['<table><tr><td class="ixedit-labelarea-executejqueryfunctionname ixedit-labelarea-default">' +
    "&nbsp;" + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">.</td><td class="ixedit-inputarea-executejqueryfunctionname ixedit-inputarea-medium">', "", "</td><td>&nbsp;</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-executejqueryargument ixedit-labelarea-default">' + "&nbsp;" + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executejqueryargument">',
      "", '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>']];
    newCmd.help = label.commandHelpExecutejQuery;
    /** @type {boolean} */
    newCmd.dontNeedTarget = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = "jQuery(" + attributeArray[0] + ")." + attributeArray[1] + "(" + attributeArray[2] + ")";
      return commandString;
    };
    if (ixedit.advancedMode) {
      cmds.executeJQuery = newCmd;
    }
    /** @type {string} */
    lang.en.cmdSNExecuteFunction = "Execute Function";
    /** @type {string} */
    lang.en.commandHelpExecuteFunction = "<h2>About Execute Function Command</h2><p>Execute Function command will let you specifiy an existing function and it's argument to be executed. Using this command, you can add some advanced programming which cannot be made by IxEdit's built-in commands to the page.</p><h3>Caution</h3><p>If you got a syntac error caused by somthing like typos, IxEdit may not be able to be booted. In that case, please turn the \"inactivatingAll\" flag up by adding following line to the HTML file right after the line loading ixedit.js.</p><p>&lt;script type=&quot;text/javascript&quot;&gt;ixedit.inactivatingAll=true&lt;/script&gt;</p><p>This might help IxEdit boot and you to modify your script.</p>";
    newCmd = new cmd;
    /** @type {string} */
    newCmd.name = "executeFunction";
    newCmd.screenName = label.cmdSNExecuteFunction;
    newCmd.category = ixedit.cmdCat[21];
    /** @type {Array} */
    newCmd.attrs = [['<table><tr><td class="ixedit-labelarea-executefunctionname ixedit-labelarea-default">' + label.inputLabelFunction + '</td><td class="ixedit-inputarea-executefunctionname">', "", "</td></tr></table>"], ['<table><tr><td class="ixedit-labelarea-executefunctionattr ixedit-labelarea-default">' + label.inputLabelArgument + '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall" style="text-align: right">(</td><td class="ixedit-inputarea-executefunctionattr">',
      "", '</td><td class="ixedit-inputarea-executefunctionpar ixedit-inputarea-xxsmall"  style="text-align: left">)</td></tr></table>']];
    newCmd.help = label.commandHelpExecuteFunction;
    /** @type {boolean} */
    newCmd.dontNeedTarget = true;
    /**
     * @param {Array} attributeArray
     * @param {?} attributeSubArray
     * @return {?}
     */
    newCmd.func = function(attributeArray, attributeSubArray) {
      /** @type {string} */
      var commandString = attributeArray[0] + "(" + attributeArray[1] + ")";
      return commandString;
    };
    if (ixedit.advancedMode) {
      cmds.executeFunction = newCmd;
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.preAssignCondCmds = function() {
    var lang = ixedit.lang;
    var condcmd = ixedit.condcmd;
    var condcmds = ixedit.condcmds;
    var options = ixedit.selectOptions;
    var label = ixedit.label;
    /** @type {string} */
    lang.en.condCmdSNHasClass = "Has Class";
    var newCondCmd = new condcmd;
    /** @type {string} */
    newCondCmd.name = "hasClass";
    newCondCmd.screenName = label.condCmdSNHasClass;
    /** @type {Array} */
    newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-classname ixedit-labelarea-default">' + label.inputLabelClassName + '</td><td class="ixedit-inputarea-classname">', "", "</td></tr></table>"]];
    /**
     * @param {string} target
     * @param {Array} attributeArray
     * @param {string} equation
     * @return {?}
     */
    newCondCmd.funcStr = function(target, attributeArray, equation) {
      /** @type {string} */
      var conditionString = target + ".hasClass('" + attributeArray[0] + "') " + equation + "true";
      return conditionString;
    };
    condcmds.hasClass = newCondCmd;
    /** @type {string} */
    lang.en.condCmdSNAttr = "Value";
    newCondCmd = new condcmd;
    /** @type {string} */
    newCondCmd.name = "val";
    newCondCmd.screenName = label.condCmdSNAttr;
    /** @type {Array} */
    newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-attributename ixedit-labelarea-default">' + label.inputLabelValue + '</td><td class="ixedit-inputarea-valuevalue">', "", "</td></tr></table>"]];
    /**
     * @param {string} target
     * @param {Array} attributeArray
     * @param {string} equation
     * @return {?}
     */
    newCondCmd.funcStr = function(target, attributeArray, equation) {
      if (target.substr(0, 6) == "event.") {
        var conditionString = target + equation + attributeArray[0].toString()
      } else {
        /** @type {string} */
        conditionString = target + ".val() " + equation + " '" + attributeArray[0] + "'";
      }
      return conditionString;
    };
    condcmds.val = newCondCmd;
    /** @type {string} */
    lang.en.condCmdSNStatus = "Status";
    newCondCmd = new condcmd;
    /** @type {string} */
    newCondCmd.name = "status";
    newCondCmd.screenName = label.condCmdSNStatus;
    /** @type {Array} */
    newCondCmd.attrs = [options.statuses];
    /** @type {Array} */
    newCondCmd.attrs = [['<table><tr><td class="ixedit-labelarea-statusname ixedit-labelarea-default">' + label.inputLabelStatus + '</td><td class="ixedit-inputarea-statusname ixedit-inputarea-xlarge">', options.statuses, "</td><td>&nbsp;</td></tr></table>"]];
    /**
     * @param {string} target
     * @param {Array} attributeArray
     * @param {string} equation
     * @return {?}
     */
    newCondCmd.funcStr = function(target, attributeArray, equation) {
      /** @type {string} */
      var conditionString = target + ".is('" + ":" + attributeArray[0] + "') " + equation + " true";
      return conditionString;
    };
    condcmds.status = newCondCmd;
  };
  /**
   * @return {undefined}
   */
  ixedit.preGenerateEvtList = function() {
    /** @type {Array} */
    var htmlString = [];
    var thisSelectOptionsEventHandlersLength = this.selectOptions.eventHandlers.length;
    /** @type {number} */
    var h = 0;
    for (;h < thisSelectOptionsEventHandlersLength;h++) {
      /** @type {string} */
      htmlString[htmlString.length] = '<option value="' + this.selectOptions.eventHandlers[h][1] + '">' + this.selectOptions.eventHandlers[h][0] + "</option>";
    }
    /** @type {string} */
    ixedit.evtMenuSource = htmlString.join("");
  };
  /**
   * @return {undefined}
   */
  ixedit.preGenerateCmdList = function() {
    /** @type {Array} */
    var htmlString = [];
    var j;
    for (j in this.cmdCat) {
      /** @type {Array} */
      var htmlStringOptions = [];
      var x;
      for (x in this.cmds) {
        if (this.cmds[x].category == this.cmdCat[j]) {
          /** @type {string} */
          htmlStringOptions[htmlStringOptions.length] = '<option class="ixedit-command-' + x + '" value="' + this.cmds[x].name + '">' + this.cmds[x].screenName + "</option>";
        }
      }
      /** @type {string} */
      var htmlStringOptionsString = htmlStringOptions.join("");
      if (htmlStringOptionsString.length > 0) {
        /** @type {string} */
        htmlString[htmlString.length] = '<optgroup label="' + this.label["cmdCat" + j] + '">' + htmlStringOptionsString + "</optgroup>";
      }
    }
    /** @type {string} */
    ixedit.cmdMenuSource = htmlString.join("");
  };
  /**
   * @return {undefined}
   */
  ixedit.preGenerateCondCmdList = function() {
    /** @type {Array} */
    var htmlString = [];
    var x;
    for (x in this.condcmds) {
      /** @type {string} */
      htmlString[htmlString.length] = '<option class="ixedit-command-' + x + '" value="' + this.condcmds[x].name + '">' + this.condcmds[x].screenName + "</option>";
    }
    /** @type {string} */
    ixedit.condCmdMenuSource = htmlString.join("");
  };
  /**
   * @param {Array} theArray
   * @return {undefined}
   */
  ixedit.jsonToIxs = function(theArray) {
    var theArrayLength = theArray.length;
    /** @type {number} */
    var ixAttsCnt = 0;
    for (;ixAttsCnt < theArrayLength;ixAttsCnt++) {
      var newIxs = new this.ix;
      newIxs.active = theArray[ixAttsCnt].active;
      newIxs.name = theArray[ixAttsCnt].name;
      newIxs.trigger = theArray[ixAttsCnt].trigger;
      newIxs.event = theArray[ixAttsCnt].event;
      newIxs.preventDefault = theArray[ixAttsCnt].preventDefault;
      newIxs.stopBubbling = theArray[ixAttsCnt].stopBubbling;
      newIxs.comment = theArray[ixAttsCnt].comment;
      newIxs.conditions = theArray[ixAttsCnt].conditions;
      newIxs.actions = theArray[ixAttsCnt].actions;
      this.ixs.add(newIxs);
    }
  };
  /**
   * @param {string} theString
   * @return {?}
   */
  ixedit.loadIxJSONString = function(theString) {
    if (theString !== "") {
      /** @type {*} */
      var loadedObject = JSON.parse(theString);
      if (loadedObject.format == this.format) {
        var ixAtts = loadedObject.data;
        if (ixAtts) {
          this.jsonToIxs(ixAtts);
        }
        return true;
      } else {
        window.alert("IxEdit: The data you are loading is not compatible with this version of IxEdit. Please upgrade.");
        return false;
      }
    } else {
    }
  };
  /**
   * @param {Array} instanceArray
   * @param {?} instanceName
   * @return {?}
   */
  ixedit.findInstance = function(instanceArray, instanceName) {
    var instanceArrayLength = instanceArray.length;
    /** @type {number} */
    var instanceCnt = 0;
    for (;instanceCnt < instanceArrayLength;instanceCnt++) {
      if (instanceArray[instanceCnt].name == instanceName) {
        var theInstance = instanceArray[instanceCnt];
        break;
      }
    }
    return theInstance;
  };
  /**
   * @return {undefined}
   */
  ixedit.clearSelection = function() {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else {
      if (window.getSelection) {
        /** @type {(Selection|null)} */
        var sel = window.getSelection();
        sel.removeAllRanges();
      }
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.fixPositionPrefs = function() {
    var windowWidth = jQuery(window).width();
    var windowHeight = jQuery(window).height();
    if (ixedit.commonPrefs.inspectorLeft && ixedit.commonPrefs.inspectorTop) {
      if (ixedit.commonPrefs.inspectorTop < 0) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorTop = 0;
      }
      if (ixedit.commonPrefs.inspectorTop > windowHeight) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorTop = windowHeight - 50;
      }
      if (ixedit.commonPrefs.inspectorLeft < 0) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorLeft = 0;
      }
      if (ixedit.commonPrefs.inspectorLeft > windowWidth) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorLeft = windowWidth - 50;
      }
    }
    if (ixedit.commonPrefs.inspectorWindowOffsetX && ixedit.commonPrefs.inspectorWindowOffsetY) {
      if (ixedit.commonPrefs.inspectorWindowOffsetX < 0) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorWindowOffsetX = 0;
      }
      if (ixedit.commonPrefs.inspectorWindowOffsetY < 0) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorWindowOffsetY = 0;
      }
      if (ixedit.commonPrefs.inspectorWindowOffsetX > windowWidth) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorWindowOffsetX = windowWidth - 50;
      }
      if (ixedit.commonPrefs.inspectorWindowOffsetY > windowHeight) {
        /** @type {number} */
        ixedit.commonPrefs.inspectorWindowOffsetY = windowHeight - 50;
      }
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.updatePositionPrefs = function() {
    var dialogPosition = jQuery("#ixedit-dialog-main").position();
    var scrollTop = jQuery(window).scrollTop();
    var scrollLeft = jQuery(window).scrollLeft();
    ixedit.commonPrefs.inspectorTop = dialogPosition.top;
    if (ixedit.commonPrefs.inspectorShaded == false) {
      ixedit.commonPrefs.inspectorLeft = dialogPosition.left;
      /** @type {number} */
      ixedit.commonPrefs.inspectorWindowOffsetX = dialogPosition.left - scrollLeft;
    } else {
      /** @type {number} */
      ixedit.commonPrefs.inspectorLeft = dialogPosition.left - 215;
      /** @type {number} */
      ixedit.commonPrefs.inspectorWindowOffsetX = dialogPosition.left - scrollLeft - 215;
    }
    /** @type {number} */
    ixedit.commonPrefs.inspectorWindowOffsetY = dialogPosition.top - scrollTop;
  };
  /**
   * @return {undefined}
   */
  ixedit.positDialogMain = function() {
    ixedit.fixPositionPrefs();
    var scrollLeft = jQuery(window).scrollLeft();
    var scrollTop = jQuery(window).scrollTop();
    if (ixedit.commonPrefs.inspectorWindowOffsetX && ixedit.commonPrefs.inspectorWindowOffsetY) {
      if (ixedit.commonPrefs.inspectorShaded == false) {
        jQuery("#ixedit-dialog-main").css("left", ixedit.commonPrefs.inspectorWindowOffsetX + scrollLeft).css("top", ixedit.commonPrefs.inspectorWindowOffsetY + scrollTop);
      } else {
        jQuery("#ixedit-dialog-main").css("left", ixedit.commonPrefs.inspectorWindowOffsetX + scrollLeft + 215).css("top", ixedit.commonPrefs.inspectorWindowOffsetY + scrollTop);
      }
    }
    ixedit.prevScrollLeft = scrollLeft;
    ixedit.prevScrollTop = scrollTop;
  };
  /**
   * @param {number} ixNo
   * @return {?}
   */
  ixedit.getListItemNo = function(ixNo) {
    var listItems = this.listItems;
    /** @type {number} */
    var i = 0;
    for (;i < listItems.length;i++) {
      if (this.listItems[i].no == ixNo) {
        /** @type {number} */
        var theItemNo = i;
        break;
      }
    }
    return theItemNo;
  };
  /**
   * @return {undefined}
   */
  ixedit.showSelectedItem = function() {
    this.clearSelection();
    jQuery(".ixedit-table-item").removeClass("selected");
    var selectedLineNos = this.prefs.selectedLineNo;
    var selectedLineNosLength = selectedLineNos.length;
    /** @type {number} */
    var i = 0;
    for (;i < selectedLineNosLength;i++) {
      jQuery("#ixedit-table-item-" + selectedLineNos[i]).addClass("selected");
    }
    if (selectedLineNosLength > 0) {
      var targetIxNo = this.listItems[selectedLineNos[selectedLineNosLength - 1]].no
    } else {
      return;
    }
    var targetIx = this.ixs[targetIxNo];
    var theEditButton = jQuery("#ixedit-button-edit");
    if (selectedLineNosLength == 1 && targetIx.active) {
      theEditButton.removeAttr("disabled").removeClass("disabled");
    } else {
      theEditButton.attr("disabled", "disabled").addClass("disabled");
    }
  };
  /**
   * @param {Array} optionArray
   * @param {?} optionName
   * @return {?}
   */
  ixedit.findOptionScreenName = function(optionArray, optionName) {
    var optionArrayLength = optionArray.length;
    /** @type {number} */
    var i = 0;
    for (;i < optionArrayLength;i++) {
      if (optionArray[i][1] == optionName) {
        var theOptionScreenName = optionArray[i][0];
        break;
      }
    }
    return theOptionScreenName;
  };
  /**
   * @return {undefined}
   */
  ixedit.prepareList = function() {
    /** @type {Array} */
    this.listItems = [];
    var array = this.ixs;
    var arrayLength = array.length;
    /** @type {number} */
    var i = 0;
    for (;i < arrayLength;i++) {
      var newItem = new this.listItem;
      var theEvent = array[i].event;
      var theTrigger = array[i].trigger;
      /** @type {number} */
      newItem.no = i;
      if (theEvent == "load" || theEvent == "unload") {
        /** @type {string} */
        newItem.trigger = " - ";
      } else {
        newItem.trigger = theTrigger;
      }
      newItem.event = this.findOptionScreenName(this.selectOptions.eventHandlers, theEvent);
      var theAction = array[i].actions;
      var actionLength = theAction.length;
      /** @type {Array} */
      var actionTargets = [];
      /** @type {Array} */
      var actionCommands = [];
      /** @type {number} */
      var actionNo = 0;
      for (;actionNo < actionLength;actionNo++) {
        if (ixedit.cmds[theAction[actionNo].command]) {
          if (theAction[actionNo].target == "") {
            /** @type {string} */
            actionTargets[actionNo] = " - ";
          } else {
            actionTargets[actionNo] = theAction[actionNo].target;
          }
          actionCommands[actionNo] = ixedit.cmds[theAction[actionNo].command].screenName;
        } else {
          /** @type {string} */
          actionTargets[actionNo] = "_";
          /** @type {string} */
          actionCommands[actionNo] = "_";
        }
      }
      /** @type {string} */
      newItem.targets = actionTargets.join(", ");
      /** @type {string} */
      newItem.commands = actionCommands.join(", ");
      newItem.comment = array[i].comment;
      var theActive = array[i].active;
      if (theActive) {
        /** @type {number} */
        newItem.check = 0;
      } else {
        /** @type {number} */
        newItem.check = 1;
      }
      this.listItems[this.listItems.length] = newItem;
    }
    if (ixedit.prefs.sortKey) {
      var theSortKey = ixedit.prefs.sortKey
    } else {
      /** @type {string} */
      theSortKey = "trigger";
    }
    this.listItems.sort(function(b1, b2) {
      return b1[theSortKey] > b2[theSortKey] ? 1 : -1;
    });
  };
  /**
   * @param {boolean} isAll
   * @return {undefined}
   */
  ixedit.refreshList = function(isAll) {
    if (isAll) {
      var ixeditTableHeader = jQuery(".ixedit-table-header");
      ixeditTableHeader.empty();
      /** @type {string} */
      var headerSource = '<tr class="ixedit-columnheader"><th class="ixedit-column-check">' + this.label.listHeaderCheck + '</th><th class="ixedit-column-event">' + this.label.listHeaderEvent + '</th><th class="ixedit-column-trigger">' + this.label.listHeaderTrigger + '</th><th class="ixedit-column-targets">' + this.label.listHeaderTarget + '</th><th class="ixedit-column-commands">' + this.label.listHeaderCommand + '</th><th class="ixedit-column-comment">' + this.label.listHeaderComment + "</th>\x3c!--th>No</th--\x3e</tr>";
      ixeditTableHeader.html(headerSource);
      /**
       * @param {string} sortKey
       * @return {undefined}
       */
      var listSort = function(sortKey) {
        /** @type {string} */
        ixedit.prefs.sortKey = sortKey;
        var listItems = ixedit.listItems;
        /** @type {Array} */
        var currentIxNos = [];
        if (listItems.length > 0) {
          var selectedLinesNos = ixedit.prefs.selectedLineNo;
          var selectedLinesNosLength = selectedLinesNos.length;
          /** @type {number} */
          var i = 0;
          for (;i < selectedLinesNosLength;i++) {
            currentIxNos[currentIxNos.length] = listItems[selectedLinesNos[i]].no;
          }
          ixedit.prepareList();
          /** @type {number} */
          var j = 0;
          for (;j < selectedLinesNosLength;j++) {
            selectedLinesNos[j] = ixedit.getListItemNo(currentIxNos[j]);
          }
        } else {
          /** @type {Array} */
          ixedit.prefs.selectedLineNo = [];
          currentIxNos[0] = undefined;
        }
        ixedit.refreshList();
        ixedit.refreshListButtonStates();
        ixedit.showSelectedItem();
      };
      jQuery("th.ixedit-column-check").click(function() {
        listSort("check");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "check").addClass("selected");
      });
      jQuery("th.ixedit-column-event").click(function() {
        listSort("event");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "event").addClass("selected");
      });
      jQuery("th.ixedit-column-trigger").click(function() {
        listSort("trigger");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "trigger").addClass("selected");
      });
      jQuery("th.ixedit-column-targets").click(function() {
        listSort("targets");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "targets").addClass("selected");
      });
      jQuery("th.ixedit-column-commands").click(function() {
        listSort("commands");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "commands").addClass("selected");
      });
      jQuery("th.ixedit-column-comment").click(function() {
        listSort("comment");
      }).mousedown(function() {
        jQuery("th.ixedit-column-" + "comment").addClass("selected");
      });
    }
    jQuery("th", ixeditTableHeader).removeClass("selected");
    jQuery("th.ixedit-column-" + this.prefs.sortKey).addClass("selected");
    var ixeditTableBody = jQuery(".ixedit-table-body");
    ixeditTableBody.empty();
    var array = this.ixs;
    /** @type {Array} */
    var itemSource = [];
    var thisListItemsLength = this.listItems.length;
    /** @type {number} */
    var tmpArryCnt = 0;
    for (;tmpArryCnt < thisListItemsLength;tmpArryCnt++) {
      var activation = this.listItems[tmpArryCnt].check;
      if (activation == 1) {
        /** @type {string} */
        var inactivator = " inactive";
        /** @type {string} */
        var checkHTML = '<input type="checkbox" onclick="ixedit.ixs.activate(jQuery(this).is(\':checked\'),' + tmpArryCnt + ')" />';
      } else {
        /** @type {string} */
        inactivator = "";
        /** @type {string} */
        checkHTML = '<input type="checkbox" checked="checked" onclick="ixedit.ixs.activate(jQuery(this).is(\':checked\'),' + tmpArryCnt + ')" />';
      }
      /** @type {string} */
      itemSource[itemSource.length] = '<tr class="ixedit-table-item' + inactivator + '" id="ixedit-table-item-' + tmpArryCnt + '" onselectstart="return false;">';
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-check">' + checkHTML + "</td>";
      var theString = this.listItems[tmpArryCnt].event;
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-event" title="' + theString + '">' + theString + "</td>";
      theString = this.listItems[tmpArryCnt].trigger;
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-trigger" title="' + theString + '">' + theString + "</td>";
      theString = this.listItems[tmpArryCnt].targets;
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-targets" title="' + theString + '">' + theString + "</td>";
      theString = this.listItems[tmpArryCnt].commands;
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-commands" title="' + theString + '">' + theString + "</td>";
      theString = this.listItems[tmpArryCnt].comment;
      /** @type {string} */
      itemSource[itemSource.length] = '<td class="ixedit-column-comment" title="' + theString + '">' + theString + "</td>";
      /** @type {string} */
      itemSource[itemSource.length] = "</tr>";
    }
    ixeditTableBody.html(itemSource.join(""));
    jQuery(".ixedit-table-item").mousedown(function(e) {
      /**
       * @param {?} theIndex
       * @return {undefined}
       */
      function unselectItem(theIndex) {
        var selectedLineNosLength = selectedLineNos.length;
        /** @type {number} */
        var i = 0;
        for (;i < selectedLineNosLength;i++) {
          if (selectedLineNos[i] == theIndex) {
            selectedLineNos.splice(i, 1);
            break;
          }
        }
      }
      var theIndex = this.rowIndex;
      var selectedLineNos = ixedit.prefs.selectedLineNo;
      if (e.metaKey) {
        if (jQuery(this).hasClass("selected")) {
          unselectItem(theIndex);
        } else {
          selectedLineNos[selectedLineNos.length] = theIndex;
        }
      } else {
        if (e.ctrlKey) {
          if (jQuery(this).hasClass("selected")) {
            unselectItem(theIndex);
          } else {
            selectedLineNos[selectedLineNos.length] = theIndex;
          }
        } else {
          if (e.shiftKey) {
            if (selectedLineNos.length > 0) {
              selectedLineNos.ixeditSortByNumber();
              var youngestItemNo = selectedLineNos[0];
              var oldestItemNo = selectedLineNos[selectedLineNos.length - 1];
              var tableItemLength = jQuery(".ixedit-table-item").length;
              jQuery(".ixedit-table-item").removeClass("selected");
              /** @type {number} */
              selectedLineNos.length = 0;
              if (theIndex >= youngestItemNo) {
                var i = youngestItemNo;
                for (;i <= theIndex;i++) {
                  if (i < tableItemLength) {
                    jQuery(".ixedit-table-item:eq(" + i + ")").addClass("selected");
                    selectedLineNos[selectedLineNos.length] = i;
                  }
                }
              } else {
                i = theIndex;
                for (;i <= oldestItemNo;i++) {
                  if (i < tableItemLength) {
                    jQuery(".ixedit-table-item:eq(" + i + ")").addClass("selected");
                    selectedLineNos[selectedLineNos.length] = i;
                  }
                }
              }
            }
          } else {
            /** @type {number} */
            selectedLineNos.length = 1;
            selectedLineNos[0] = theIndex;
          }
        }
      }
      ixedit.updateListStatus();
      ixedit.refreshListButtonStates();
      ixedit.showSelectedItem();
    });
    jQuery(".ixedit-column-check").width(this.commonPrefs.inspectorColumnCheckWidth);
    jQuery(".ixedit-column-event").width(this.commonPrefs.inspectorColumnEventWidth);
    jQuery(".ixedit-column-trigger").width(this.commonPrefs.inspectorColumnTriggerWidth);
    jQuery(".ixedit-column-targets").width(this.commonPrefs.inspectorColumnTargetsWidth);
    jQuery(".ixedit-column-commands").width(this.commonPrefs.inspectorColumnCommandsWidth);
    jQuery("tr:odd", ixeditTableBody).addClass("ixedit-odd");
    jQuery(".ixedit-table-item").dblclick(function() {
      var editButton = jQuery("#ixedit-button-edit");
      if (editButton.is(":enabled")) {
        jQuery("#ixedit-button-edit").trigger("click");
      }
    });
    ixedit.updateListStatus();
  };
  /**
   * @return {undefined}
   */
  ixedit.refreshListButtonStates = function() {
    jQuery("#ixedit-button-delete").attr("disabled", "disabled").addClass("disabled");
    jQuery("#ixedit-button-duplicate").attr("disabled", "disabled").addClass("disabled");
    jQuery("#ixedit-button-edit").attr("disabled", "disabled").addClass("disabled");
    if (this.ixs.length < 1) {
    } else {
      var selectedLineNo = ixedit.prefs.selectedLineNo;
      if (selectedLineNo.length < 1) {
      } else {
        if (selectedLineNo.length == 1) {
          jQuery("#ixedit-button-delete").removeAttr("disabled").removeClass("disabled");
          jQuery("#ixedit-button-duplicate").removeAttr("disabled").removeClass("disabled");
          jQuery("#ixedit-button-edit").removeAttr("disabled").removeClass("disabled");
        } else {
          if (selectedLineNo.length > 1) {
            jQuery("#ixedit-button-delete").removeAttr("disabled").removeClass("disabled");
            jQuery("#ixedit-button-duplicate").removeAttr("disabled").removeClass("disabled");
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.updateListStatus = function() {
    var itemNo = ixedit.ixs.length;
    var selectedNo = ixedit.prefs.selectedLineNo.length;
    if (itemNo > 1) {
      jQuery("#ixedit-utilitynoofitems").text(itemNo + " " + ixedit.label.listStatusItems);
    } else {
      jQuery("#ixedit-utilitynoofitems").text(itemNo + " " + ixedit.label.listStatusItem);
    }
    jQuery("#ixedit-utilitynoofselected").text(selectedNo + " " + ixedit.label.listStatusSelected);
  };
  /**
   * @return {undefined}
   */
  ixedit.showIxlist = function() {
    jQuery("#ixedit-inputbox").hide();
    jQuery("#ixedit-button-new").show();
    jQuery("#ixedit-button-duplicate").show();
    jQuery("#ixedit-button-delete").show();
    jQuery("#ixedit-button-reload").show();
    jQuery("#ixedit-button-edit").show();
    jQuery("#ixedit-utility").show();
    jQuery("#ixedit-button-cancel").hide();
    jQuery("#ixedit-button-reset").hide();
    jQuery("#ixedit-button-doneandreload").hide();
    jQuery("#ixedit-button-done").hide();
    jQuery("#ixlist").show();
    jQuery("#ixedit-ui").removeClass("ixedit-input");
    ixedit.resizeTableHeight();
    ixedit.resizeTableWidth();
    var ixeditListBody = jQuery("#ixedit-listbody");
    var theContentHeight = ixeditListBody.height();
    var ixeditTableBody = jQuery(".ixedit-table-body");
    var trSelected = jQuery("tr.selected", ixeditTableBody);
    if (trSelected.length > 0) {
      var theSelectedItemPosition = jQuery(trSelected[0]).position();
      var theSelectedItemTop = theSelectedItemPosition.top;
    } else {
      /** @type {number} */
      theSelectedItemTop = 0;
    }
    if (theSelectedItemTop > theContentHeight - 10) {
      ixeditListBody.scrollTop(theSelectedItemTop - 50);
    } else {
      ixeditListBody.scrollTop(this.prefs.inspectorScrollTop);
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.showIxinputbox = function() {
    this.prefs.inspectorScrollTop = jQuery("#ixedit-listbody").scrollTop();
    jQuery("#ixlist").hide();
    jQuery("#ixedit-utility").hide();
    jQuery("#ixedit-button-new").hide();
    jQuery("#ixedit-button-duplicate").hide();
    jQuery("#ixedit-button-delete").hide();
    jQuery("#ixedit-button-reload").hide();
    jQuery("#ixedit-button-edit").hide();
    if (ixedit.addingNewIx) {
      jQuery("#ixedit-button-cancel").show();
      jQuery("#ixedit-button-reset").hide();
    } else {
      jQuery("#ixedit-button-cancel").hide();
      jQuery("#ixedit-button-reset").show();
    }
    jQuery("#ixedit-button-doneandreload").show();
    jQuery("#ixedit-button-done").show();
    if (ixedit.gimmickAnimation) {
      jQuery("#ixedit-inputbox").fadeIn("fast");
    } else {
      jQuery("#ixedit-inputbox").show();
    }
    this.resizeCommentHeight();
    jQuery("#ixedit-ui").addClass("ixedit-input");
  };
  /**
   * @return {undefined}
   */
  ixedit.resizeTableWidth = function() {
    jQuery(".ixedit-table").width(jQuery("#ixlist").width() - 16);
  };
  /**
   * @return {undefined}
   */
  ixedit.resizeTableHeight = function() {
    jQuery("#ixedit-listbody").height(jQuery("#ixedit-ui").height() - 40);
  };
  /**
   * @param {?} gap
   * @return {?}
   */
  ixedit.getNewCommentHeight = function(gap) {
    var dialog = jQuery("#ixedit-dialog-main");
    var titleBarHeight = jQuery(".ui-dialog-titlebar", dialog).outerHeight();
    var commentTitle = jQuery("#ixedit-commenttitle");
    if (gap) {
      /** @type {number} */
      var commentTitleBottomY = commentTitle.position().top + commentTitle.outerHeight() - gap
    } else {
      commentTitleBottomY = commentTitle.position().top + commentTitle.outerHeight();
    }
    /** @type {number} */
    var newCommentBoxHeight = jQuery("#ixedit-ui").height() + titleBarHeight - commentTitleBottomY - 36 - 3;
    if (newCommentBoxHeight < 80) {
      /** @type {number} */
      newCommentBoxHeight = 80;
    }
    return newCommentBoxHeight;
  };
  /**
   * @return {undefined}
   */
  ixedit.resizeCommentHeight = function() {
    var newCommentBoxHeight = ixedit.getNewCommentHeight();
    jQuery("#ixedit-comment").height(newCommentBoxHeight);
  };
  /**
   * @param {number} newHeight
   * @param {number} duration
   * @return {undefined}
   */
  ixedit.animateCommentHeight = function(newHeight, duration) {
    var commentBox = jQuery("#ixedit-comment");
    if (commentBox.is(":visible")) {
      /** @type {string} */
      var param = newHeight + "px";
      if (ixedit.gimmickAnimation) {
        commentBox.animate({
          "height" : param
        }, duration, "linear", function() {
        });
      } else {
        commentBox.height(param);
      }
    }
  };
  /**
   * @param {number} areaNum
   * @param {Object} ixeditUi
   * @param {Object} theWrapper
   * @param {Object} theContainer
   * @return {undefined}
   */
  ixedit.areaGimmick = function(areaNum, ixeditUi, theWrapper, theContainer) {
    var theComment = jQuery("#ixedit-comment");
    if (theWrapper.hasClass("ixedit-hidden") === false) {
      theWrapper.addClass("ixedit-hidden");
      var containerOuterHeight = theContainer.outerHeight();
      var containerInnerHeight = theContainer.innerHeight();
      var containerHeight = theContainer.height();
      var newHeight = ixedit.getNewCommentHeight(containerOuterHeight);
      if (ixedit.gimmickAnimation) {
        theContainer.animate({
          "height" : "0px"
        }, 250, "linear", function() {
          theContainer.hide();
          theContainer.height(containerHeight);
          /** @type {boolean} */
          ixedit.commonPrefs.areasShown[areaNum] = false;
          ixedit.resizeCommentHeight();
        });
        ixedit.animateCommentHeight(newHeight, 250);
      } else {
        theContainer.hide();
        /** @type {boolean} */
        ixedit.commonPrefs.areasShown[areaNum] = false;
        ixedit.resizeCommentHeight();
      }
    } else {
      if (theComment.height() > 80) {
        ixeditUi.css("overflow", "hidden");
      }
      theWrapper.removeClass("ixedit-hidden");
      containerOuterHeight = theContainer.outerHeight();
      containerInnerHeight = theContainer.innerHeight();
      theContainer.height(0);
      /** @type {number} */
      newHeight = theComment.height() - containerOuterHeight;
      if (newHeight < 80) {
        /** @type {number} */
        newHeight = 80;
      }
      if (ixedit.gimmickAnimation) {
        theContainer.animate({
          "height" : containerOuterHeight + "px"
        }, 250, "linear", function() {
          ixeditUi.css("overflow", "auto");
          /** @type {boolean} */
          ixedit.commonPrefs.areasShown[areaNum] = true;
          theContainer.height("");
          ixedit.resizeCommentHeight();
        });
        ixedit.animateCommentHeight(newHeight, 250);
      } else {
        theContainer.height(containerOuterHeight + "px");
        ixeditUi.css("overflow", "auto");
        /** @type {boolean} */
        ixedit.commonPrefs.areasShown[areaNum] = true;
        theContainer.height("");
        theContainer.show();
        ixedit.resizeCommentHeight();
      }
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.showAbout = function() {
    var label = ixedit.label;
    var aboutDialog = jQuery('<div id="ixedit-about-ui" title="' + label.utilityAbout + '"><div class="ixedit-instruction-content">' + "<h2>" + label.appName + "</h2><p>" + label.version + ": " + ixedit.version + "<br />" + label.copyright + "</p></div>");
    aboutDialog.dialog({
      width : 400,
      modal : true,
      resizable : false,
      dialogClass : "ixedit-dialog ixedit-dialog-about",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          aboutDialog.dialog("destroy");
          aboutDialog.remove();
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        var aboutDialog = jQuery(".ixedit-dialog-about");
        var buttons = jQuery("button:visible", aboutDialog);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        jQuery(buttons[0]).text(label.mainButtonClose);
        jQuery(".ui-widget-overlay").addClass("ixedit-overlay");
      },
      /**
       * @return {undefined}
       */
      close : function() {
        aboutDialog.dialog("destroy");
        aboutDialog.remove();
      }
    });
  };
  /**
   * @return {undefined}
   */
  ixedit.showDeploy = function() {
    var label = ixedit.label;
    var deployDialog = jQuery('<div id="ixedit-deploy-ui" title="' + label.utilityDeploy + '"><div class="ixedit-instruction-content">' + label.instructionDeploy + '<textarea class="ixedit-deployingtext"></textarea><p class="ixedit-undertextareaoption"><span><input type="checkbox" id="ixedit-deployoption-1" onclick="ixedit.checkCommentInclusion(jQuery(this))" /><label for="ixedit-deployoption-1">' + label.inputLabelIncludeComment + "</label></span></p></div>");
    deployDialog.dialog({
      width : 600,
      height : 550,
      minWidth : 600,
      minHeight : 550,
      modal : true,
      resizable : true,
      dialogClass : "ixedit-dialog ixedit-dialog-deploy",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          deployDialog.dialog("destroy");
          deployDialog.remove();
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        ixedit.refreshDeployDialog();
        var deployDialog = jQuery(".ixedit-dialog-deploy");
        var buttons = jQuery("button:visible", deployDialog);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        jQuery(buttons[0]).text(label.mainButtonClose);
        jQuery(".ui-widget-overlay").addClass("ixedit-overlay");
        var textArea = jQuery("textarea.ixedit-deployingtext", deployDialog);
        ixedit.resizeBoxHeightOnDialog(deployDialog, textArea, 75);
      },
      /**
       * @return {undefined}
       */
      close : function() {
        deployDialog.dialog("destroy");
        deployDialog.remove();
      },
      /**
       * @return {undefined}
       */
      resize : function() {
        var deployDialog = jQuery(".ixedit-dialog-deploy");
        var textArea = jQuery("textarea.ixedit-deployingtext", deployDialog);
        ixedit.resizeBoxHeightOnDialog(deployDialog, textArea, 75);
      }
    });
  };
  /**
   * @return {undefined}
   */
  ixedit.showExport = function() {
    var label = ixedit.label;
    var exportDialog = jQuery('<div id="ixedit-export-ui" title="' + ixedit.label.utilityExport + '"><div class="ixedit-instruction-content">' + label.instructionExport + '<textarea class="ixedit-exportingtext"></textarea></div></div>');
    exportDialog.dialog({
      width : 600,
      height : 480,
      minWidth : 600,
      minHeight : 480,
      modal : true,
      resizable : true,
      dialogClass : "ixedit-dialog ixedit-dialog-export",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          jQuery(this).dialog("destroy");
          exportDialog.remove();
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        ixedit.refreshExportDialog();
        var exportDialog = jQuery(".ixedit-dialog-export");
        var buttons = jQuery("button:visible", exportDialog);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        jQuery(buttons[0]).text(ixedit.label.mainButtonClose);
        jQuery(".ui-widget-overlay").addClass("ixedit-overlay");
        var textArea = jQuery("textarea.ixedit-exportingtext", exportDialog);
        ixedit.resizeBoxHeightOnDialog(exportDialog, textArea, 45);
      },
      /**
       * @return {undefined}
       */
      close : function() {
        exportDialog.dialog("destroy");
        exportDialog.remove();
      },
      /**
       * @return {undefined}
       */
      resize : function() {
        var exportDialog = jQuery(".ixedit-dialog-export");
        var textArea = jQuery("textarea.ixedit-exportingtext", exportDialog);
        ixedit.resizeBoxHeightOnDialog(exportDialog, textArea, 45);
      }
    });
  };
  /**
   * @param {Text} control
   * @param {Object} panel0
   * @param {Object} panel1
   * @return {undefined}
   */
  ixedit.switchImportPanel = function(control, panel0, panel1) {
    var importDialog = jQuery(".ixedit-dialog-import");
    switch(control.val()) {
      case "0":
        panel0.show();
        panel1.hide();
        var textArea = jQuery(".ixedit-importingtext", importDialog);
        ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);
        break;
      default:
        panel0.show();
        panel1.hide();
        break;
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.showImport = function() {
    var label = ixedit.label;
    var importDialog = jQuery('<div id="ixedit-import-ui" title="' + label.utilityImport + '"><div id="ixedit-import-paste" class="ixedit-instruction-content">' + label.instructionImport + '<textarea class="ixedit-importingtext"></textarea></div></div>');
    importDialog.dialog({
      width : 600,
      height : 480,
      minWidth : 600,
      minHeight : 480,
      modal : true,
      resizable : true,
      dialogClass : "ixedit-dialog ixedit-dialog-import",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          jQuery(this).dialog("destroy");
          importDialog.remove();
        },
        /**
         * @return {undefined}
         */
        1 : function() {
          if (jQuery("#ixedit-import-paste").is(":visible")) {
            var dataText = jQuery(".ixedit-importingtext").val();
            ixedit.importData(dataText);
          } else {
            if (jQuery("#ixedit-import-db").is(":visible")) {
              var importingScreenID = jQuery(".ixedit-listbox", jQuery("#ixedit-import-db")).val();
              ixedit.importOneIxDB(importingScreenID);
            }
          }
          jQuery(this).dialog("destroy");
          jQuery("#ixedit-import-ui").remove();
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        var importDialog = jQuery(".ixedit-dialog-import");
        var buttons = jQuery("button:visible", importDialog);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        jQuery(buttons[0]).text(label.mainButtonCancel);
        jQuery(buttons[1]).text(label.mainButtonImport).addClass("ixedit-button-import");
        jQuery(".ui-widget-overlay").addClass("ixedit-overlay");
        var textArea = jQuery("textarea.ixedit-importingtext", importDialog);
        ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);
      },
      /**
       * @return {undefined}
       */
      close : function() {
        importDialog.dialog("destroy");
        importDialog.remove();
      },
      /**
       * @return {undefined}
       */
      resize : function() {
        var importDialog = jQuery(".ixedit-dialog-import");
        if (jQuery("#ixedit-import-paste").is(":visible")) {
          var textArea = jQuery("textarea.ixedit-importingtext", importDialog);
          ixedit.resizeBoxHeightOnDialog(importDialog, textArea, 45);
        } else {
          if (jQuery("#ixedit-import-db").is(":visible")) {
            var listBox = jQuery("select.ixedit-listbox", importDialog);
            ixedit.resizeBoxHeightOnDialog(importDialog, listBox, 45);
          }
        }
      }
    });
  };
  /**
   * @param {?} dialog
   * @param {?} box
   * @param {number} bottomOffset
   * @return {undefined}
   */
  ixedit.resizeBoxHeightOnDialog = function(dialog, box, bottomOffset) {
    var boxPosition = box.position();
    box.css("height", dialog.height() - boxPosition.top - bottomOffset);
  };
  /**
   * @return {undefined}
   */
  ixedit.showJSON = function() {
    window.alert(this.encodeIxsJSON(this.ixs));
  };
  /**
   * @param {?} commandName
   * @return {undefined}
   */
  ixedit.showCommadHelp = function(commandName) {
    var label = ixedit.label;
    var showCommandHelpDialog = jQuery('<div id="showcommandhelpdialog" title="' + label.commandHelp + '"><div class="ixedit-instruction-content"></div></div>');
    showCommandHelpDialog.dialog({
      width : 600,
      height : 440,
      modal : true,
      resizable : true,
      dialogClass : "ixedit-dialog ixedit-dialog-commandhelp",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          jQuery(this).dialog("destroy");
          showCommandHelpDialog.remove();
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        var commandhelpDialog = jQuery(".ixedit-dialog-commandhelp");
        jQuery(".ixedit-instruction-content", commandhelpDialog).html(ixedit.cmds[commandName].help);
        var buttons = jQuery("button:visible", commandhelpDialog);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        jQuery(buttons[0]).text(label.mainButtonClose);
        jQuery(".ui-widget-overlay").addClass("ixedit-overlay");
      },
      /**
       * @return {undefined}
       */
      close : function() {
        showCommandHelpDialog.dialog("destroy");
        showCommandHelpDialog.remove();
      }
    });
  };
  /**
   * @param {Array} ixsArray
   * @return {?}
   */
  ixedit.encodeIxsJSON = function(ixsArray) {
    /** @type {Array} */
    var newJSON = [];
    var ixsArrayLength = ixsArray.length;
    /** @type {number} */
    var jsonItemCnt = 0;
    for (;jsonItemCnt < ixsArrayLength;jsonItemCnt++) {
      var newJsonItem = {};
      newJsonItem.name = ixsArray[jsonItemCnt].name;
      newJsonItem.active = ixsArray[jsonItemCnt].active;
      newJsonItem.trigger = ixsArray[jsonItemCnt].trigger;
      newJsonItem.event = ixsArray[jsonItemCnt].event;
      newJsonItem.preventDefault = ixsArray[jsonItemCnt].preventDefault;
      newJsonItem.stopBubbling = ixsArray[jsonItemCnt].stopBubbling;
      newJsonItem.comment = ixsArray[jsonItemCnt].comment;
      newJsonItem.conditions = ixsArray[jsonItemCnt].conditions;
      newJsonItem.actions = ixsArray[jsonItemCnt].actions;
      newJSON[jsonItemCnt] = newJsonItem;
    }
    var savingDataObject = {};
    savingDataObject.format = this.format;
    /** @type {Array} */
    savingDataObject.data = newJSON;
    return JSON.stringify(savingDataObject);
  };
  /**
   * @param {?} jsonpath
   * @return {undefined}
   */
  ixedit.loadJSONAjax = function(jsonpath) {
    var platform = this;
    jQuery.getJSON(jsonpath, function(ixAtts) {
      platform.jsonToIxs(ixAtts);
      platform.ixs.setAll();
    });
  };
  /**
   * @param {string} theString
   * @return {undefined}
   */
  ixedit.loadCommonPrefsJsonString = function(theString) {
    if (theString != "") {
      this.commonPrefs = this.JSON.parse(theString);
    } else {
    }
  };
  /**
   * @param {string} theString
   * @return {undefined}
   */
  ixedit.loadPrefsJsonString = function(theString) {
    if (theString != "") {
      this.prefs = this.JSON.parse(theString);
    } else {
    }
  };
  /**
   * @param {string} selectorString
   * @return {?}
   */
  ixedit.modifySelectorString = function(selectorString) {
    var newSelectorString = selectorString.replace(/'/g, '"');
    return newSelectorString;
  };
  /**
   * @return {?}
   */
  ixedit.getIxFromInputs = function() {
    var newIx = new this.ix;
    newIx.name = jQuery("#ixedit-name").val();
    newIx.screenName = newIx.name;
    /** @type {boolean} */
    newIx.active = true;
    var theTrigger = ixedit.modifySelectorString(jQuery("#ixedit-trigger").val());
    newIx.trigger = theTrigger;
    newIx.screenTrigger = newIx.trigger;
    newIx.event = jQuery("#ixedit-event").val();
    newIx.screenEvent = this.findOptionScreenName(this.selectOptions.eventHandlers, newIx.event);
    newIx.preventDefault = jQuery("#ixedit-preventdefault").is(":checked");
    newIx.stopBubbling = jQuery("#ixedit-stopbubbling").is(":checked");
    newIx.comment = jQuery("#ixedit-comment").val();
    newIx.screenComment = newIx.comment;
    var actionLines = jQuery(".ixedit-actioninputs");
    actionLines = actionLines.not(".ixedit-hidden");
    var conditionLines = jQuery(".ixedit-conditioninputs");
    conditionLines = conditionLines.not(".ixedit-hidden");
    if (actionLines.length > 0) {
      actionLines.each(function() {
        if (jQuery(".unchian-unknown-target", jQuery(this)).length > 0) {
          var targetString = jQuery(".unchian-unknown-target", jQuery(this)).val();
          var delayString = jQuery(".unchian-unknown-delay", jQuery(this)).val();
          var commandString = jQuery(".unchian-unknown-command", jQuery(this)).val();
          var attributesString = jQuery(".unchian-unknown-params", jQuery(this)).val();
          var attributesSubString = jQuery(".unchian-unknown-subparams", jQuery(this)).val();
          /** @type {*} */
          var commandAttributesValues = JSON.parse(unescape(attributesString));
          /** @type {*} */
          var commandAttributesSubValues = JSON.parse(unescape(attributesSubString));
        } else {
          targetString = ixedit.modifySelectorString(jQuery(".ixedit-target", jQuery(this)).val());
          delayString = jQuery(".ixedit-delay", jQuery(this)).val();
          commandString = jQuery(".ixedit-command", jQuery(this)).val();
          var theAttributesArea = jQuery(".ixedit-attrsarea-" + commandString, jQuery(this));
          var commandAttributes = jQuery(".ixedit-inputitem", theAttributesArea);
          /** @type {Array} */
          commandAttributesValues = [];
          commandAttributes.each(function() {
            if (jQuery(this).attr("type") == "checkbox") {
              commandAttributesValues[commandAttributesValues.length] = jQuery(this).is(":checked");
            } else {
              commandAttributesValues[commandAttributesValues.length] = jQuery(this).val();
            }
          });
          /** @type {Array} */
          commandAttributesSubValues = [];
          var subParamsAreas = jQuery(".subparam", theAttributesArea);
          if (subParamsAreas.length > 0) {
            var subParamsAreasLength = subParamsAreas.length;
            /** @type {number} */
            var subParamsCnt = 0;
            for (;subParamsCnt < subParamsAreasLength;subParamsCnt++) {
              var commandAttributesSub = jQuery(".ixedit-inputitem-sub", subParamsAreas[subParamsCnt]);
              /** @type {Array} */
              var commandAttributesSubEachValues = [];
              commandAttributesSub.each(function() {
                commandAttributesSubEachValues[commandAttributesSubEachValues.length] = jQuery(this).val();
              });
              /** @type {Array} */
              commandAttributesSubValues[commandAttributesSubValues.length] = commandAttributesSubEachValues;
            }
          }
        }
        newIx.actions[newIx.actions.length] = {
          "target" : targetString,
          "delay" : delayString,
          "command" : commandString,
          "params" : commandAttributesValues,
          "subparams" : commandAttributesSubValues
        };
      });
    }
    if (conditionLines.length > 0) {
      conditionLines.each(function() {
        if (jQuery(".unchian-unknown-condtarget", jQuery(this)).length > 0) {
          var typeString = jQuery(".unchian-unknown-condtype", jQuery(this)).val();
          var targetString = jQuery(".unchian-unknown-condtarget", jQuery(this)).val();
          var commandString = jQuery(".unchian-unknown-condcommand", jQuery(this)).val();
          var attributesString = jQuery(".unchian-unknown-condparams", jQuery(this)).val();
          /** @type {*} */
          var commandAttributesValues = JSON.parse(unescape(attributesString));
        } else {
          typeString = jQuery(".ixedit-cond-type", jQuery(this)).val();
          targetString = ixedit.modifySelectorString(jQuery(".ixedit-cond-target", jQuery(this)).val());
          commandString = jQuery(".ixedit-cond-command", jQuery(this)).val();
          var theAttributesArea = jQuery(".ixedit-cond-attrsarea-" + commandString, jQuery(this));
          var commandAttributes = jQuery(".ixedit-inputitem", theAttributesArea);
          /** @type {Array} */
          commandAttributesValues = [];
          commandAttributes.each(function() {
            commandAttributesValues[commandAttributesValues.length] = jQuery(this).val();
          });
        }
        newIx.conditions[newIx.conditions.length] = {
          "type" : typeString,
          "target" : targetString,
          "command" : commandString,
          "params" : commandAttributesValues
        };
      });
    }
    return newIx;
  };
  /**
   * @param {Object} object
   * @return {?}
   */
  ixedit.dupObj = function(object) {
    var newObject = {};
    var property;
    for (property in object) {
      newObject[property] = object[property];
    }
    return newObject;
  };
  /**
   * @return {undefined}
   */
  ixedit.duplicate = function() {
    var theIxs = this.ixs;
    /** @type {Array} */
    var targetIxNos = [];
    /** @type {Array} */
    var currentIxNos = [];
    var selectedLineNos = this.prefs.selectedLineNo;
    var selectedLineNosLength = selectedLineNos.length;
    /** @type {number} */
    var i = 0;
    for (;i < selectedLineNosLength;i++) {
      targetIxNos[i] = this.listItems[selectedLineNos[i]].no;
      var addingIx = this.dupObj(theIxs[targetIxNos[i]]);
      theIxs.add(addingIx);
      theIxs[this.ixs.length - 1].set();
      /** @type {number} */
      currentIxNos[currentIxNos.length] = theIxs.length - 1;
    }
    this.prepareList();
    /** @type {number} */
    i = 0;
    for (;i < currentIxNos.length;i++) {
      selectedLineNos[i] = this.getListItemNo(currentIxNos[i]);
    }
    this.prefs.selectedLineNo = selectedLineNos;
    this.refreshList(true);
    ixedit.refreshListButtonStates();
    this.showSelectedItem();
    this.updateFullData();
  };
  /**
   * @return {undefined}
   */
  ixedit.save = function() {
    var theIxs = this.ixs;
    if (ixedit.addingNewIx) {
      /** @type {number} */
      var targetIxNo = theIxs.length - 1
    } else {
      var selectedLineNos = this.prefs.selectedLineNo;
      targetIxNo = this.listItems[selectedLineNos[selectedLineNos.length - 1]].no;
    }
    var newIx = this.getIxFromInputs();
    newIx.active = theIxs[targetIxNo].active;
    if (newIx.event == "load" || newIx.event == "unload") {
      /** @type {string} */
      newIx.trigger = "";
    }
    theIxs[targetIxNo].unset();
    theIxs[targetIxNo] = newIx;
    if (theIxs[targetIxNo].active) {
      theIxs[targetIxNo].set();
    }
    this.showIxlist();
    this.prepareList();
    /** @type {number} */
    this.prefs.selectedLineNo.length = 1;
    this.prefs.selectedLineNo[0] = this.getListItemNo(targetIxNo);
    this.refreshList(true);
    ixedit.refreshListButtonStates();
    this.showSelectedItem();
    this.updateFullData();
  };
  /**
   * @param {?} targetJqueryObj
   * @return {undefined}
   */
  ixedit.realtimeBind = function(targetJqueryObj) {
    jQuery(":input", targetJqueryObj).change(function() {
      /** @type {boolean} */
      ixedit.modified = true;
      ixedit.saveCon(true);
    });
  };
  /**
   * @param {boolean} isWithSet
   * @return {undefined}
   */
  ixedit.saveCon = function(isWithSet) {
    if (ixedit.addingNewIx) {
      /** @type {number} */
      var targetIxNo = this.ixs.length - 1
    } else {
      var selectedLineNos = this.prefs.selectedLineNo;
      if (selectedLineNos.length > 0) {
        targetIxNo = this.listItems[selectedLineNos[selectedLineNos.length - 1]].no;
      } else {
        return;
      }
    }
    var newIx = this.getIxFromInputs();
    newIx.active = this.ixs[targetIxNo].active;
    this.ixs[targetIxNo].unset();
    this.ixs[targetIxNo] = newIx;
    if (isWithSet) {
      if (this.ixs[targetIxNo].event != "load" && this.ixs[targetIxNo].event != "unload") {
        this.ixs[targetIxNo].set();
      }
    }
  };
  /**
   * @param {?} dataText
   * @return {undefined}
   */
  ixedit.importData = function(dataText) {
    var theData = dataText;
    if (this.ixs.length > 0) {
      this.ixs.unsetAll();
    }
    this.loadIxJSONString(theData);
    this.ixs.setAll();
    this.prepareList();
    this.refreshList(true);
    ixedit.refreshListButtonStates();
    if (this.ixs.length > 0) {
      this.showSelectedItem();
    }
    this.showIxlist();
  };
  /**
   * @return {undefined}
   */
  ixedit.refreshDeployDialog = function() {
    if (ixedit.commonPrefs.deployWithComment) {
      jQuery("#ixedit-deployoption-1").attr("checked", "checked");
    } else {
      jQuery("#ixedit-deployoption-1").removeAttr("checked");
    }
    var dataText = this.ixs.getJqueryCode();
    jQuery(".ixedit-deployingtext").val(dataText);
  };
  /**
   * @param {?} theCheckbox
   * @return {undefined}
   */
  ixedit.checkCommentInclusion = function(theCheckbox) {
    if (theCheckbox.is(":checked")) {
      /** @type {boolean} */
      this.commonPrefs.deployWithComment = true;
    } else {
      /** @type {boolean} */
      this.commonPrefs.deployWithComment = false;
    }
    var dataText = this.ixs.getJqueryCode();
    jQuery(".ixedit-deployingtext").val(dataText);
  };
  /**
   * @return {undefined}
   */
  ixedit.refreshExportDialog = function() {
    var dataText = this.encodeIxsJSON(this.ixs);
    jQuery(".ixedit-exportingtext").val(dataText);
  };
  /**
   * @param {Array} targetIxNos
   * @return {undefined}
   */
  ixedit.deleteIx = function(targetIxNos) {
    targetIxNos.ixeditSortByNumber();
    targetIxNos.reverse();
    var targetIxNosLength = targetIxNos.length;
    /** @type {number} */
    var i = 0;
    for (;i < targetIxNosLength;i++) {
      var theNum = targetIxNos[i];
      this.ixs[theNum].unset();
      this.ixs.del(theNum);
    }
    /** @type {Array} */
    this.prefs.selectedLineNo.length = [];
    this.prepareList();
    this.refreshList(true);
    ixedit.refreshListButtonStates();
  };
  /**
   * @param {?} selectElm
   * @param {string} theVal
   * @return {undefined}
   */
  ixedit.selectOne = function(selectElm, theVal) {
    /** @type {boolean} */
    var foundOne = false;
    var theOptions = jQuery("option", selectElm);
    theOptions.each(function() {
      if (jQuery(this).val() == theVal) {
        jQuery(this).attr("selected", "selected");
        /** @type {boolean} */
        foundOne = true;
      } else {
        jQuery(this).removeAttr("selected");
      }
    });
    if (!foundOne) {
      jQuery(theOptions[0]).attr("selected", "selected");
    }
  };
  /**
   * @param {?} targetObj
   * @param {?} name
   * @param {?} active
   * @param {?} trigger
   * @param {string} event
   * @param {?} preventDefault
   * @param {?} stopBubbling
   * @param {boolean} isWithEffect
   * @param {?} key
   * @return {undefined}
   */
  ixedit.appendBasicInputs = function(targetObj, name, active, trigger, event, preventDefault, stopBubbling, isWithEffect, key) {
    var label = ixedit.label;
    /** @type {Array} */
    var basicHTML = [];
    /** @type {string} */
    basicHTML[basicHTML.length] = '<div class="ixedit-basicinputs"><table><tr><td class="ixedit-basicdetails">';
    /** @type {string} */
    basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-event"><tr><td class="ixedit-labelarea-event ixedit-labelarea-default"><label>' + label.inputLabelEvent + '</label></td><td class="ixedit-inputarea-event ixedit-inputarea-xlarge">';
    /** @type {string} */
    basicHTML[basicHTML.length] = '<select id="ixedit-event" onchange="ixedit.showHideTriggers(jQuery(this), ixedit.gimmickAnimation)">';
    basicHTML[basicHTML.length] = ixedit.evtMenuSource;
    /** @type {string} */
    basicHTML[basicHTML.length] = "</select>";
    /** @type {string} */
    basicHTML[basicHTML.length] = '</td><td style="padding: 0 !important">';
    /** @type {string} */
    basicHTML[basicHTML.length] = "</td></tr></table>";
    /** @type {string} */
    basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-trigger"><tr><td class="ixedit-labelarea-trigger ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-trigger"><input type="text" id="ixedit-trigger" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-trigger\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';
    /** @type {string} */
    basicHTML[basicHTML.length] = '<table class="ixedit-triggerarea-triggeroptions"><tr><td class="ixedit-labelarea-triggeroptions ixedit-labelarea-default"><label>&nbsp;</label></td><td class="ixedit-inputarea-preventdefault ixedit-inputarea-checkbox"><input type="checkbox" id="ixedit-preventdefault" /></td><td class="ixedit-labelarea-preventdefault ixedit-labelarea-xxlarge ixedit-labelarea-checkbox"><label for="ixedit-preventdefault">' + label.inputLabelPreventDefault + '</label></td><td class="ixedit-inputarea-stopbubbling ixedit-inputarea-checkbox"><input type="checkbox" id="ixedit-stopbubbling" /></td><td class="ixedit-labelarea-stopbubbling ixedit-labelarea-xxlarge ixedit-labelarea-checkbox"><label for="ixedit-stopbubbling">' +
        label.inputLabelStopBubbling + "</label></td><td>&nbsp;</td></tr></table>";
    /** @type {string} */
    basicHTML[basicHTML.length] = "</td>";
    /** @type {string} */
    basicHTML[basicHTML.length] = '<td class="ixedit-tinybtnarea">&nbsp;</td>';
    /** @type {string} */
    basicHTML[basicHTML.length] = "</tr></table></div>";
    jQuery(basicHTML.join("")).appendTo(targetObj);
    jQuery("#ixedit-trigger").val(trigger);
    jQuery(".ixedit-xraybtn", jQuery(".ixedit-basicdetails")).mousedown(function() {
      jQuery(this).addClass("ixedit-xraybtn-pushed");
    }).mouseout(function() {
      jQuery(this).removeClass("ixedit-xraybtn-pushed");
    });
    var theEventSelector = jQuery("#ixedit-event", targetObj);
    this.selectOne(theEventSelector, event);
    this.showHideTriggers(theEventSelector, false);
    if (preventDefault) {
      jQuery("#ixedit-preventdefault").attr("checked", "checked");
    }
    if (stopBubbling) {
      jQuery("#ixedit-stopbubbling").attr("checked", "checked");
    }
    jQuery("#ixedit-key").keypress(function(e) {
      jQuery(this).val(e.which);
      return false;
    });
  };
  /**
   * @param {?} targetObj
   * @param {number} actionNo
   * @param {string} target
   * @param {string} delay
   * @param {string} command
   * @param {string} attributesJson
   * @param {string} attributesSubJson
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.appendUnknownActionInputs = function(targetObj, actionNo, target, delay, command, attributesJson, attributesSubJson, isWithEffect) {
    var label = ixedit.label;
    /** @type {string} */
    var theActionId = "ixedit-action-" + actionNo;
    /** @type {Array} */
    var actionHTML = [];
    /** @type {string} */
    actionHTML[actionHTML.length] = '<div class="ixedit-actioninputs" id="' + theActionId + '"><table><tr><td class="ixedit-actiondetails"><p class="ixedit-unknowncommand-prompt">&quot;' + command + "&quot;&nbsp;" + label.messageCommndNotSupported + '</p><input type="hidden" class="unchian-unknown-target" value="' + target + '"/><input type="hidden" class="unchian-unknown-delay" value="' + delay + '"/><input type="hidden" class="unchian-unknown-command" value="' + command + '"/><input type="hidden" class="unchian-unknown-params" value="' +
        attributesJson + '"/><input type="hidden" class="unchian-unknown-subparams" value="' + attributesSubJson + '"/></td>';
    /** @type {string} */
    actionHTML[actionHTML.length] = '<td class="ixedit-tinybtnarea">';
    if (this.enableMultiActions) {
      /** @type {string} */
      actionHTML[actionHTML.length] = '<button class="ixedit-removeaction" title="' + label.remove + '" onclick="ixedit.removeActionInputs(\'' + theActionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removeaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removeaction-h\')">&nbsp;</button><button title="' + label.add + '" class="ixedit-addaction" onclick="ixedit.addActionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addaction-h\')">&nbsp;</button>'
      ;
    }
    /** @type {string} */
    actionHTML[actionHTML.length] = "</td></tr></table></div>";
    var addingElement = jQuery(actionHTML.join(""));
    addingElement.appendTo(targetObj);
  };
  /**
   * @param {?} targetObj
   * @param {number} actionNo
   * @param {string} target
   * @param {string} delay
   * @param {string} command
   * @param {Array} attributesArray
   * @param {Array} attributesSubArray
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.appendActionInputs = function(targetObj, actionNo, target, delay, command, attributesArray, attributesSubArray, isWithEffect) {
    /** @type {string} */
    var theActionId = "ixedit-action-" + actionNo;
    var label = ixedit.label;
    /** @type {Array} */
    var actionHTML = [];
    /** @type {string} */
    actionHTML[actionHTML.length] = '<div class="ixedit-actioninputs" id="' + theActionId + '"><table><tr><td class="ixedit-actiondetails">';
    /** @type {string} */
    actionHTML[actionHTML.length] = '<table><tr><td class="ixedit-labelarea-command ixedit-labelarea-default"><label>' + label.inputLabelCommand + '</label></td><td class="ixedit-inputarea-command ixedit-inputarea-xlarge"><select class="ixedit-command" onchange="ixedit.showHideAttrs2(\'' + actionNo + "', " + ixedit.gimmickAnimation + ')">';
    actionHTML[actionHTML.length] = this.cmdMenuSource;
    /** @type {string} */
    actionHTML[actionHTML.length] = '</select></td><td class="ixedit-inputarea-help"><button class="ixedit-commandhelp" title="' + label.commandHelp + '" onmousedown="jQuery(this).addClass(\'ixedit-commandhelp-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-commandhelp-h\')">&nbsp;</button></td>';
    /** @type {string} */
    actionHTML[actionHTML.length] = "</tr></table>";
    /** @type {string} */
    actionHTML[actionHTML.length] = '<table class="ixedit-cmdtarget"><tr><td class="ixedit-labelarea-target ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-target"><input type="text" id="ixedit-target-' + actionNo + '"class="ixedit-target" value="" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-target-' + actionNo + '\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';
    /** @type {string} */
    actionHTML[actionHTML.length] = '<div class="ixedit-cmdattrs"></div>';
    /** @type {string} */
    actionHTML[actionHTML.length] = '<table class="ixedit-cmddelay"><tr><td class="ixedit-labelarea-delay ixedit-labelarea-default"><label>' + label.inputLabelDelay + '</label></td><td class="ixedit-inputarea-delay ixedit-inputarea-medium"><select class="ixedit-delay">';
    var thisSelectOptionsDelayAttrsLength = this.selectOptions.delayAttrs.length;
    /** @type {number} */
    var h = 0;
    for (;h < thisSelectOptionsDelayAttrsLength;h++) {
      /** @type {string} */
      actionHTML[actionHTML.length] = '<option value="' + this.selectOptions.delayAttrs[h][1] + '">' + this.selectOptions.delayAttrs[h][0] + "</option>";
    }
    /** @type {string} */
    actionHTML[actionHTML.length] = "</select>";
    /** @type {string} */
    actionHTML[actionHTML.length] = "</td><td>&nbsp;</td></tr></table>";
    /** @type {string} */
    actionHTML[actionHTML.length] = "</td>";
    /** @type {string} */
    actionHTML[actionHTML.length] = '<td class="ixedit-tinybtnarea">';
    if (this.enableMultiActions) {
      /** @type {string} */
      actionHTML[actionHTML.length] = '<button class="ixedit-removeaction" title="' + label.remove + '" onclick="ixedit.removeActionInputs(\'' + theActionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removeaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removeaction-h\')">&nbsp;</button><button title="' + label.add + '" class="ixedit-addaction" onclick="ixedit.addActionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addaction-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addaction-h\')">&nbsp;</button>'
      ;
    }
    /** @type {string} */
    actionHTML[actionHTML.length] = "</td>";
    /** @type {string} */
    actionHTML[actionHTML.length] = "</tr></table></div>";
    var addingElement = jQuery(actionHTML.join(""));
    addingElement.hide();
    addingElement.appendTo(targetObj);
    if (isWithEffect) {
      if (jQuery("#ixedit-commentitems").height() != 100) {
        jQuery("#ixedit-ui").removeClass("ixedit-input");
      }
      addingElement.fadeIn("slow");
      setTimeout(function() {
        ixedit.resizeCommentHeight();
        jQuery("#ixedit-ui").addClass("ixedit-input");
      }, 1);
    } else {
      addingElement.show();
    }
    var targetActionLine = jQuery("#" + theActionId);
    this.selectOne(jQuery(".ixedit-delay", targetActionLine), delay);
    this.selectOne(jQuery(".ixedit-command", targetActionLine), command);
    this.showHideAttrs2(actionNo, false);
    jQuery(".ixedit-target", targetActionLine).val(target);
    var theAttributesArea = jQuery(".ixedit-attrsarea-" + command, targetActionLine);
    var attributeControls = jQuery(".ixedit-inputitem", theAttributesArea);
    attributeControls.each(function(i) {
      var theVal = attributesArray[i];
      if (jQuery(this).attr("type") == "checkbox") {
        if (theVal == true) {
          jQuery(this).attr("checked", "checked");
        } else {
          jQuery(this).removeAttr("checked");
        }
      } else {
        jQuery(this).val(attributesArray[i]);
      }
    });
    /** @type {number} */
    var attributesSubArrayLengthMinusOne = attributesSubArray.length - 1;
    /** @type {number} */
    var subparamCnt = 0;
    for (;subparamCnt < attributesSubArrayLengthMinusOne;subparamCnt++) {
      if (command) {
        var subparamAddButton = jQuery(".ixedit-subparam-addbutton", targetActionLine);
        ixedit.addSubParam(subparamAddButton, command);
      }
    }
    var subParamsAreas = jQuery(".subparam", theAttributesArea);
    if (subParamsAreas.length > 0) {
      var subParamsAreasLength = subParamsAreas.length;
      /** @type {number} */
      var subParamsCnt = 0;
      for (;subParamsCnt < subParamsAreasLength;subParamsCnt++) {
        var eachSubParamInputs = jQuery(".ixedit-inputitem-sub", subParamsAreas[subParamsCnt]);
        var eachSubParamInputsLength = eachSubParamInputs.length;
        /** @type {number} */
        var zzz = 0;
        for (;zzz < eachSubParamInputsLength;zzz++) {
          jQuery(eachSubParamInputs[zzz]).val(attributesSubArray[subParamsCnt][zzz]);
        }
      }
    }
    if (command && (command != "" && this.cmds[command])) {
      this.cmds[command].afterValueLoadedFunc(targetActionLine);
    }
    jQuery(".ixedit-xraybtn", targetObj).mousedown(function() {
      jQuery(this).addClass("ixedit-xraybtn-pushed");
    }).mouseout(function() {
      jQuery(this).removeClass("ixedit-xraybtn-pushed");
    });
  };
  /**
   * @param {?} targetObj
   * @param {number} conditionNo
   * @param {string} type
   * @param {string} target
   * @param {string} command
   * @param {string} attributesJson
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.appendUnknownConditionInputs = function(targetObj, conditionNo, type, target, command, attributesJson, isWithEffect) {
    var label = ixedit.label;
    /** @type {string} */
    var theConditionId = "ixedit-condition-" + conditionNo;
    /** @type {Array} */
    var conditionHTML = [];
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputs" id="' + theConditionId + '"><table><tr><td class="ixedit-conditiondetails"><p class="ixedit-unknowncommand-prompt">&quot;' + command + "&quot;&nbsp;" + label.messageCommndNotSupported + '</p><input type="hidden" class="unchian-unknown-condtype" value="' + type + '"/><input type="hidden" class="unchian-unknown-condtarget" value="' + target + '"/><input type="hidden" class="unchian-unknown-condcommand" value="' + command +
        '"/><input type="hidden" class="unchian-unknown-condparams" value="' + attributesJson + '"/></td>';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-removecondition" title="' + label.remove + '" onclick="ixedit.removeConditionInputs(\'' + theConditionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removecondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removecondition-h\')">&nbsp;</button><button class="ixedit-addcondition" title="' + label.add + '" onclick="ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td>';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = "</tr></table></div>";
    var addingElement = jQuery(conditionHTML.join(""));
    addingElement.appendTo(targetObj);
  };
  /**
   * @param {?} targetObj
   * @param {number} conditionNo
   * @param {string} type
   * @param {string} target
   * @param {string} command
   * @param {Array} attributesArray
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.appendConditionInputs = function(targetObj, conditionNo, type, target, command, attributesArray, isWithEffect) {
    var label = ixedit.label;
    /** @type {string} */
    var theConditionId = "ixedit-condition-" + conditionNo;
    /** @type {Array} */
    var conditionHTML = [];
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputs" id="' + theConditionId + '"><table><tr><td class="ixedit-conditiondetails">';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-command ixedit-labelarea-default"><label>' + label.inputLabelCommand + '</label></td><td class="ixedit-inputarea-command ixedit-inputarea-xlarge"><select class="ixedit-cond-command" onchange="ixedit.showHideCondAttrs2(\'' + theConditionId + "', true)\">";
    conditionHTML[conditionHTML.length] = ixedit.condCmdMenuSource;
    /** @type {string} */
    conditionHTML[conditionHTML.length] = "</select>";
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '</td><td class="ixedit-inputarea-help">' + label.of + "</td></tr></table>";
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-target ixedit-labelarea-default"><label>' + label.inputLabelElement + '</label></td><td class="ixedit-inputarea-target"><input type="text" id="ixedit-cond-target-' + conditionNo + '"class="ixedit-cond-target" value="" /></td><td class="ixedit-inputarea-xray"><button class="ixedit-xraybtn" onclick="ixedit.xRay.startXRay(jQuery(\'#ixedit-cond-target-' + conditionNo + '\'))" title="' + label.tipXRayBtn + '">&nbsp;</button></td></tr></table>';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<table><tr><td class="ixedit-labelarea-cond-type ixedit-labelarea-default">&nbsp;</td><td class="unchian-inputarea-cond-type ixedit-inputarea-large"><select class="ixedit-cond-type"><option class="ixedit-cond-type-1" value="if">' + label.condTypeIf + '</option><option class="ixedit-cond-type-2" value="ifnot">' + label.condTypeIfNot + "</option></select></td><td>&nbsp;</td></tr></table>";
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<div class="ixedit-cmdattrs"></div>';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-removecondition" title="' + label.remove + '" onclick="ixedit.removeConditionInputs(\'' + theConditionId + '\')" onmousedown="jQuery(this).addClass(\'ixedit-removecondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-removecondition-h\')">&nbsp;</button><button class="ixedit-addcondition" title="' + label.add + '" onclick="ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td>';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = "</tr></table></div>";
    var addingElement = jQuery(conditionHTML.join(""));
    addingElement.hide();
    addingElement.appendTo(targetObj);
    if (isWithEffect) {
      if (jQuery("#ixedit-commentitems").height() != 100) {
        jQuery("#ixedit-ui").removeClass("ixedit-input");
      }
      addingElement.fadeIn("slow");
      setTimeout(function() {
        ixedit.resizeCommentHeight();
        jQuery("#ixedit-ui").addClass("ixedit-input");
      }, 1);
    } else {
      addingElement.show();
    }
    var targetConditionLine = jQuery("#" + theConditionId);
    this.selectOne(jQuery(".ixedit-cond-type", targetConditionLine), type);
    this.selectOne(jQuery(".ixedit-cond-command", targetConditionLine), command);
    this.showHideCondAttrs2(theConditionId, false);
    jQuery(".ixedit-xraybtn", targetObj).mousedown(function() {
      jQuery(this).addClass("ixedit-xraybtn-pushed");
    }).mouseout(function() {
      jQuery(this).removeClass("ixedit-xraybtn-pushed");
    });
    jQuery(".ixedit-cond-target", targetConditionLine).val(target);
    var theAttributesArea = jQuery(".ixedit-cond-attrsarea-" + command, targetConditionLine);
    var attributeControls = jQuery(".ixedit-inputitem", theAttributesArea);
    /** @type {Array} */
    var commandAttributesValues = [];
    if (attributeControls.length >= attributesArray.length) {
      attributeControls.each(function(i) {
        jQuery(this).val(attributesArray[i]);
      });
    }
  };
  /**
   * @param {?} targetObj
   * @return {undefined}
   */
  ixedit.appendBlankConditionInputs = function(targetObj) {
    var label = ixedit.label;
    /** @type {Array} */
    var conditionHTML = [];
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<div class="ixedit-conditioninputsblank" id="ixedit-condition-blank"><table><tr><td class="ixedit-conditiondetails">';
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '<table><tr><td><p class="ixedit-blankcond-prompt">' + label.messageNoCondition + "</p></td></tr></table>";
    /** @type {string} */
    conditionHTML[conditionHTML.length] = '</td><td class="ixedit-tinybtnarea"><button class="ixedit-addcondition" title="' + label.add + '" onclick="jQuery(\'#ixedit-condition-blank:first\').hide(); ixedit.addConditionInputs()" onmousedown="jQuery(this).addClass(\'ixedit-addcondition-h\')" onmouseout="jQuery(this).removeClass(\'ixedit-addcondition-h\')">&nbsp;</button></td></tr></table></div>';
    jQuery(conditionHTML.join("")).appendTo(targetObj);
  };
  /**
   * @param {?} targetObj
   * @param {string} comment
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.appendCommentInputs = function(targetObj, comment, isWithEffect) {
    /** @type {Array} */
    var commentHTML = [];
    /** @type {string} */
    commentHTML[commentHTML.length] = '<div class="ixedit-commentinputs"><table><tr><td class="ixedit-commentdetails">';
    /** @type {string} */
    commentHTML[commentHTML.length] = '<table><tr><td class="ixedit-labelarea-comment ixedit-labelarea-default">&nbsp;</td><td class="ixedit-inputarea-comment"><textarea id="ixedit-comment" rows="">' + comment + "</textarea></td></tr></table>";
    /** @type {string} */
    commentHTML[commentHTML.length] = '</td><td class="ixedit-tinybtnarea">&nbsp;</td></tr></table></div>';
    jQuery(commentHTML.join("")).appendTo(targetObj);
  };
  /**
   * @param {Text} theSelect
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.showHideTriggers = function(theSelect, isWithEffect) {
    var theTarget = jQuery(".ixedit-basicdetails");
    var theEventValue = theSelect.val();
    if (theEventValue == "load" || theEventValue == "unload") {
      if (isWithEffect) {
        jQuery(".ixedit-triggerarea-trigger", theTarget).hide();
        jQuery(".ixedit-triggerarea-triggeroptions", theTarget).hide();
      } else {
        jQuery(".ixedit-triggerarea-trigger", theTarget).hide();
        jQuery(".ixedit-triggerarea-triggeroptions", theTarget).hide();
      }
    } else {
      if (isWithEffect) {
        jQuery(".ixedit-triggerarea-trigger", theTarget).fadeIn("slow");
        jQuery(".ixedit-triggerarea-triggeroptions", theTarget).fadeIn("slow");
      } else {
        jQuery(".ixedit-triggerarea-trigger", theTarget).show();
        jQuery(".ixedit-triggerarea-triggeroptions", theTarget).show();
      }
    }
    ixedit.resizeCommentHeight();
  };
  /**
   * @param {number} actionNo
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.showHideAttrs2 = function(actionNo, isWithEffect) {
    /** @type {string} */
    var theActionId = "ixedit-action-" + actionNo;
    var theTarget = jQuery("#" + theActionId);
    var theWrapper = jQuery(".ixedit-cmdattrs", theTarget);
    var theCommandValue = jQuery(".ixedit-command", theTarget).val();
    var theCmd = ixedit.cmds[theCommandValue];
    if (theCmd.dontNeedTarget == true) {
      jQuery(".ixedit-cmdtarget", theTarget).hide();
    } else {
      if (isWithEffect) {
        jQuery(".ixedit-cmdtarget", theTarget).fadeIn();
      } else {
        jQuery(".ixedit-cmdtarget", theTarget).show();
      }
    }
    if (theCmd.dontNeedDelay == true) {
      jQuery(".ixedit-cmddelay", theTarget).hide();
    } else {
      if (isWithEffect) {
        jQuery(".ixedit-cmddelay", theTarget).fadeIn();
      } else {
        jQuery(".ixedit-cmddelay", theTarget).show();
      }
    }
    var theContent = this.cmds[theCommandValue].jqueryObj(actionNo);
    theContent.hide();
    theWrapper.empty();
    theWrapper.append(theContent);
    if (isWithEffect) {
      theContent.fadeIn();
    } else {
      theContent.show();
    }
    ixedit.resizeCommentHeight();
    this.realtimeBind(theWrapper);
    var buttons = jQuery(".ixedit-commandhelp", theTarget);
    buttons.off("click");
    buttons.click(function() {
      ixedit.showCommadHelp(theCommandValue);
    });
    theCmd.initFunc(theTarget);
  };
  /**
   * @param {string} theConditionId
   * @param {boolean} isWithEffect
   * @return {undefined}
   */
  ixedit.showHideCondAttrs2 = function(theConditionId, isWithEffect) {
    var theTarget = jQuery("#" + theConditionId);
    var theWrapper = jQuery(".ixedit-cmdattrs", theTarget);
    var theCommandValue = jQuery(".ixedit-cond-command", theTarget).val();
    var theContent = this.condcmds[theCommandValue].jqueryObj();
    theContent.hide();
    theWrapper.empty();
    theWrapper.append(theContent);
    if (isWithEffect) {
      theContent.fadeIn();
    } else {
      theContent.show();
    }
    this.realtimeBind(theWrapper);
  };
  /**
   * @return {undefined}
   */
  ixedit.addNewIx = function() {
    /** @type {boolean} */
    this.addingNewIx = true;
    var tempIx = new this.ix;
    /** @type {boolean} */
    tempIx.active = true;
    /** @type {string} */
    tempIx.trigger = "";
    /** @type {string} */
    tempIx.event = "click";
    /** @type {Array} */
    tempIx.actions = [{
      "target" : "",
      "delay" : "0",
      "command" : "addClass",
      "params" : ["", ""],
      "subparams" : [["", ""]]
    }];
    this.ixs.add(tempIx);
    tempIx.set();
    this.bufferIx(tempIx);
    this.refreshIxInputBox(tempIx);
    this.showIxinputbox();
  };
  /**
   * @return {undefined}
   */
  ixedit.showHideActnBtn = function() {
    jQuery(".ixedit-addaction").hide();
    var actionAreas = jQuery(".ixedit-actioninputs", jQuery("#ixedit-actionitems"));
    actionAreas = actionAreas.not(".ixedit-hidden");
    if (actionAreas.length == 1) {
      jQuery(".ixedit-removeaction").hide();
      jQuery(".ixedit-addaction:first", actionAreas[actionAreas.length - 1]).addClass("ixedit-initialbutton");
    } else {
      jQuery(".ixedit-removeaction").show();
    }
    jQuery(".ixedit-addaction:first", actionAreas[actionAreas.length - 1]).show();
  };
  /**
   * @return {undefined}
   */
  ixedit.showHideCndtnBtn = function() {
    jQuery(".ixedit-addcondition").hide();
    var conditionAreas = jQuery(".ixedit-conditioninputs");
    conditionAreas = conditionAreas.not(".ixedit-hidden");
    if (conditionAreas.length < 1) {
      var conditionBlank = jQuery("#ixedit-condition-blank");
      conditionBlank.show();
      jQuery(".ixedit-addcondition", conditionBlank).show();
    } else {
      jQuery(".ixedit-addcondition", conditionAreas[conditionAreas.length - 1]).show();
    }
  };
  /**
   * @param {Object} ixObj
   * @return {undefined}
   */
  ixedit.bufferIx = function(ixObj) {
    this.bufferedIx = new this.ix;
    this.bufferedIx.name = ixObj.name;
    this.bufferedIx.active = ixObj.active;
    this.bufferedIx.trigger = ixObj.trigger;
    this.bufferedIx.event = ixObj.event;
    this.bufferedIx.comment = ixObj.comment;
    this.bufferedIx.conditions = ixObj.conditions;
    this.bufferedIx.actions = ixObj.actions;
  };
  /**
   * @return {undefined}
   */
  ixedit.resetIxInputBox = function() {
    this.refreshIxInputBox(this.bufferedIx);
    if (!jQuery("#ixedit-cmnt").hasClass("ixedit-hidden")) {
      ixedit.resizeCommentHeight();
    }
    ixedit.saveCon(true);
  };
  /**
   * @param {Object} ixObj
   * @return {undefined}
   */
  ixedit.refreshIxInputBox = function(ixObj) {
    jQuery("#ixedit-basicitems").empty();
    jQuery("#ixedit-actionitems").empty();
    jQuery("#ixedit-conditionitems").empty();
    jQuery("#ixedit-commentitems").empty();
    this.appendBasicInputs(jQuery("#ixedit-basicitems"), ixObj.name, ixObj.active, ixObj.trigger, ixObj.event, ixObj.preventDefault, ixObj.stopBubbling, false);
    var ixObjActionsLength = ixObj.actions.length;
    /** @type {number} */
    var i = 0;
    for (;i < ixObjActionsLength;i++) {
      var theActions = ixObj.actions[i];
      if (ixedit.cmds[theActions.command]) {
        this.appendActionInputs(jQuery("#ixedit-actionitems"), i, theActions.target, theActions.delay, theActions.command, theActions.params, theActions.subparams, false);
      } else {
        /** @type {string} */
        var theParams = escape(JSON.stringify(theActions.params));
        /** @type {string} */
        var theSubParams = escape(JSON.stringify(theActions.subparams));
        ixedit.appendUnknownActionInputs(jQuery("#ixedit-actionitems"), i, theActions.target, theActions.delay, theActions.command, theParams, theSubParams, false);
      }
    }
    if (ixObjActionsLength == 1) {
      jQuery(".ixedit-titlestatusarea-action").text(ixObjActionsLength + " " + ixedit.label.inputHeaderStatusItem);
    } else {
      if (ixObjActionsLength > 1) {
        jQuery(".ixedit-titlestatusarea-action").text(ixObjActionsLength + " " + ixedit.label.inputHeaderStatusItems);
      }
    }
    this.showHideActnBtn();
    this.appendBlankConditionInputs(jQuery("#ixedit-conditionitems"));
    if (ixObj.conditions.length > 0) {
      jQuery("#ixedit-condition-blank").hide();
      var ixObjConditionsLength = ixObj.conditions.length;
      /** @type {number} */
      i = 0;
      for (;i < ixObjConditionsLength;i++) {
        var theConditions = ixObj.conditions[i];
        if (ixedit.condcmds[theConditions.command]) {
          this.appendConditionInputs(jQuery("#ixedit-conditionitems"), i, theConditions.type, theConditions.target, theConditions.command, theConditions.params, false);
        } else {
          /** @type {string} */
          theParams = escape(JSON.stringify(theConditions.params));
          ixedit.appendUnknownConditionInputs(jQuery("#ixedit-conditionitems"), i, theConditions.type, theActions.target, theConditions.command, theParams, false);
        }
      }
      if (ixObj.conditions.length == 1) {
        jQuery(".ixedit-titlestatusarea-condition").text(ixObj.conditions.length + " " + ixedit.label.inputHeaderStatusItem);
      } else {
        jQuery(".ixedit-titlestatusarea-condition").text(ixObj.conditions.length + " " + ixedit.label.inputHeaderStatusItems);
      }
    } else {
      jQuery(".ixedit-titlestatusarea-condition").text(ixedit.label.inputHeaderStatusNone);
    }
    this.showHideCndtnBtn();
    this.appendCommentInputs(jQuery("#ixedit-commentitems"), ixObj.comment, false);
    /**
     * @return {undefined}
     */
    var updateCommentStatus = function() {
      var theCommentInput = jQuery("#ixedit-comment");
      if (theCommentInput.val() != "") {
        jQuery(".ixedit-titlestatusarea-comment").text(ixedit.label.inputHeaderStatusCommented);
      } else {
        jQuery(".ixedit-titlestatusarea-comment").text(ixedit.label.inputHeaderStatusNone);
      }
    };
    updateCommentStatus();
    jQuery("#ixedit-commentitems").on("change", updateCommentStatus);
    var targetArea = jQuery("#ixedit-inputbox");
    this.realtimeBind(targetArea);
  };
  /**
   * @return {undefined}
   */
  ixedit.addActionInputs = function() {
    var actionCnt = jQuery(".ixedit-actioninputs").length;
    this.appendActionInputs(jQuery("#ixedit-actionitems"), actionCnt, "", "", "", [], [], ixedit.gimmickAnimation);
    var newNumber = jQuery(".ixedit-actioninputs:visible").length;
    jQuery(".ixedit-titlestatusarea-action").text(newNumber + " " + ixedit.label.inputHeaderStatusItems);
    this.showHideActnBtn();
    this.realtimeBind(jQuery("#ixedit-action-" + actionCnt));
  };
  /**
   * @return {undefined}
   */
  ixedit.addConditionInputs = function() {
    var conditionCnt = jQuery(".ixedit-conditioninputs").length;
    this.appendConditionInputs(jQuery("#ixedit-conditionitems"), conditionCnt, "if", "", "", [], ixedit.gimmickAnimation);
    var newNumber = jQuery(".ixedit-conditioninputs:visible").length;
    if (newNumber == 1) {
      jQuery(".ixedit-titlestatusarea-condition").text(newNumber + " " + ixedit.label.inputHeaderStatusItem);
    } else {
      if (newNumber > 1) {
        jQuery(".ixedit-titlestatusarea-condition").text(newNumber + " " + ixedit.label.inputHeaderStatusItems);
      }
    }
    this.showHideCndtnBtn();
    ixedit.realtimeBind(jQuery("#ixedit-condition-" + conditionCnt));
  };
  /**
   * @param {string} theActionId
   * @return {undefined}
   */
  ixedit.removeActionInputs = function(theActionId) {
    jQuery("#" + theActionId).addClass("ixedit-hidden").hide();
    var newNumber = jQuery(".ixedit-actioninputs:visible").length;
    if (newNumber == 1) {
      jQuery(".ixedit-titlestatusarea-action").text(newNumber + " " + ixedit.label.inputHeaderStatusItem);
    } else {
      if (newNumber > 1) {
        jQuery(".ixedit-titlestatusarea-action").text(newNumber + " " + ixedit.label.inputHeaderStatusItems);
      }
    }
    this.showHideActnBtn();
    this.resizeCommentHeight();
    this.saveCon(true);
  };
  /**
   * @param {string} theConditionId
   * @return {undefined}
   */
  ixedit.removeConditionInputs = function(theConditionId) {
    jQuery("#" + theConditionId).addClass("ixedit-hidden").hide();
    var newNumber = jQuery(".ixedit-conditioninputs:visible").length;
    if (newNumber > 0) {
      if (newNumber == 1) {
        jQuery(".ixedit-titlestatusarea-condition").text(newNumber + " " + ixedit.label.inputHeaderStatusItem);
      } else {
        jQuery(".ixedit-titlestatusarea-condition").text(newNumber + " " + ixedit.label.inputHeaderStatusItems);
      }
    } else {
      jQuery(".ixedit-titlestatusarea-condition").text(ixedit.label.inputHeaderStatusNone);
    }
    this.showHideCndtnBtn();
    this.resizeCommentHeight();
    this.saveCon(true);
  };
  /**
   * @param {?} obj
   * @param {string} cmdName
   * @return {undefined}
   */
  ixedit.addSubParam = function(obj, cmdName) {
    var theCmd = this.cmds[cmdName];
    var theHTML = ixedit.makeSubParams(theCmd);
    var targetArea = jQuery(obj).parents(".ixedit-attrsarea-" + cmdName);
    targetArea.append(theHTML);
    ixedit.resizeCommentHeight();
    ixedit.realtimeBind(jQuery(".subparam:last", targetArea));
    ixedit.setSubParamsButtons(targetArea, cmdName);
  };
  /**
   * @param {?} obj
   * @param {string} cmdName
   * @return {undefined}
   */
  ixedit.removeSubParam = function(obj, cmdName) {
    var targetSubParam = jQuery(obj).parents(".subparam");
    var targetArea = targetSubParam.parents(".ixedit-attrsarea-" + cmdName);
    targetSubParam.remove();
    ixedit.resizeCommentHeight();
    this.saveCon(true);
    this.setSubParamsButtons(targetArea, cmdName);
  };
  /**
   * @param {?} obj
   * @param {string} cmdName
   * @return {undefined}
   */
  ixedit.setSubParamsButtons = function(obj, cmdName) {
    /**
     * @param {Object} targetArea
     * @param {string} cmdName
     * @return {undefined}
     */
    function addRemoveButton(targetArea, cmdName) {
      targetArea.append(ixedit.makeSubParamsRemoveButtonHTML(cmdName));
    }
    /**
     * @param {Object} targetArea
     * @param {string} cmdName
     * @return {undefined}
     */
    function addAddButton(targetArea, cmdName) {
      targetArea.append(ixedit.makeSubParamsAddButtonHTML(cmdName));
    }
    var subParamBtnAreas = jQuery(".subparambuttonarea", obj);
    jQuery(".subparam-removebutton", subParamBtnAreas).remove();
    jQuery(".ixedit-subparam-addbutton", subParamBtnAreas).remove();
    if (subParamBtnAreas.length > 1) {
      jQuery.each(subParamBtnAreas, function() {
        addRemoveButton(jQuery(this), cmdName);
      });
    }
    addAddButton(jQuery(subParamBtnAreas[subParamBtnAreas.length - 1]), cmdName);
  };
  /**
   * @param {?} theCmd
   * @return {?}
   */
  ixedit.makeSubParamsHTML = function(theCmd) {
    /** @type {Array} */
    var theHTML = [];
    var theCmdCubParamAttrsHTMLsLength = theCmd.subParamAttrsHTMLs.length;
    /** @type {number} */
    var i = 0;
    for (;i < theCmdCubParamAttrsHTMLsLength;i++) {
      theHTML[theHTML.length] = theCmd.subParamAttrsHTMLs[i];
    }
    /** @type {string} */
    theHTML[theHTML.length] = "";
    return theHTML.join("");
  };
  /**
   * @param {string} theCmdName
   * @return {?}
   */
  ixedit.makeSubParamsAddButtonHTML = function(theCmdName) {
    return'<button class="ixedit-subparam-addbutton" onclick="ixedit.addSubParam(this, \'' + theCmdName + "')\" onmousedown=\"jQuery(this).addClass('ixedit-subparam-addbutton-h')\" onmousedown=\"jQuery(this).removeClass('ixedit-subparam-addbutton-h')\">&nbsp;</button>";
  };
  /**
   * @param {string} theCmdName
   * @return {?}
   */
  ixedit.makeSubParamsRemoveButtonHTML = function(theCmdName) {
    return'<button class="subparam-removebutton" onclick="ixedit.removeSubParam(this, \'' + theCmdName + "')\" onmousedown=\"jQuery(this).addClass('ixedit-subparam-removebutton-h')\" onmousedown=\"jQuery(this).removeClass('ixedit-subparam-removebutton-h')\">&nbsp;</button>";
  };
  /**
   * @param {(Error|string)} theCmd
   * @return {?}
   */
  ixedit.makeSubParams = function(theCmd) {
    /** @type {Array} */
    var theHTML = [];
    theHTML[theHTML.length] = '<table class="subparam"><tr>' + ixedit.makeSubParamsHTML(theCmd);
    /** @type {string} */
    theHTML[theHTML.length] = '<td class="subparambuttonarea">' + ixedit.makeSubParamsAddButtonHTML(theCmd.name) + "</td>";
    /** @type {string} */
    theHTML[theHTML.length] = "</tr></table>";
    return theHTML.join("");
  };
  /**
   * @param {Array} theArray
   * @return {?}
   */
  ixedit.arrayToOptions = function(theArray) {
    /** @type {Array} */
    var theHTML = [];
    var theArrayLength = theArray.length;
    /** @type {number} */
    var i = 0;
    for (;i < theArrayLength;i++) {
      /** @type {string} */
      theHTML[theHTML.length] = '<option value="' + theArray[i][1] + '">' + theArray[i][0] + "</option>";
    }
    return theHTML.join("");
  };
  ixedit.xRay = {};
  ixedit.xRay.xRayedElement = jQuery("<rosetta></rosetta>");
  /** @type {Array} */
  ixedit.xRay.theSelectors = [];
  ixedit.xRay.targetSelectorBox = jQuery("<rosetta></rosetta>");
  /** @type {boolean} */
  ixedit.xRay.avoiding = false;
  /**
   * @param {?} event
   * @return {undefined}
   */
  ixedit.xRay.onEsc = function(event) {
    if (jQuery("#ixedit-xrayguidebox").is(":visible") && event.keyCode == jQuery.ui.keyCode.ESCAPE) {
      ixedit.xRay.endXRay();
    }
  };
  /**
   * @param {Object} targetElement
   * @return {undefined}
   */
  ixedit.xRay.showTheX = function(targetElement) {
    if (this.xRayedElement != targetElement) {
      var xRayedBox = jQuery("#ixedit-xrayedbox");
      xRayedBox.show();
      /** @type {Object} */
      xRayedElement = targetElement;
      var theHeight = xRayedElement.outerHeight();
      var theWidth = xRayedElement.outerWidth();
      var theOffset = xRayedElement.offset();
      var theX = xRayedBox;
      theX.height(theHeight);
      theX.width(theWidth);
      theX.css("top", theOffset.top);
      theX.css("left", theOffset.left);
    }
  };
  /**
   * @param {Array} selectorsArray
   * @param {Object} theEvent
   * @return {undefined}
   */
  ixedit.xRay.showSelectors = function(selectorsArray, theEvent) {
    var selectorBox = jQuery("#ixedit-xrayselectorbox");
    var selectorMenu = jQuery("#ixedit-selectormenu");
    selectorMenu.empty();
    /** @type {number} */
    var i = 0;
    for (;i < selectorsArray.length;i++) {
      selectorMenu.append('<li class="ixedit-selectormenuitem" id="ixedit-selectormenuitem-' + i + '">' + selectorsArray[i] + "</li>");
    }
    var pageWidth = jQuery("html").width();
    if (theEvent.pageX + 180 < pageWidth) {
      selectorBox.css("left", theEvent.pageX).removeClass("ixedit-xrayselectorbox-right");
    } else {
      selectorBox.css("left", theEvent.pageX - 169).addClass("ixedit-xrayselectorbox-right");
    }
    selectorBox.css("top", theEvent.pageY - 15);
    jQuery(".ixedit-selectormenuitem").hover(function() {
      jQuery(this).addClass("selected");
    }, function() {
      jQuery(this).removeClass("selected");
    }).mouseup(function(theEvent) {
      ixedit.xRay.getSelector(jQuery(this).text());
      return false;
    }).mousedown(function() {
      return false;
    });
  };
  /**
   * @param {?} theValue
   * @return {undefined}
   */
  ixedit.xRay.getSelector = function(theValue) {
    var originalTextboxBGColor = this.targetSelectorBox.css("background-color");
    this.targetSelectorBox.val(theValue).trigger("change").css("background-color", "#ffcc00");
    this.targetSelectorBox.animate({
      "backgroundColor" : originalTextboxBGColor
    }, 1E3, "linear");
    this.endXRay();
  };
  /**
   * @param {Node} targetElement
   * @return {?}
   */
  ixedit.xRay.processSelector = function(targetElement) {
    var selectors = {};
    /** @type {boolean} */
    var hasIdOrClass = false;
    selectors.theId = jQuery(targetElement).attr("id");
    selectors.theClass = jQuery(targetElement).attr("class");
    selectors.theTag = targetElement.tagName.toLowerCase();
    /** @type {Array} */
    var selectorArray = [];
    if (selectors.theId) {
      /** @type {string} */
      selectorArray[selectorArray.length] = selectors.theTag + "#" + selectors.theId;
      /** @type {boolean} */
      hasIdOrClass = true;
    }
    if (selectors.theClass) {
      var classesStr = selectors.theClass;
      /** @type {string} */
      classesStr = selectors.theTag + "." + classesStr;
      /** @type {string} */
      var theDlmtr = " " + selectors.theTag + ".";
      /** @type {string} */
      classesStr = classesStr.replace(/ /g, theDlmtr);
      /** @type {Array.<string>} */
      var classes = classesStr.split(" ");
      /** @type {Array} */
      selectorArray = selectorArray.concat(classes);
      /** @type {boolean} */
      hasIdOrClass = true;
    }
    if (!hasIdOrClass) {
      selectorArray[selectorArray.length] = selectors.theTag;
    }
    return selectorArray;
  };
  /**
   * @return {?}
   */
  ixedit.xRay.getXRayTargets = function() {
    var selectorBox = jQuery("#ixedit-xrayselectorbox");
    var xRayedBox = jQuery("#ixedit-xrayedbox");
    var guideBox = jQuery("#ixedit-xrayguidebox");
    var ixeditDialog = jQuery("#ixedit-dialog-main");
    var ixeditWrapper = jQuery("#ixedit-wrapper");
    var xRayTargets = jQuery("*").add(jQuery("body")).not(jQuery("window")).not(xRayedBox).not(selectorBox).not(jQuery("*", selectorBox)).not(guideBox).not(jQuery("*", guideBox)).not(ixeditDialog).not(jQuery("*", ixeditDialog).not(ixeditWrapper));
    return xRayTargets;
  };
  /**
   * @return {undefined}
   */
  ixedit.xRay.endXRay = function() {
    xRayTargets = this.getXRayTargets();
    xRayTargets.off("mousedown", this.xRayMouseDown);
    xRayTargets.off("mouseover", this.returningFalse);
    xRayTargets.off("mousemove", this.fadingOut);
    xRayTargets.off("mouseenter", this.returningFalse);
    xRayTargets.off("mouseout", this.returningFalse);
    xRayTargets.off("mouseleave", this.returningFalse);
    xRayTargets.off("click", this.returningFalse);
    xRayTargets.off("mouseover", this.cursorDefault);
    jQuery("#ixedit-xrayedbox").off("mousedown", this.returningFalse);
    jQuery("#ixedit-xrayselectorbox").remove();
    jQuery("#ixedit-xrayedbox").remove();
    jQuery("#ixedit-xrayguidebox").remove();
    /** @type {boolean} */
    this.avoiding = false;
    jQuery(window).off("keydown", ixedit.xRay.onEsc);
    jQuery("#ixedit-wrapper").show();
    jQuery("#ixedit-dialog-main").show();
    jQuery("#ixedit-ui").scrollTop(ixedit.xRay.dialogScrollTop);
  };
  /**
   * @param {Object} theEvent
   * @return {?}
   */
  ixedit.xRay.xRayMouseDown = function(theEvent) {
    if (ixedit.xRay.avoiding) {
      return false;
    } else {
    }
    jQuery("#ixedit-xrayselectorbox").hide();
    /** @type {number} */
    ixedit.xRay.theSelectors.length = 0;
    var currentElement = this;
    var parentElements = jQuery(this).parents();
    ixedit.xRay.theSelectors = ixedit.xRay.theSelectors.concat(ixedit.xRay.processSelector(currentElement));
    parentElements.each(function() {
      var parentElement = this;
      ixedit.xRay.theSelectors = ixedit.xRay.theSelectors.concat(ixedit.xRay.processSelector(parentElement));
    });
    /** @type {string} */
    ixedit.xRay.theSelectors[ixedit.xRay.theSelectors.length] = "window";
    ixedit.xRay.showTheX(jQuery(currentElement));
    ixedit.xRay.showSelectors(ixedit.xRay.theSelectors, theEvent);
    jQuery("#ixedit-xrayedbox").show();
    jQuery("#ixedit-xrayselectorbox").show();
    return false;
  };
  /**
   * @return {?}
   */
  ixedit.xRay.returningFalse = function() {
    return false;
  };
  /**
   * @return {undefined}
   */
  ixedit.xRay.fadingOut = function() {
    jQuery("#ixedit-xrayedbox").fadeOut(500);
  };
  /**
   * @return {undefined}
   */
  ixedit.xRay.cursorDefault = function() {
    jQuery(this).css("cursor", "default");
  };
  /**
   * @param {string} targetSelectorBox
   * @return {undefined}
   */
  ixedit.xRay.startXRay = function(targetSelectorBox) {
    ixedit.xRay.dialogScrollTop = jQuery("#ixedit-ui").scrollTop();
    jQuery("#ixedit-dialog-main").hide();
    jQuery("#ixedit-wrapper").hide();
    jQuery(window).on("keydown", ixedit.xRay.onEsc);
    /** @type {string} */
    this.targetSelectorBox = targetSelectorBox;
    var selectorBox = jQuery('<div id="ixedit-xrayselectorbox" class="ixedit-dialog"><div id="ixedit-selectorcontent"><ul id="ixedit-selectormenu"></ul></div><div id="ixedit-selectorarrow">&nbsp;</div></div>');
    var theX = jQuery('<div id="ixedit-xrayedbox">&nbsp;</div>');
    var guideBox = jQuery('<div id="ixedit-xrayguidebox"><p>' + ixedit.label.instructionXRay1 + ' <button class="ixedit-xraycancel" onclick="ixedit.xRay.endXRay(); return false;" title="' + ixedit.label.cancel + '">&nbsp;</button></p></div>');
    var pageWidth = jQuery("html").innerWidth();
    selectorBox.hide();
    theX.hide();
    if (pageWidth > 0) {
      guideBox.css("left", pageWidth / 2 - 220 + "px");
    }
    selectorBox.appendTo(jQuery("body"));
    theX.appendTo(jQuery("body"));
    guideBox.appendTo(jQuery("body"));
    jQuery("#ixedit-xrayguidebox").css("position", "fixed");
    jQuery("#ixedit-xrayguidebox").css("top", "50px");
    guideBox.draggable({
      /**
       * @return {undefined}
       */
      start : function() {
        if (jQuery.browser.safari) {
          jQuery("#ixedit-xrayguidebox").css("position", "absolute");
        }
      }
    });
    jQuery(".ixedit-xraycancel").mousedown(function() {
      jQuery(this).addClass("ixedit-xraycancel-pushed");
    }).mouseout(function() {
      jQuery(this).removeClass("ixedit-xraycancel-pushed");
    });
    var xRayTargets = this.getXRayTargets();
    xRayTargets.on("mousedown", this.xRayMouseDown);
    xRayTargets.on("mouseover", this.returningFalse);
    xRayTargets.on("mousemove", this.fadingOut);
    xRayTargets.on("mouseenter", this.returningFalse);
    xRayTargets.on("mouseout", this.returningFalse);
    xRayTargets.on("mouseleave", this.returningFalse);
    xRayTargets.on("click", this.returningFalse);
    xRayTargets.on("mouseover", this.cursorDefault);
    jQuery("#ixedit-xrayedbox").on("mousedown", this.returningFalse);
    guideBox.on("mousedown", function() {
      /** @type {boolean} */
      ixedit.xRay.avoiding = true;
    });
    guideBox.on("mouseout", function() {
      /** @type {boolean} */
      ixedit.xRay.avoiding = false;
    });
    jQuery("#ixedit-xraycancel").on("mousedown", function() {
      return false;
    });
  };
  /**
   * @return {undefined}
   */
  ixedit.preBufferOriginal = function() {
    this.lostWorld = jQuery("<div>" + jQuery("body").html() + "</div>");
  };
  /**
   * @return {undefined}
   */
  ixedit.makeDialogBase = function() {
    var label = this.label;
    jQuery('<div id="ixedit-ui" title="IxEdit"><div id="ixedit-inputbox"><div id="ixedit-basic"><table id="ixedit-basictitle"><tr><td class="unchian-disclosurearea-basic"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-basic">' + label.inputHeaderUseracton + '</td><td class="ixedit-titlestatusarea-basic">&nbsp;</td></tr></table><div id="ixedit-basicitems"></div></div><div id="ixedit-action"><table id="ixedit-actiontitle"><tr><td class="unchian-disclosurearea-action"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-action">' +
        label.inputHeaderSystemfeedback + '</td><td class="ixedit-titlestatusarea-action">&nbsp;</td></tr></table><div id="ixedit-actionitems"></div></div><div id="ixedit-condition"><table id="ixedit-conditiontitle"><tr><td class="unchian-disclosurearea-condition"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-condition">' + label.inputHeaderCondition + '</td><td class="ixedit-titlestatusarea-condition">&nbsp;</td></tr></table><div id="ixedit-conditionitems"></div></div><div id="ixedit-cmnt"><table id="ixedit-commenttitle"><tr><td class="unchian-disclosurearea-comment"><button class="disclosure_triangle">&nbsp;</button></td><td class="ixedit-titlearea-comment">' +
        label.inputHeaderComment + '</td><td class="ixedit-titlestatusarea-comment">&nbsp;</td></tr></table><div id="ixedit-commentitems"></div></div></div></div>').prependTo(jQuery("body"));
    jQuery('<div id="ixlist" style="display: none"><div id="ixedit-listheader"><table class="ixedit-table ixedit-table-header"></table></div><div id="ixedit-listbody"><table class="ixedit-table ixedit-table-body"></table></div></div>').prependTo(jQuery("#ixedit-ui"));
    jQuery('<div id="ixedit-utility"><button id="ixedit-routebtn" title="' + label.tipRouteBtn + '">&nbsp;</button><div id="ixedit-routemenu"><ul><li id="ixedit-showAbout">' + label.utilityAbout + '</li><li id="ixedit-showImport">' + label.utilityImport + '</li><li id="ixedit-showExport">' + label.utilityExport + '</li><li id="ixedit-showDeploy">' + label.utilityDeploy + '</li><li id="ixedit-showJson" style="display: none;">' + label.utilityShowJson + '</li></ul></div><p><span id="ixedit-utilitynoofitems">0</span> , <span id="ixedit-utilitynoofselected">0</span></p></div>').prependTo(jQuery("#ixedit-ui"));
    jQuery('<div id="ixedit-wrapper"></div>').appendTo(jQuery("body"));
  };
  /**
   * @return {undefined}
   */
  ixedit.generateDialogMain = function() {
    var label = this.label;
    jQuery("#ixedit-ui").dialog({
      closeOnEscape : false,
      width : this.commonPrefs.inspectorWidth,
      minWidth : 530,
      height : this.commonPrefs.inspectorHeight,
      modal : false,
      resizable : true,
      dialogClass : "ixedit-dialog ixedit-dialog-main",
      buttons : {
        /**
         * @return {undefined}
         */
        0 : function() {
          ixedit.addNewIx();
        },
        /**
         * @return {undefined}
         */
        1 : function() {
          ixedit.duplicate();
        },
        /**
         * @return {undefined}
         */
        2 : function() {
          /** @type {Array} */
          var targetIxNos = [];
          var selectedLineNos = ixedit.prefs.selectedLineNo;
          var selectedLineNosLength = selectedLineNos.length;
          /** @type {number} */
          var i = 0;
          for (;i < selectedLineNosLength;i++) {
            targetIxNos[i] = ixedit.listItems[selectedLineNos[i]].no;
          }
          if (selectedLineNosLength < 2) {
            var theMessage = label.alertDeletingItem1
          } else {
            theMessage = label.alertDeletingItem2 + selectedLineNosLength + label.alertDeletingItem3;
          }
          if (window.confirm(theMessage)) {
            ixedit.deleteIx(targetIxNos);
          }
          ixedit.showIxlist();
        },
        /**
         * @return {undefined}
         */
        3 : function() {
          ixedit.updatePrefsDataAndReload();
        },
        /**
         * @return {undefined}
         */
        4 : function() {
          if (ixedit.prefs.selectedLineNo.length > 0) {
            var targetIxNo = ixedit.listItems[ixedit.prefs.selectedLineNo[0]].no;
            var targetIx = ixedit.ixs[targetIxNo];
            ixedit.bufferIx(targetIx);
            ixedit.refreshIxInputBox(targetIx);
            ixedit.showIxinputbox();
          }
        },
        /**
         * @return {undefined}
         */
        5 : function() {
          /** @type {boolean} */
          ixedit.addingNewIx = false;
          ixedit.deleteIx([ixedit.ixs.length - 1]);
          ixedit.refreshListButtonStates();
          if (ixedit.ixs.length > 0) {
            ixedit.showSelectedItem();
          }
          ixedit.showIxlist();
        },
        /**
         * @return {undefined}
         */
        6 : function() {
          ixedit.resetIxInputBox();
        },
        /**
         * @return {undefined}
         */
        7 : function() {
          if (ixedit.ixs.length > 0) {
            ixedit.saveCon(false);
            if (ixedit.addingNewIx) {
              /** @type {number} */
              var targetIxNo = ixedit.ixs.length - 1
            } else {
              var selectedLineNos = ixedit.prefs.selectedLineNo;
              targetIxNo = ixedit.listItems[selectedLineNos[selectedLineNos.length - 1]].no;
            }
            ixedit.prepareList();
            /** @type {number} */
            ixedit.prefs.selectedLineNo.length = 1;
            ixedit.prefs.selectedLineNo[0] = ixedit.getListItemNo(targetIxNo);
          }
          ixedit.updateIxDataAndReload();
        },
        /**
         * @return {undefined}
         */
        8 : function() {
          ixedit.save();
          /** @type {boolean} */
          ixedit.addingNewIx = false;
        }
      },
      /**
       * @return {undefined}
       */
      open : function() {
        /**
         * @param {Array} targets
         * @return {undefined}
         */
        function setAreaDisclosure(targets) {
          var thePrefs = ixedit.commonPrefs.areasShown;
          var targetsLength = targets.length;
          /** @type {number} */
          var i = 0;
          for (;i < targetsLength;i++) {
            var theWrapper = targets[i].wrapper;
            var theContainer = targets[i].container;
            if (thePrefs[i] == false) {
              theWrapper.addClass("ixedit-hidden");
              theContainer.hide();
            }
          }
        }
        var theDialog = jQuery(".ixedit-dialog-main");
        theDialog.attr("id", "ixedit-dialog-main");
        var ixeditUi = jQuery("#ixedit-ui");
        var ixeditTitlebar = jQuery(".ui-dialog-titlebar", theDialog);
        var ixeditButtonPane = jQuery(".ui-dialog-buttonpane", theDialog);
        var buttons = jQuery("button", ixeditButtonPane);
        ixedit.positDialogMain();
        theDialog.draggable("option", "containment", "#ixedit-wrapper").draggable("option", "scroll", false);
        jQuery(window).scroll(function() {
        });
        ixeditTitlebar.dblclick(function() {
          ixeditUi.toggle();
          ixeditButtonPane.toggle();
          jQuery(".ui-resizable-handle", theDialog).toggle();
          var thePosition = theDialog.position();
          if (ixeditUi.is(":hidden")) {
            /** @type {boolean} */
            ixedit.commonPrefs.inspectorShaded = true;
            var theLeft = thePosition.left + (ixedit.commonPrefs.inspectorWidth - 100) * 0.5;
            theDialog.css("left", theLeft + "px");
          } else {
            /** @type {boolean} */
            ixedit.commonPrefs.inspectorShaded = false;
            /** @type {number} */
            theLeft = thePosition.left - (ixedit.commonPrefs.inspectorWidth - 100) * 0.5;
            theDialog.css("left", theLeft + "px");
          }
          theDialog.toggleClass("ixedit-dialog-shaded");
        });
        jQuery(buttons[0]).attr("id", "ixedit-button-new").text(label.mainButtonNew);
        jQuery(buttons[1]).attr("id", "ixedit-button-duplicate").text(label.mainButtonDuplicate);
        jQuery(buttons[2]).attr("id", "ixedit-button-delete").text(label.mainButtonDelete);
        jQuery(buttons[3]).attr("id", "ixedit-button-reload").text(label.mainButtonReload);
        jQuery(buttons[4]).attr("id", "ixedit-button-edit").text(label.mainButtonEdit);
        jQuery(buttons[5]).attr("id", "ixedit-button-cancel").text(label.mainButtonCancel);
        jQuery(buttons[6]).attr("id", "ixedit-button-reset").text(label.mainButtonReset);
        jQuery(buttons[7]).attr("id", "ixedit-button-doneandreload").text(label.mainButtonDoneReload);
        jQuery(buttons[8]).attr("id", "ixedit-button-done").text(label.mainButtonDone);
        buttons.mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        });
        /** @type {Array} */
        var disclosingTargets = [];
        disclosingTargets[0] = {};
        disclosingTargets[0].wrapper = jQuery("#ixedit-basic");
        disclosingTargets[0].container = jQuery("#ixedit-basicitems");
        disclosingTargets[1] = {};
        disclosingTargets[1].wrapper = jQuery("#ixedit-action");
        disclosingTargets[1].container = jQuery("#ixedit-actionitems");
        disclosingTargets[2] = {};
        disclosingTargets[2].wrapper = jQuery("#ixedit-condition");
        disclosingTargets[2].container = jQuery("#ixedit-conditionitems");
        disclosingTargets[3] = {};
        disclosingTargets[3].wrapper = jQuery("#ixedit-cmnt");
        disclosingTargets[3].container = jQuery("#ixedit-commentitems");
        jQuery("#ixedit-basictitle").click(function() {
          var theWrapper = disclosingTargets[0].wrapper;
          var theContainer = disclosingTargets[0].container;
          ixedit.areaGimmick(0, ixeditUi, theWrapper, theContainer);
        });
        var basicTitle = jQuery("#ixedit-basictitle");
        basicTitle.mousedown(function() {
          jQuery("tr", basicTitle).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery("tr", basicTitle).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery("tr", basicTitle).removeClass("ixedit-pushed");
        });
        jQuery("#ixedit-actiontitle").click(function() {
          var theWrapper = disclosingTargets[1].wrapper;
          var theContainer = disclosingTargets[1].container;
          ixedit.areaGimmick(1, ixeditUi, theWrapper, theContainer);
        });
        var actionTitle = jQuery("#ixedit-actiontitle");
        actionTitle.mousedown(function() {
          jQuery("tr", actionTitle).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery("tr", actionTitle).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery("tr", actionTitle).removeClass("ixedit-pushed");
        });
        jQuery("#ixedit-conditiontitle").click(function() {
          var theWrapper = disclosingTargets[2].wrapper;
          var theContainer = disclosingTargets[2].container;
          ixedit.areaGimmick(2, ixeditUi, theWrapper, theContainer);
        });
        var conditionTitle = jQuery("#ixedit-conditiontitle");
        conditionTitle.mousedown(function() {
          jQuery("tr", conditionTitle).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery("tr", conditionTitle).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery("tr", conditionTitle).removeClass("ixedit-pushed");
        });
        jQuery("#ixedit-commenttitle").click(function() {
          var theWrapper = disclosingTargets[3].wrapper;
          var theContainer = disclosingTargets[3].container;
          if (theWrapper.hasClass("ixedit-hidden") == false) {
            theWrapper.addClass("ixedit-hidden");
            if (ixedit.gimmickAnimation) {
              theContainer.slideUp("fast");
            } else {
              theContainer.hide();
            }
            /** @type {boolean} */
            ixedit.commonPrefs.areasShown[3] = false;
          } else {
            theWrapper.removeClass("ixedit-hidden");
            if (ixedit.gimmickAnimation) {
              theContainer.slideDown("fast", function() {
                jQuery("#ixedit-comment").focus();
              });
            } else {
              theContainer.show();
              jQuery("#ixedit-comment").focus();
            }
            ixedit.resizeCommentHeight();
            /** @type {boolean} */
            ixedit.commonPrefs.areasShown[3] = true;
          }
        });
        var commentTItle = jQuery("#ixedit-commenttitle");
        commentTItle.mousedown(function() {
          jQuery("tr", commentTItle).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery("tr", commentTItle).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery("tr", commentTItle).removeClass("ixedit-pushed");
        });
        var routeMenu = jQuery("#ixedit-routemenu");
        jQuery("#ixedit-routebtn").mousedown(function() {
          jQuery(this).addClass("ixedit-pushed");
        }).mouseup(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).mouseout(function() {
          jQuery(this).removeClass("ixedit-pushed");
        }).click(function() {
          routeMenu.toggle();
          return false;
        });
        jQuery("li", routeMenu).hover(function() {
          jQuery(this).addClass("ixedit-selected");
        }, function() {
          jQuery(this).removeClass("ixedit-selected");
        });
        jQuery("body").click(function() {
          routeMenu.hide();
        });
        jQuery("#ixedit-showAbout").click(function() {
          ixedit.showAbout();
        });
        jQuery("#ixedit-showImport").click(function() {
          ixedit.showImport();
        });
        jQuery("#ixedit-showExport").click(function() {
          ixedit.showExport();
        });
        jQuery("#ixedit-showDeploy").click(function() {
          ixedit.showDeploy();
        });
        jQuery("#ixedit-showJson").click(function() {
          ixedit.showJSON();
        });
        jQuery("#ixedit-showDb").click(function() {
          ixedit.showDB();
        });
        setAreaDisclosure(disclosingTargets);
        ixedit.showIxlist();
        ixedit.refreshListButtonStates();
        if (ixedit.ixs.length > 0) {
          ixedit.showSelectedItem();
        }
        if (ixedit.commonPrefs.inspectorShaded == true) {
          ixeditTitlebar.dblclick();
        }
      },
      /**
       * @return {undefined}
       */
      resize : function() {
        if (!jQuery("#ixedit-ui").hasClass("ixedit-input")) {
          ixedit.resizeTableWidth();
        }
        ixedit.resizeTableHeight();
        ixedit.resizeCommentHeight();
      },
      /**
       * @return {undefined}
       */
      resizeStart : function() {
      },
      /**
       * @return {undefined}
       */
      resizeStop : function() {
        if (!jQuery("#ixedit-ui").hasClass("ixedit-input")) {
          ixedit.resizeTableWidth();
        }
        var ixeditDialogMain = jQuery("#ixedit-dialog-main");
        ixedit.commonPrefs.inspectorWidth = ixeditDialogMain.width();
        ixedit.commonPrefs.inspectorHeight = ixeditDialogMain.height();
      },
      /**
       * @return {undefined}
       */
      drag : function() {
      },
      /**
       * @return {undefined}
       */
      dragStart : function() {
        var ixeditDialogMain = jQuery("#ixedit-dialog-main");
      },
      /**
       * @return {undefined}
       */
      dragStop : function() {
        ixedit.updatePositionPrefs();
      }
    });
  };
  /**
   * @return {undefined}
   */
  ixedit.updateFullData = function() {
    var dbi = ixedit.dbi;
    dbi.saveIxData();
  };
  /**
   * @return {undefined}
   */
  ixedit.updatePrefsDataAndReload = function() {
    var dbi = ixedit.dbi;
    dbi.saveIxData();
    window.location.reload();
  };
  /**
   * @return {undefined}
   */
  ixedit.updateIxDataAndReload = function() {
    var dbi = ixedit.dbi;
    dbi.saveIxData();
    window.location.reload();
  };
  /**
   * @return {undefined}
   */
  ixedit.prepareEditor = function() {
    if (!this.screenID || this.screenID == "") {
      /** @type {string} */
      var locationString = location.href;
      /** @type {number} */
      var theFirstSharpIndex = locationString.indexOf("#");
      if (theFirstSharpIndex > -1) {
        /** @type {string} */
        locationString = locationString.substring(0, theFirstSharpIndex);
      }
      /** @type {string} */
      this.screenID = locationString;
    }
    /**
     * @return {?}
     */
    window.onbeforeunload = function() {
      if (ixedit.modified) {
        return ixedit.label.unloadingCaution;
      }
    };
  };
  /**
   * @param {?} source
   * @return {undefined}
   */
  ixedit.addEmbedSource = function(source) {
    var embedSources = ixedit.embedSources;
    embedSources[embedSources.length] = source;
  };
  /**
   * @param {?} dbName
   * @return {undefined}
   */
  ixedit.localdbi.dbInit = function(dbName) {
  };
  /**
   * @param {(IDBObjectStore|IDBTransaction)} db
   * @param {?} nextFunction
   * @param {?} callbackFunction
   * @return {undefined}
   */
  ixedit.localdbi.checkCommonRecord = function(db, nextFunction, callbackFunction) {
    db.transaction(function(tx) {
      /** @type {string} */
      var sql = "CREATE TABLE IF NOT EXISTS " + ixedit.applicationName + " (" + "id integer primary key autoincrement," + "commonprefs text not null" + ")";
      tx.executeSql(sql, [], function(tx, rs) {
        /** @type {string} */
        var sql = "SELECT COUNT(*) FROM " + ixedit.applicationName + " WHERE id = ?";
        tx.executeSql(sql, [1], function(tx, rs) {
          var numberOfRecords = rs.rows.item(0)["COUNT(*)"];
          if (numberOfRecords > 0) {
            nextFunction(db, tx);
          } else {
            /** @type {string} */
            var commonPrefsData = JSON.stringify(ixedit.commonPrefs);
            /** @type {string} */
            var escapedJsonString = escape(commonPrefsData);
            /** @type {string} */
            var sql = "INSERT INTO " + ixedit.applicationName + " (commonprefs) VALUES (?)";
            tx.executeSql(sql, [escapedJsonString], function(tx, rs) {
              nextFunction(db, tx);
            });
          }
        });
      });
    }, function(error) {
      window.alert("IxEdit Error: checkCommonRecord: " + error.message);
    }, function() {
      if (callbackFunction) {
        callbackFunction();
      }
    });
  };
  /**
   * @param {(IDBObjectStore|IDBTransaction)} db
   * @param {?} tx
   * @return {undefined}
   */
  ixedit.localdbi.readDbCommonData = function(db, tx) {
    /** @type {string} */
    var sql = "SELECT " + "commonprefs" + " FROM " + ixedit.applicationName + " where id = ?";
    tx.executeSql(sql, [1], function(tx, rs) {
      var commonPrefsString = rs.rows.item(0)["commonprefs"];
      if (commonPrefsString) {
        /** @type {string} */
        commonPrefsString = unescape(commonPrefsString);
      } else {
        /** @type {string} */
        commonPrefsString = "";
      }
      ixedit.loadCommonPrefsJsonString(commonPrefsString);
      ixedit.dbi.checkPageRecord(db, ixedit.dbi.readDbIxData);
    });
  };
  /**
   * @param {(IDBObjectStore|IDBTransaction)} db
   * @param {?} nextFunction
   * @param {?} callbackFunction
   * @param {?} nextFunctionArg
   * @return {undefined}
   */
  ixedit.localdbi.checkPageRecord = function(db, nextFunction, callbackFunction, nextFunctionArg) {
    db.transaction(function(tx) {
      /** @type {string} */
      var sql = "CREATE TABLE IF NOT EXISTS " + ixedit.projectName + " (" + "id integer primary key autoincrement," + "screenid text not null," + "ixdata text not null," + "prefs text" + ")";
      tx.executeSql(sql, [], function(tx, rs) {
        /** @type {string} */
        var sql = "SELECT COUNT(*) FROM " + ixedit.projectName + " WHERE screenid = ?";
        tx.executeSql(sql, [ixedit.screenID], function(tx, rs) {
          var numberOfRecords = rs.rows.item(0)["COUNT(*)"];
          if (numberOfRecords > 0) {
            nextFunction(db, tx, nextFunctionArg);
          } else {
            /** @type {string} */
            var ixData = '{"format":"' + ixedit.format + '", "data":""}';
            /** @type {string} */
            var escapedJsonString = escape(ixData);
            /** @type {string} */
            var sql = "INSERT INTO " + ixedit.projectName + " (screenid,ixdata,prefs) VALUES (?,?,?)";
            tx.executeSql(sql, [ixedit.screenID, escapedJsonString, ""], function(tx, rs) {
              nextFunction(db, tx, nextFunctionArg);
            });
          }
        });
      });
    }, function(error) {
      window.alert("IxEdit Error: Loading data failed. \ncheckPageRecord: " + error.message);
    }, function() {
      if (callbackFunction) {
        callbackFunction();
      }
    });
  };
  /**
   * @param {?} db
   * @param {?} tx
   * @return {undefined}
   */
  ixedit.localdbi.sqlUpdateIx = function(db, tx) {
    var jsonString = ixedit.encodeIxsJSON(ixedit.ixs);
    /** @type {string} */
    var escapedJsonString = escape(jsonString);
    /** @type {string} */
    var prefsString = JSON.stringify(ixedit.prefs);
    /** @type {string} */
    var escapedPrefsString = escape(prefsString);
    /** @type {string} */
    var ixSql = "UPDATE " + ixedit.projectName + " SET ixdata = ?, prefs = ? where screenid = ?";
    tx.executeSql(ixSql, [escapedJsonString, escapedPrefsString, ixedit.screenID], function(tx, rs) {
      /** @type {boolean} */
      ixedit.modified = false;
    });
  };
  /**
   * @param {?} db
   * @param {?} tx
   * @return {undefined}
   */
  ixedit.localdbi.sqlUpdateIxPrefs = function(db, tx) {
    /** @type {string} */
    var prefsString = JSON.stringify(ixedit.prefs);
    /** @type {string} */
    var escapedPrefsString = escape(prefsString);
    /** @type {string} */
    var ixSql = "UPDATE " + ixedit.projectName + " SET prefs = ? where screenid = ?";
    tx.executeSql(ixSql, [escapedPrefsString, ixedit.screenID], function(tx, rs) {
    });
  };
  /**
   * @param {?} db
   * @param {?} tx
   * @return {undefined}
   */
  ixedit.localdbi.sqlUpdateCommonPrefs = function(db, tx) {
    /** @type {string} */
    var commonPrefsString = JSON.stringify(ixedit.commonPrefs);
    /** @type {string} */
    var escapedCommonPrefsString = escape(commonPrefsString);
    /** @type {string} */
    var commonSql = "UPDATE " + ixedit.applicationName + " SET commonprefs = ? where id = ?";
    tx.executeSql(commonSql, [escapedCommonPrefsString, 1], function(tx, rs) {
    });
  };
  /**
   * @return {?}
   */
  ixedit.localdbi.saveIxData = function() {
    var jsonString = ixedit.encodeIxsJSON(ixedit.ixs);
    try {
      localStorage.setItem("ixedit-cache", jsonString);
    } catch (a) {
      return false;
    }
  };
  /**
   * @return {undefined}
   */
  ixedit.initialize = function() {
    this.preBufferOriginal();
    this.preAssignSelectOptions();
    this.preAssignCmds();
    this.preAssignCondCmds();
    this.preGenerateEvtList();
    this.preGenerateCmdList();
    this.preGenerateCondCmdList();
    this.prepareEditor();
  };
  /**
   * @return {undefined}
   */
  Array.prototype.ixeditSortByNumber = function() {
    this.sort(function(a, b) {
      return parseInt(a) > parseInt(b) ? 1 : -1;
    });
  };
  jQuery(function() {
    if (!ixedit.deployed) {
      ixedit.initialize();
      ixedit.makeDialogBase();
      ixedit.generateDialogMain();
    }
    if (localStorage.getItem("ixedit-cache") != null) {
      ixedit.importData(localStorage.getItem("ixedit-cache"));
    }
  });
}
