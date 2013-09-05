/***
 * Adobe JSFL binding for JSX (EXPERIMENTAL)
 *
 * @see http://help.adobe.com/en_US/flash/cs/extend/flash_cs5_extending.pdf
 */
/*
 * Copyright (c) 2012-2013 Ysohiki Shibukawa.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import "js.jsx";

final native class Matrix
{
    var a : number;
    var b : number;
    var c : number;
    var d : number;
    var tx : number;
    var ty : number;
}

final __fake__ class _Math
{
    function concatMatrix (mat1 : Matrix, mat2 : Matrix) : Matrix;
    function invertMatrix (mat : Matrix) : Matrix;
    function pointDistance (pt1 : Point, pt2 : Point) : number;
    delete function constructor() {}
}

class RectangleObject
{
    var left : number;
    var top : number;
    var right : number;
    var bottom : number;
    function constructor (left : number, top : number, right : number, bottom : number)
    {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
}

class Point
{
    var x : number;
    var y : number;
    function constructor (x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }
}

class Point3D
{
    var x : number;
    var y : number;
    var z : number;
    function constructor (x : number, y : number, z : number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

final native class _genericObject
{
    // todo
    delete function constructor() {}
}

final native class fl
{
    __readonly__ var actionsPanel : _actionsPanel;
    static var as3PackagePaths : string;
    __readonly__ var compilerErrors : _compilerErrors;
    __readonly__ var componentsPanel : _componentsPanel;
    __readonly__ var configDirectory : string;
    __readonly__ var configURI : string;
    static var contactSensitiveSelection : boolean;
    __readonly__ var createNewDocList : string[];
    __readonly__ var createNewTemplateList : string[];
    __readonly__ var documents : Document[];
    __readonly__ var drawingLayer : _drawingLayer;
    static const externalLibraryPath : string;
    static var flexSDKPath : string;
    static var languageCode : string;
    static var libraryPath : string;
    __readonly__ var Math : _Math;
    __readonly__ var mruRecentFileList : string[];
    __readonly__ var mruRecentFileListType : string[];
    static var objectDrawingMode : boolean;
    __readonly__ var outputPanel : _outputPanel;
    static var packagePaths : string;
    __readonly__ var presetPanel : _presetPanel;
    static var publishCacheDiskSizeMax : int;
    static var publishCacheEnabled : boolean;
    static var publishCacheMemoryEntrySizeLimit : int;
    static var publishCacheMemorySizeMax : int;
    static const scriptURI : string;
    static var sourcePath : string;
    __readonly__ var swfPanels : _SWFPanel[];
    __readonly__ var tools : _Tools[];
    __readonly__ var version : string;
    __readonly__ var xmlui : _XMLUI;

    static function addEventListener (eventType : string, callback : ()->void) : void;
    static function browseForFileURL (browseType : string) : string;
    static function browseForFileURL (browseType : string, title : string) : string;
    static function browseForFolderURL () : string;
    static function browseForFolderURL (description : string) : string;
    static function clearPublishCache () : void;
    static function clipCopyString (str : string) : void;
    static function closeAll () : void;
    static function closeAll (bPromptToSave : boolean) : void;
    static function closeAllPlayerDocuments () : void;
    static function closeDocument (documentObject : Document) : void;
    static function closeDocument (documentObject : Document, bPromptToSaveChange : boolean) : void;
    static function createDocument () : Document;
    static function createDocument (docType : string) : Document;
    static function exportPublishProfileString (ucfURI : string) : string;
    static function exportPublishProfileString (ucfURI : string, profileName : string) : string;
    static function fileExists (fileURI : string) : boolean;
    static function findDocumentDOM (id : int) : Nullable.<Document>;
    static function findDocumentIndex (name : string) : int[];
    static function findObjectInDocByName (instanceName : string, document : Document) : _genericObject[];
    static function findObjectInDocByType (elementType : string, document : Document) : _genericObject[];
    static function getAppMemoryInfo (memType : int) : int;
    static function getDocumentDOM () : Nullable.<Document>;
    static function getSwfPanel (panelName : string) : _SWFPanel;
    static function getSwfPanel (panelName : string, useLocalizedPanelName : boolean) : _SWFPanel;
    static function installedPlayers () : _genericObject[];
    static function isFontInstalled (fontName : string) : boolean;
    static function mapPlayerURL (URI : string) : string;
    static function mapPlayerURL (URI : string, returnMBCS : boolean) : string;
    static function openDocument (fileURI : string) : Document;
    static function openScript (fileURI : string) : void;
    static function openScript (fileURI : string, createExtionsion : string) : void;
    static function openScript (fileURI : string, createExtionsion : string, className : string) : void;
    static function publishDocument (fileURI : string) : boolean;
    static function publishDocument (fileURI : string, publishProfile : string) : boolean;
    static function quit () : void;
    static function quit (bPromptIfNeeded : boolean) : void;
    static function reloadEffects () : void;
    static function reloadTools () : void;
    static function removeEventListener (eventType : string) : boolean;
    static function resetAS3PackagePaths () : void;
    static function resetPackagePaths () : void;
    static function revertDocument (documentObject : Document) : boolean;
    static function runScript (fileURI : string) : void;
    static function runScript (fileURI : string, funcName : string) : string;
    static function runScript (fileURI : string, funcName : string, ...value : variant) : string;
    static function saveAll () : void;
    static function saveDocument (document : Document) : boolean;
    static function saveDocument (document : Document, fileURI : string) : boolean;
    static function saveDocumentAs (document : Document) : boolean;
    static function selectElement (elementObject : Element, editMode : boolean) : boolean;
    static function selectTool (toolName : string) : boolean;
    static function setActiveWindow (document : Document) : void;
    static function showIdleMessage (show : boolean) : void;
    static function toggleBreakpoint (fileURI : string, line : int, enable : boolean) : void;
    static function trace (message : string) : void;
    static function trace (message : number) : void;

    static function alert (message : string) : void {
        (js.global["alert"] as __noconvert__ function(:string) : void)(message);
    }
    static function confirm (message : string) : boolean {
        return (js.global["confirm"] as __noconvert__ function(:string) : boolean)(message);
    }
    static function prompt (promptMsg : string) : string {
        return (js.global["prompt"] as __noconvert__ function(:string) : string)(promptMsg);
    }
    static function prompt (promptMsg : string, text : string) : string {
        return (js.global["prompt"] as __noconvert__ function(:string, :string) : string)(promptMsg, text);
    }

    delete function constructor () {}
}

native __fake__ class _compilerErrors
{
    function clear() : void;
    function save(fileURI : string) : boolean;
    function save(fileURI : string, bAppendToFile : boolean) : boolean;
    function save(fileURI : string, bAppendToFile : boolean, bUseSystemEncoding : boolean) : boolean;

    delete function constructor () {}
}

native __fake__ class _actionsPanel
{
    function getClassForObject(ASvariableName : string) : string;
    function getScriptAssistMode() : boolean;
    function getSelectedText() : string;
    function getText() : string;
    function hasSelection() : boolean;
    function replaceSelectedText(replacementText : string) : boolean;
    function setScriptAssistMode(bScriptAssist : boolean) : boolean;
    function setSelection(startIndex : int, numberOfChars : int) : boolean;
    function setText(replacementText : string) : boolean;

    delete function constructor () {}
}

native __fake__ class _componentsPanel
{
    function addItemToDocument(position : Point, categoryName : string, componentName : string) : void;
    function reload() : boolean;

    delete function constructor () {}
}

native __fake__ class _drawingLayer
{
    function beginDraw() : void;
    function beginDraw(persistentDraw : boolean) : void;
    function beginFrame() : void;
    function cubicCurveTo(x1Ctrl : number, y1Ctrl : number, x2Ctl : number, y2Ctl : number, xEnd : number, yEnd : number) : void;
    function curveTo(xCtl : number, yCtl : number, xEnd : number, yEnd : number) : void;
    function drawPath(path : Path) : void;
    function endDraw() : void;
    function endFrame() : void;
    function lineTo(x : number, y : number) : void;
    function moveTo(x : number, y : number) : void;
    function newPath() : Path;
    function setColor(color : string) : void;
    function setColor(color : number) : void;

    delete function constructor () {}
}

native __fake__ class _outputPanel
{
    function clear() : void;
    function save(fileURI : string) : boolean;
    function save(fileURI : string, bAppendToFile : boolean) : boolean;
    function save(fileURI : string, bAppendToFile : boolean, bUseSystemEncoding : boolean) : boolean;
    function trace(message : string) : void;

    delete function constructor () {}
}

native __fake__ class _presetPanel
{
    var items : _presetItem[];

    function addNewItem() : boolean;
    function addNewItem(namePath : string) : boolean;
    function applyPreset() : boolean;
    function applyPreset(presetPath : string) : boolean;
    function deleteFolder() : boolean;
    function deleteFolder(namePath : string) : boolean;
    function expandFolder() : boolean;
    function expandFolder(bExpand : boolean) : boolean;
    function expandFolder(bExpand : boolean, bRecurse : boolean) : boolean;
    function expandFolder(bExpand : boolean, bRecurse : boolean, folderPath : string) : boolean;
    function exportItem(fileURI : string) : boolean;
    function exportItem(fileURI : string, namePath : string) : boolean;
    function findItemIndex() : int;
    function findItemIndex(presetName : string) : int;
    function getSelectedItems() : _presetItem[];
    function importItem(fileURI : string) : boolean;
    function importItem(fileURI : string, namePath : string) : boolean;

    delete function constructor () {}
}

native __fake__ class _SWFPanel
{
    __readonly__ var name : string;
    __readonly__ var path : string;

    function call(...request : variant) : Nullable.<string>;
    function setFocus() : void;

    delete function constructor () {}
}

native __fake__ class _Tools
{
    __readonly__ var activeTool : ToolObj;
    __readonly__ var altIsDown : boolean;
    __readonly__ var ctlIsDown : boolean;
    __readonly__ var mouseIsDown : boolean;
    __readonly__ var penDownLoc : Point;
    __readonly__ var penLoc : Point;
    __readonly__ var shiftIsDown : boolean;
    __readonly__ var toolObjs : ToolObj[];

    function constrainPoint(pt1 : Point, pt2 : Point) : Point;
    function getKeyDown() : int;
    function setCreatingBbox(placeholder : int) : void;
    function setCursor(cursor : int) : void;
    function snapPoint(pt : Point) : Point;

    delete function constructor () {}
}

native __fake__ class _XMLUI
{
    function accept() : void;
    function cancel() : void;
    function get(controlPropertyName : string) : string;
    function getControlItemElement(controlPropertyName : string) : variant;
    function getEnabled(controlID : string) : boolean;
    function getVisible(controlID : string) : boolean;
    function set(controlPropertyName : string, value : string) : void;
    function setControlItemElement(controlPropertyName : string, elementItem : variant) : void;
    function setControlItemElements(controlID : string, elementItemArray : variant[]) : void;
    function setEnabled(controlID : string, enable : boolean) : void;
    function setVisible(controlID : string, enable : boolean) : void;

    delete function constructor () {}
}

native __fake__ class Path
{
    __readonly__ var nPts : int;
    function addCubicCurve(xAnchor : number, yAnchor : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number) : void;
    function addCurve(xAnchor : number, yAnchor : number, x2 : number, y2 : number, x3 : number, y3 : number) : void;
    function addPoint(x : number, y : number) : void;
    function clear() : void;
    function close() : void;
    function makeShape() : void;
    function makeShape(bSuppressFill : boolean) : void;
    function makeShape(bSuppressFill : boolean, bSupressStroke : boolean) : void;
    function newContour() : void;

    delete function constructor () {}
}

native __fake__ class _presetItem
{
    __readonly__ var isDefault : boolean;
    __readonly__ var isFolder : boolean;
    __readonly__ var level : int;
    __readonly__ var name : string;
    __readonly__ var open : boolean;
    __readonly__ var path : string;

    delete function constructor () {}
}

native __fake__ class ToolObj
{
    var depth : int;
    var iconID : int;
    __readonly__ var position : int;

    function enablePIControl(control : string, bEnable : boolean) : void;
    function setIcon(file : string) : void;
    function setMenuString(menuStr : string) : void;
    function setOptionsFile(xmlFile : string) : void;
    function setPI(pi : string) : void;
    function setToolName(name : string) : string;
    function setToolTip(toolTip : string) : void;
    function showPIControl(control : string, bShow : boolean) : void;
    function showTransformHandles(bShow : boolean) : void;

    delete function constructor () {}
}


final native class FLfile
{
    static function copy (fileURI : string, copyURI : string) : boolean;
    static function createFolder (folderURI : string) : boolean;
    static function exists (fileURI : string) : boolean;
    static function getAttributes(fileOrFolderURI : string) : string;
    static function getCreationDate(fileOrFolderURI : string) : boolean;
    static function getCreationDateObj(fileOrFolderURI : string) : Date;
    static function getModificationDate(fileOrFolderURI : string) : boolean;
    static function getModificationDateObj(fileOrFolderURI : string) : Date;
    static function getSize(fileURI : string) : int;
    static function listFolder(folderURI : string) : string[];
    static function listFolder(folderURI : string, filesOrDirectories : string) : string[];
    static function platformPathToURI(fileName : string) : string;
    static function read(fileOrFolderURI : string) : Nullable.<string>;
    static function remove(fileOrFolderURI : string) : boolean;
    static function setAttributes(fileURI : string, setAttrs : string) : boolean;
    static function uriToPlatformPath(fileURI : string) : string;
    static function write(fileURI : string, textToWrite : string) : boolean;
    static function write(fileURI : string, textToWrite : string, strAppendMode : string) : boolean;

    delete function constructor () {}
}

native __fake__ class Document
{
    var accName : string;
    var as3AutoDeclare : boolean;
    var as3Dialect : string;
    var as3ExportFrame : int;
    var as3StrictMode : boolean;
    var as3WarningsMode : boolean;
    var asVersion : int;
    var autoLabel : boolean;
    var backgroundColor : string;
    var currentPublishProfile : string;
    var currentTimeline : int;
    var description : string;
    var docClass : string;
    var externalLibraryPath : string;
    var forceSimple : boolean;
    var frameRate : number;
    var height : int;
    var id : int;
    __readonly__ var library : Library;
    var libraryPath : string;
    var livePreview : boolean;
    __readonly__ var name : string;
    __readonly__ var path : string;
    __readonly__ var pathURI : string;
    __readonly__ var publishProfiles : string[];
    __readonly__ var screenOutline : variant;
    var selection : Nullable.<variant[]>;
    var silent : boolean;
    var sourcePath : string;
    __readonly__ var timelines : Timeline[];
    __readonly__ var viewMatrix : Matrix;
    var width : int;
    var zoomFactor : int;

    function addDataToDocument (name : string, type : string, data : variant) : void;
    function addDataToSelection (name : string, type : string, data : variant) : void;
    function addFilter (filterName : string) : void;
    function addItem (position : Point, item : Item) : boolean;
    function addNewLine (startPoint : Point, endPoint : Point) : void;
    function addNewOval (boundingRectangle : RectangleObject) : void;
    function addNewOval (boundingRectangle : RectangleObject, bSuppressFill : boolean) : void;
    function addNewOval (boundingRectangle : RectangleObject, bSuppressFill : boolean, bSuppressStroke : boolean) : void;
    function addNewPrimitiveOval (boundingRectangle : RectangleObject) : void;
    function addNewPrimitiveOval (boundingRectangle : RectangleObject, bSuppressFill : boolean) : void;
    function addNewPrimitiveOval (boundingRectangle : RectangleObject, bSuppressFill : boolean, bSuppressStroke : boolean) : void;
    function addNewPrimitiveRectangle (boundingRectangle : RectangleObject, roundness : int) : void;
    function addNewPrimitiveRectangle (boundingRectangle : RectangleObject, roundness : int, bSuppressFill : boolean) : void;
    function addNewPrimitiveRectangle (boundingRectangle : RectangleObject, roundness : int, bSuppressFill : boolean, bSuppressStroke : boolean) : void;
    function addNewPublishProfile () : int;
    function addNewPublishProfile (profileName : string) : int;
    function addNewRectangle (boundingRectangle : RectangleObject, roundness : int) : void;
    function addNewRectangle (boundingRectangle : RectangleObject, roundness : int, bSuppressFill : boolean) : void;
    function addNewRectangle (boundingRectangle : RectangleObject, roundness : int, bSuppressFill : boolean, bSuppressStroke : boolean) : void;
    function addNewScene () : boolean;
    function addNewScene (name : string) : boolean;
    function addNewText (boundingRectangle : RectangleObject) : void;
    function addNewText (boundingRectangle : RectangleObject, text : string) : void;
    function align (alignmode : string) : void;
    function align (alignmode : string, bUseDocumentBounds : boolean) : void;
    function allowScreens () : boolean;
    function arrange (arrangeMode : string) : void;
    function breakApart () : void;
    function canEditSymbol () : boolean;
    function canRevert () : boolean;
    function canTestMovie () : boolean;
    function canTestScene () : boolean;
    function changeFilterOrder (oldIndex : int, newIndex : int) : void;
    function clipCopy () : void;
    function clipCut () : void;
    function clipPaste () : void;
    function clipPaste (bInPlace : boolean) : void;
    function close () : void;
    function close (bPromptToSaveChanges : boolean) : void;
    function convertLinesToFills () : void;
    function convertToSymbol (type : string, name : string, registrationPoint : string) : Nullable.<Item>;
    function crop () : boolean;
    function debugMovie () : void;
    function debugMovie (abortIfErrorsExist : boolean) : void;
    function deleteEnvelope () : boolean;
    function deletePublishProfile () : int;
    function deleteScene () : boolean;
    function deleteSelection () : void;
    function disableAllFilters () : void;
    function disableFilter (filterIndex : int) : void;
    function disableOtherFilters (enabledFilterIndex : int) : void;
    function distribute (distributemode : string) : void;
    function distribute (distributemode : string, bUseDocumentBounds : boolean) : void;
    function distributeToLayers () : void;
    function documentHasData (name : string) : boolean;
    function duplicatePublishProfile () : int;
    function duplicatePublishProfile (profileName : string) : int;
    function duplicateScene () : boolean;
    function duplicateSelection () : void;
    function editScene (index : int) : void;
    function enableAllFilters () : void;
    function enableFilters (filterIndex : int) : void;
    function enterEditMode() : void;
    function enterEditMode(editMode : string) : void;
    function exitEditMode() : void;
    function exportPNG () : boolean;
    function exportPNG (fileURI : string) : boolean;
    function exportPNG (fileURI : string, bCurrentPNGSettings : boolean) : boolean;
    function exportPNG (fileURI : string, bCurrentPNGSettings : boolean, bCurrentFrame : boolean) : boolean;
    function exportPublishProfile (fileURI : string) : void;
    function exportPublishProfileString () : string;
    function exportPublishProfileString (profileName : string) : string;
    function exportSWF () : boolean;
    function exportSWF (fileURI : string) : boolean;
    function exportSWF (fileURI : string, bCurrentPNGSettings : boolean) : boolean;
    function getAlignToDocument () : boolean;
    function getBlendMode () : string;
    function getCustomFill () : Fill;
    function getMetadata () : string;
    function getMobileSettings () : string;
    function getPlayerVersion () : string;
    function getSelectionRect () : RectangleObject;
    function getTextString () : string;
    function getTextString (startIndex : int) : string;
    function getTextString (startIndex : int, endIndex : int) : string;
    function getTimeline () : Timeline;
    function getTransformationPoint () : Point;
    function group () : void;
    function importFile (fileURI : string) : void;
    function importFile (fileURI : string, importToLibrary : boolean) : void;
    function importPublishProfile (fileURI : string) : int;
    function importPublishProfileString (xmlString : string) : boolean;
    function importSWF (fileURI : string) : void;
    function intersect () : boolean;
    function loadCuepointXML (fileURI : string) : string;
    function match (bWidth : boolean, bHeight : boolean) : void;
    function match (bWidth : boolean, bHeight : boolean, bUseDocumentBounds : boolean) : void;
    function mouseClick (position : Point, bToggleSel : boolean, bShiftSel : boolean) : void;
    function mouseDblClk (position : Point, bAltDown : boolean, bShiftDown : boolean, bShiftSelect : boolean) : void;
    function moveSelectedBezierPointsBy (delta : Point) : void;
    function moveSelectionBy (distanceToMove : Point) : void;
    function optimizeCurves (smoothing : int, bUseMultiplePasses : boolean) : void;
    function publish () : void;
    function punch () : boolean;
    function removeAllFilters () : void;
    function removeDataFromDocument (name : string) : void;
    function removeDataFromSelection (name : string) : void;
    function removeFilter (filterIndex : int) : void;
    function renamePublishProfile () : boolean;
    function renamePublishProfile (profileNewName : string) : boolean;
    function renameScene (name : string) : boolean;
    function reorderScene (sceneToMove : int, sceneToPutItBefore : int) : void;
    function resetOvalObject () : void;
    function resetRectangleObject () : void;
    function resetTransformation () : void;
    function revert () : void;
    function rotate3DSelection (xyzCoordinate : Point3D, bGlobalTransform : boolean) : void;
    function rotateSelection (angle : number) : void;
    function rotateSelection (angle : number, rotationPoint : string) : void;
    function save () : boolean;
    function save (bOkToSaveAs : boolean) : boolean;
    function saveAndCompact () : boolean;
    function saveAndCompact (bOkToSaveAs : boolean) : boolean;
    function scaleSelection (xScale : number, yScale : number) : void;
    function scaleSelection (xScale : number, yScale : number, whichCorner : string) : void;
    function selectAll () : void;
    function selectNone () : void;
    function setAlignToDocument (bToStage : boolean) : void;
    function setBlendMode (mode : string) : void;
    function setCustomFill (fill : Fill) : void;
    function setCustomStroke (stroke : Stroke) : void;
    function setElementProperty (property : string, value : int) : void;
    function setElementTextAttr (attrName : string, attrValue : int) : boolean;
    function setElementTextAttr (attrName : string, attrValue : string) : boolean;
    function setElementTextAttr (attrName : string, attrValue : int, startIndex : int) : boolean;
    function setElementTextAttr (attrName : string, attrValue : string, startIndex : int) : boolean;
    function setElementTextAttr (attrName : string, attrValue : int, startIndex : int, endIndex : int) : boolean;
    function setElementTextAttr (attrName : string, attrValue : string, startIndex : int, endIndex : int) : boolean;
    function setFillColor (color : string) : void;
    function setFillColor (color : Nullable.<int>) : void;
    function setFilterProperty (property : string, filterIndex : int, value : int) : void;
    function setFilterProperty (property : string, filterIndex : int, value : string) : void;
    function setFilters (filters : Filter[]) : void;
    function setInstanceAlpha (opacity : int) : void;
    function setInstanceBrightness (brightness : int) : void;
    function setInstanceTint (color : int, strength : int) : void;
    function setInstanceTint (color : string, strength : int) : void;
    function setMetadata (strMetadata : string) : boolean;
    function setMobileSettings (xmlString : string) : boolean;
    function setOvalObjectProperty (propertyName : string, value : number) : void;
    function setOvalObjectProperty (propertyName : string, value : boolean) : void;
    function setPlayerVersion (version : string) : boolean;
    function setRectangleObjectProperty (propertyName : string, value : number) : void;
    function setRectangleObjectProperty (propertyName : string, value : boolean) : void;
    function setSelectionBounds (boundingRectangle : RectangleObject) : void;
    function setSelectionBounds (boundingRectangle : RectangleObject, bContactSensitveSelection : boolean) : void;
    function setSelectionRect (rect : RectangleObject) : void;
    function setSelectionRect (rect : RectangleObject, bReplaceCurrentSelection : boolean) : void;
    function setSelectionRect (rect : RectangleObject, bReplaceCurrentSelection : boolean, bContactSensitveSelection : boolean) : void;
    function setStageVanishingPoint (point : Point) : void;
    function setStageViewAngle (angle : number) : void;
    function setStroke (color : string, size : number, strokeType : string) : void;
    function setStroke (color : int, size : number, strokeType : string) : void;
    function setStrokeColor (color : string) : void;
    function setStrokeColor (color : int) : void;
    function setStrokeSize (size : number) : void;
    function setStrokeStyle (strokeType : string) : void;
    function setTextRectangle (boundingRectangle : RectangleObject) : boolean;
    function setTextSelection (startIndex : int, endIndex : int) : boolean;
    function setTextString (text : string) : boolean;
    function setTextString (text : string, startIndex : int) : boolean;
    function setTextString (text : string, startIndex : int, endIndex : int) : boolean;
    function setTransformationPoint (transformationPoint : Point) : void;
    function skewSelection (xSkew : number, ySkew : number) : void;
    function skewSelection (xSkew : number, ySkew : number, whichEdge : string) : void;
    function smoothSelection () : void;
    function space (direction : string) : void;
    function space (direction : string, bUseDocumentBounds : boolean) : void;
    function straightenSelection () : void;
    function swapElement (name : string) : void;
    function swapStrokeAndFill () : void;
    function testMovie () : void;
    function testMovie (abortIfErrorsExist : boolean) : void;
    function testScene () : void;
    function traceBitmap (threshold : int, minimumArea : int, curveFit : string, cornerThreshold : string) : void;
    function translate3DCenter (xyzCoordinate : Point3D) : void;
    function translate3DSelection (xyzCoordinate : Point3D, bGlobalTransform : boolean) : void;
    function transformSelection (a : number, b : number, c : number, d : number) : void;
    function unGroup () : void;
    function union () : void;
    function unlockAllElements () : void;
    function xmlPanel (fileURI : string) : variant;

    delete function constructor () {}
}

native __fake__ class Fill
{
    var bitmapIsClipped : boolean;
    var bitmapPath : string;
    var color : string;
    var colorArray : string[];
    var focalPoint : int;
    var linearRGB : boolean;
    var matrix : Matrix;
    var overflow : string;
    var posArray : int[];
    var style : string;

    delete function constructor () {}
}

native __fake__ class Stroke
{
    var breakAtCorners : boolean;
    var capType : string;
    var color : string;
    var curve : string;
    var dash1 : int;
    var dash2 : int;
    var density : string;
    var dotSize : string;
    var dotSpace : int;
    var hatchThickness : string;
    var jiggle : string;
    var joinType : string;
    var length : string;
    var miterLimit : number;
    var pattern : string;
    var rotate : string;
    var scaleType : string;
    var shapeFill : Fill;
    var space : string;
    var strokeHinting : boolean;
    var style : string;
    var thickness : int;
    var variation : string;
    var waveHeight : string;
    var waveLength : string;

    delete function constructor () {}
}

native __fake__ class Filter
{
    var angle : number;
    var blurX : number;
    var blurY : number;
    var brightness : number;
    var color : string;
    var contrast : number;
    var distance : number;
    var enabled : boolean;
    var hideObject : boolean;
    var highlightColor : string;
    var hue : number;
    var inner : boolean;
    var knockout : boolean;
    __readonly__ var name : string;
    var quality : string;
    var saturation : number;
    var shadowColor : string;
    var strength : int;
    var type : string;

    delete function constructor () {}
}

native __fake__ class Timeline
{
    var currentFrame : int;
    var currentLayer : int;
    __readonly__ var frameCount : int;
    __readonly__ var layerCount : int;
    __readonly__ var layers : Layer[];
    __readonly__ var libraryItem : Nullable.<Item>;
    var name : string;

    function addMotionGuide () : int;
    function addNewLayer () : int;
    function addNewLayer (name : string) : int;
    function addNewLayer (name : string, layerType : string) : int;
    function addNewLayer (name : string, layerType : string, bAddAbove : boolean) : int;
    function clearFrames () : void;
    function clearFrames (startFrameIndex : int) : void;
    function clearFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function clearKeyframes () : void;
    function clearKeyframes (startFrameIndex : int) : void;
    function clearKeyframes (startFrameIndex : int, endFrameIndex : int) : void;
    function convertToBlankKeyframes () : void;
    function convertToBlankKeyframes (startFrameIndex : int) : void;
    function convertToBlankKeyframes (startFrameIndex : int, endFrameIndex : int) : void;
    function convertToKeyframes () : void;
    function convertToKeyframes (startFrameIndex : int) : void;
    function convertToKeyframes (startFrameIndex : int, endFrameIndex : int) : void;
    function copyFrames () : void;
    function copyFrames (startFrameIndex : int) : void;
    function copyFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function copyLayers () : void;
    function copyLayers (startLayerIndex : int) : void;
    function copyLayers (startLayerIndex : int, endLayerIndex : int) : void;
    function copyMotion () : void;
    function copyMotionAsAS3 () : void;
    function createMotionObject () : void;
    function createMotionObject (startFrameIndex : int) : void;
    function createMotionObject (startFrameIndex : int, endFrameIndex : int) : void;
    function createMotionTween () : void;
    function createMotionTween (startFrameIndex : int) : void;
    function createMotionTween (startFrameIndex : int, endFrameIndex : int) : void;
    function cutFrames () : void;
    function cutFrames (startFrameIndex : int) : void;
    function cutFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function cutLayers () : void;
    function cutLayers (startLayerIndex : int) : void;
    function cutLayers (startLayerIndex : int, endLayerIndex : int) : void;
    function deleteLayer () : void;
    function deleteLayer (index : int) : void;
    function duplicateLayers () : void;
    function duplicateLayers (startLayerIndex : int) : void;
    function duplicateLayers (startLayerIndex : int, endLayerIndex : int) : void;
    function expandFolder (bExpand : boolean) : void;
    function expandFolder (bExpand : boolean, bRecurseNestedParents : boolean) : void;
    function expandFolder (bExpand : boolean, bRecurseNestedParents : boolean, index : int) : void;
    function findLayerIndex (name : string) : int;
    function getFrameProperty (property : string) : Nullable.<int>;
    function getFrameProperty (property : string, startFrameIndex : int) : Nullable.<int>;
    function getFrameProperty (property : string, startFrameIndex : int, endFrameIndex : int) : Nullable.<int>;
    function getGuidelines () : string;
    function getLayerProperty (property : string) : Nullable.<int>;
    function getSelectedFrames () : int[];
    function getSelectedLayers () : int[];
    function insertBlankKeyframe () : void;
    function insertBlankKeyframe (frameNumIndex : int) : void;
    function insertFrames () : void;
    function insertFrames (numFrames : int) : void;
    function insertFrames (numFrames : int, bAllLayers : boolean) : void;
    function insertFrames (numFrames : int, bAllLayers : boolean, frameNumIndex : int) : void;
    function insertKeyframe () : void;
    function insertKeyframe (frameNumIndex : int) : void;
    function pasteFrames () : void;
    function pasteFrames (startFrameIndex : int) : void;
    function pasteFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function pasteLayers () : void;
    function pasteLayers (layerIndex : int) : void;
    function pasteMotion () : void;
    function removeFrames () : void;
    function removeFrames (startFrameIndex : int) : void;
    function removeFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function removeMotionObject () : void;
    function removeMotionObject (startFrameIndex : int) : void;
    function removeMotionObject (startFrameIndex : int, endFrameIndex : int) : void;
    function reorderLayer (layerToMove : int, layerToPutItBy : int) : void;
    function reorderLayer (layerToMove : int, layerToPutItBy : int, bAddBefore : boolean) : void;
    function reverseFrames () : void;
    function reverseFrames (startFrameIndex : int) : void;
    function reverseFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function selectAllFrames () : void;
    function setFrameProperty (property : string, value : variant) : void;
    function setFrameProperty (property : string, value : variant, startFrameIndex : int) : void;
    function setFrameProperty (property : string, value : variant, startFrameIndex : int, endFrameIndex : int) : void;
    function setGuidelines (xmlString : string) : boolean;
    function setLayerProperty (property : string, value : variant) : void;
    function setLayerProperty (property : string, value : variant, layerToChange : string) : void;
    function setSelectedFrames (startFrameIndex : int, endFrameIndex : int) : void;
    function setSelectedFrames (startFrameIndex : int, endFrameIndex : int, bReplaceCurrentSelection : boolean) : void;
    function setSelectedFrames (selectionList : int[]) : void;
    function setSelectedFrames (selectionList : int[], bReplaceCurrentSelection : boolean) : void;
    function setSelectedLayers (index : int) : void;
    function setSelectedLayers (index : int, bReplaceCurrentSelection : boolean) : void;
    function showLayerMasking () : void;
    function showLayerMasking (layer : int) : void;
    function startPlayback () : void;

    delete function constructor () {}
}

native __fake__ class Layer
{
    var color : string;
    __readonly__ var frameCount : int;
    __readonly__ var frames : Frame[];
    var height : int;
    var layerType : string;
    var locked : boolean;
    var name : string;
    var outline : boolean;
    var parentLayer : Layer;
    var visible : boolean;

    delete function constructor () {}
}


native __fake__ class Frame
{
    var actionScript : string;
    __readonly__ var duration : int;
    __readonly__ var elements : Element[];
    var hasCustomEase : boolean;
    var labelType : string;
    var motionTweenOrientToPath : boolean;
    var motionTweenRotate : string;
    var motionTweenRotateTimes : int;
    var motionTweenScale : boolean;
    var motionTweenSnap : boolean;
    var motionTweenSync : boolean;
    var name : string;
    var shapeTweenBlend : string;
    var soundEffect : string;
    var soundLibraryItem : SoundItem;
    var soundLoop : int;
    var soundLoopMode : string;
    var soundName : string;
    var soundSync : string;
    __readonly__ var startFrame : int;
    var tweenEasing : int;
    var tweenInstanceName : string;
    var tweenType : string;
    var useSingleEaseCurve : boolean;

    function convertMotionObjectTo2D () : void;
    function convertMotionObjectTo3D () : void;
    function getCustomEase () : Point[];
    function getCustomEase (property : string) : Point[];
    function getMotionObjectXML () : string;
    function hasMotionPath () : boolean;
    function is3DMotionObject () : boolean;
    function isMotionObject () : boolean;
    function selectMotionPath (select : boolean) : void;
    function setCustomEase (property : string, easeCurve : Point[]) : void;
    function setMotionObjectDuration (duration : int) : void;
    function setMotionObjectDuration (duration : int, stretchExistingKeyframes : boolean) : void;
    function setMotionObjectXML (xmlstr : string) : void;
    function setMotionObjectXML (xmlstr : string, endAtCurrentLocation : boolean) : void;

    delete function constructor () {}
}


native __fake__ class Library
{
    var items : Item[];

    function addItemToDocument (position : Point) : boolean;
    function addItemToDocument (position : Point, namePath : string) : boolean;
    function addNewItem (type : string) : boolean;
    function addNewItem (type : string, namePath : string) : boolean;
    function deleteItem () : boolean;
    function deleteItem (namePath : string) : boolean;
    function duplicateItem () : boolean;
    function duplicateItem (namePath : string) : boolean;
    function editItem () : boolean;
    function editItem (namePath : string) : boolean;
    function expandFolder (bExpand : boolean) : boolean;
    function expandFolder (bExpand : boolean, bRecurseNestedParent : boolean) : boolean;
    function expandFolder (bExpand : boolean, bRecurseNestedParent : boolean, namePath : string) : boolean;
    function findItemIndex (namePath : string) : int;
    function getItemProperty (property : string) : string;
    function getItemType () : string;
    function getItemType (namePath : string) : string;
    function getSelectedItems () : Item[];
    function importEmbeddedSWF (linkageName : string, swfData : string) : void;
    function importEmbeddedSWF (linkageName : string, swfData : string, libName : string) : void;
    function itemExists (namePath : string) : boolean;
    function moveToFolder (folderPath : string) : boolean;
    function moveToFolder (folderPath : string, itemToMove : string) : boolean;
    function moveToFolder (folderPath : string, itemToMove : string, bReplace : boolean) : boolean;
    function newFolder () : boolean;
    function newFolder (folderPath : string) : boolean;
    function renameItem () : boolean;
    function renameItem (name : string) : boolean;
    function selectAll () : void;
    function selectAll (bSelectAll : boolean) : void;
    function selectItem (namePath : string) : boolean;
    function selectItem (namePath : string, bReplaceCurrentSelection : boolean) : boolean;
    function selectItem (namePath : string, bReplaceCurrentSelection : boolean, bSelect : boolean) : boolean;
    function selectNone () : void;
    function setItemProperty (property : string, value : string) : void;
    function setItemProperty (property : string, value : number) : void;
    function updateItem () : boolean;
    function updateItem (namePath : string) : boolean;
}

native __fake__ class Item
{
    __readonly__ var itemType : string;
    var linkageBaseClass : string;
    var linkageClassName : string;
    var linkageExportForAS : boolean;
    var linkageExportForRS : boolean;
    var linkageExportInFirstFrame : boolean;
    var linkageIdentifier : string;
    var linkageImportForRS : boolean;
    var linkageURL : string;
    var name : string;

    function addData (name : string, type : string, data : int) : void;
    function addData (name : string, type : string, data : int[]) : void;
    function addData (name : string, type : string, data : number) : void;
    function addData (name : string, type : string, data : number[]) : void;
    function addData (name : string, type : string, data : string) : void;
    function addData (name : string, type : string, data : variant) : void;
    function getData (name : string) : variant;
    function hasData (name : string) : boolean;
    function removeData (name : string) : boolean;

    delete function constructor () {}
}

native __fake__ class BitmapItem extends Item
{
    var allowSmoothing : boolean;
    var compressionType : string;
    __readonly__ var fileLastModifiedDate : int;
    __readonly__ var originalCompressionType : string;
    var quality : int;
    __readonly__ var sourceFileExists : boolean;
    __readonly__ var sourceFileIsCurrent : boolean;
    __readonly__ var sourceFilePath : string;
    var useDeblocking : boolean;
    var useImportedJPEGQuality : boolean;

    function exportToFile(fileURI : string) : boolean;

    delete function constructor () {}
}

native __fake__ class FolderItem extends Item
{
    delete function constructor () {}
}

native __fake__ class FontItem extends Item
{
    var bitmap : boolean;
    var bold : boolean;
    var embeddedCharacters : string;
    var embedRanges : string;
    var embedVariantGlyphs : boolean;
    var font : string;
    var isDefineFont4Symbol : boolean;
    var italic : boolean;
    var size : int;

    delete function constructor () {}
}

native __fake__ class SoundItem extends Item
{
    var bitRate : string;
    var bits : string;
    var compressionType : string;
    var convertStereoToMono : boolean;
    __readonly__ var fileLastModifiedDate : int;
    __readonly__ var originalCompressionType : string;
    var quality : string;
    var sampleRate : string;
    __readonly__ var sourceFileExists : boolean;
    __readonly__ var sourceFileIsCurrent : boolean;
    __readonly__ var sourceFilePath : string;
    var useImportedMP3Quality : boolean;

    function exportToFile(fileURI : string) : boolean;

    delete function constructor () {}
}

native __fake__ class SymbolItem extends Item
{
    var scalingGrid : boolean;
    var scalingGridRect : RectangleObject;
    var sourceAutoUpdate : boolean;
    var sourceFilePath : string;
    var sourceLibraryName : string;
    var symbolType : string;
    var timeline : Timeline;

    delete function constructor () {}
}

native __fake__ class VideoItem
{
    __readonly__ var fileLastModifiedDate : int;
    __readonly__ var sourceFileExists : boolean;
    __readonly__ var sourceFileIsCurrent : boolean;
    __readonly__ var sourceFilePath : string;
    __readonly__ var videoType : string;

    function exportToFLV(fileURI : string) : boolean;

    delete function constructor () {}
}

native __fake__ class Element
{
    var depth : int;
    var elementType : string;
    var height : number;
    var layer : Layer;
    var left : number;
    var locked : boolean;
    var matrix : Matrix;
    var name : string;
    var rotation : int;
    var scaleX : number;
    var scaleY : number;
    var selected : boolean;
    var skewX : number;
    var skewY : number;
    var top : number;
    var transformX : number;
    var transformY : number;
    var width : number;
    var x : number;
    var y : number;

    function getPersistentData (name : string) : variant;
    function getTransformationPoint () : Point;
    function hasPersistentData (name : string) : boolean;
    function removePersistentData (name : string) : void;
    function setPersistentData (name : string, type : string, value : variant) : void;
    function setTransformationPoint (point : Point) : void;

    delete function constructor () {}
}

native __fake__ class Instance extends Element
{
    __readonly__ var instanceType : string;
    var libraryItem : Item;

    delete function constructor () {}
}

native __fake__ class _Bits
{
    var width : int;
    var height : int;
    var depth : int;
    var bits : int[];
    var cTab : string[];
}

native __fake__ class BitmapInstance extends Instance
{
    __readonly__ var hPixels : int;
    __readonly__ var vPixels : int;

    function getBits() : _Bits;
    function setBits(bitmap : _Bits) : void;

    delete function constructor () {}
}

native __fake__ class CompiledClipInstance extends Instance
{
    var accName : string;
    var actionScript : string;
    var description : string;
    var forceSimple : boolean;
    var shortcut : string;
    var silent : boolean;
    var tabIndex : int;

    delete function constructor () {}
}

native __fake__ class SymbolInstance extends Instance
{
    var accName : string;
    var actionScript : string;
    var backgroundColor : string;
    var bitmapRenderMode : string;
    var blendMode : string;
    var buttonTracking : string;
    var cacheAsBitmap : boolean;
    var colorAlphaAmount : int;
    var colorAlphaPercent : int;
    var colorBlueAmount : int;
    var colorBluePercent : int;
    var colorGreenAmount : int;
    var colorGreenPercent : int;
    var colorRedAmount : int;
    var colorRedPercent : int;
    var colorMode : string;
    var description : string;
    var filters : Filter[];
    var firstFrame : int;
    var forceSimple : boolean;
    var loop : string;
    var shortcut : string;
    var silent : boolean;
    var symbolType : string;
    var tabIndex : int;
    var useBackgroundColor : boolean;
    var visible : boolean;

    delete function constructor () {}
}

native __fake__ class Parameter
{
    var category : string;
    var listIndex : int;
    __readonly__ var name : string;
    var value : variant;
    __readonly__ var valueType : string;
    var verbose : int;

    delete function constructor () {}
}

native __fake__ class ComponentInstance extends SymbolInstance
{
    __readonly__ var parameters : Parameter[];

    delete function constructor () {}
}

native __fake__ class Contour
{
    var fill : Fill;
    __readonly__ var interior : boolean;
    __readonly__ var orientation : int;

    function getHalfEdge() : HalfEdge;

    delete function constructor () {}
}

native __fake__ class Edge
{
    var cubicSegmentIndex : int;
    __readonly__ var id : int;
    __readonly__ var isLine : int;
    var stroke : Stroke;

    function getControl(i : int) : Point;
    function getHalfEdge(index : int) : HalfEdge;
    function setControl(index : int, x : number, y : number) : void;
    function splitEdge(t : number) : void;

    delete function constructor () {}
}

native __fake__ class Vertex
{
    __readonly__ var x : number;
    __readonly__ var y : number;

    function getHalfEdge() : HalfEdge;
    function setLocation(x : number, y : number) : void;

    delete function constructor () {}
}

native __fake__ class Shape extends Element
{
    __readonly__ var contours : Contour[];
    __readonly__ var edges : Edge[];
    __readonly__ var isDrawingObject : boolean;
    __readonly__ var isGroup : boolean;
    __readonly__ var isOvalObject : boolean;
    __readonly__ var isRectangleObject : boolean;
    __readonly__ var members : Shape[];
    __readonly__ var numCubicSegments : int;
    __readonly__ var vertices : Vertex[];

    function beginEdit() : void;
    function deleteEdge(index : int) : void;
    function endEdit() : void;
    function getCubicSegmentPoints(cubicSegmentIndex : int) : Point[];

    delete function constructor () {}
}

native __fake__ class Oval extends Shape;
{
    __readonly__ var closePath : boolean;
    __readonly__ var endAngle : number;
    __readonly__ var innerRadius : number;
    __readonly__ var startAngle : number;

    delete function constructor () {}
}
native __fake__ class Rectangle extends Shape
{
    __readonly__ var bottomLeftRadius : float;
    __readonly__ var bottomRightRadius : float;
    __readonly__ var lockFlag : boolean;
    __readonly__ var topLeftRadius : float;
    __readonly__ var topRightRadius : float;

    delete function constructor () {}
}

native __fake__ class TextAttrs
{
    var aliasText : boolean;
    var alignment : string;
    var autoKern : boolean;
    var bold : boolean;
    var characterPosition : string;
    var characterSpacing : int;
    var face : string;
    var fillColor : string;
    var indent : int;
    var italic : boolean;
    var leftMargin : int;
    var letterSpacing : int;
    var lineSpacing : int;
    var rightMargin : int;
    var rotation : boolean;
    var size : int;
    var target : string;
    var url : string;

    delete function constructor () {}
}

native __fake__ class TextRun
{
    var characters : string;
    var textAttrs : TextAttrs;

    delete function constructor () {}
}

native __fake__ class Text extends Element
{
    var accName : string;
    var antiAliasSharpness : number;
    var antiAliasThickness : number;
    var autoExpand : boolean;
    var border : boolean;
    var description : string;
    var embeddedCharacters : string;
    var embedRanges : string;
    var embedVariantGlyphs : boolean;
    var fontRenderingMode : string;
    __readonly__ var length : int;
    var lineType : string;
    var maxCharacters : int;
    var orientation : string;
    var renderAsHTML : boolean;
    var scrollable : boolean;
    var selectable : boolean;
    var selectionEnd : int;
    var selectionStart : int;
    var shortcut : string;
    var silent : boolean;
    var tabIndex : int;
    __readonly__ var textRuns : TextRun[];
    var textType : string;
    var useDeviceFonts : boolean;
    var variableName : string;

    function getTextAttr();
    function getTextString();
    function setTextAttr();
    function setTextString();

    delete function constructor () {}
}

