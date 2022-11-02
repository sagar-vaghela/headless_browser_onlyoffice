/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
window.onload = function() {

	var dataMessage = {
		frameEditorId : "iframeEditor",
		guid : "asc.{headless}",
		type : "onExternalPluginMessage",
		data : {
			type: "close",
			text: "text"
		}
	};

	document.getElementById("button1").onclick = function()
	{
		dataMessage.data.type = "insertTextToken";
		dataMessage.data.text = "<<TextToken>>";
		var _iframe = document.getElementById("frameEditor");
		if (_iframe)
			_iframe.contentWindow.postMessage(JSON.stringify(dataMessage), "*");
	};
	document.getElementById("button2").onclick = function()
	{
		dataMessage.data.type = "insertImageToken";
		dataMessage.data.text = "<<ImangeToken>>";
		var _iframe = document.getElementById("frameEditor");
		if (_iframe)
			_iframe.contentWindow.postMessage(JSON.stringify(dataMessage), "*");
			
	};
	document.getElementById("button3").onclick = function()
	{
		dataMessage.data.type = "previewValue";
		dataMessage.data.text = "<h1>Umang Hingu in h1 Tag.</h1>";
		var _iframe = document.getElementById("frameEditor");
		if (_iframe)
			_iframe.contentWindow.postMessage(JSON.stringify(dataMessage), "*");
	};

};
