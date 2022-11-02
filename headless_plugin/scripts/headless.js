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
(function (window, undefined) {
  window.Asc.plugin.init = function () {
    console.log("inside init");
    window.addEventListener("message", function (event) {
      console.log("Message received from the parent: " + event.data); // Message received from parent
    });
  };

  window.Asc.plugin.button = function (id) {};

  window.Asc.plugin.onExternalPluginMessage = function (data) {
    console.log("inside onExternalPluginMessage");
    switch (data.type) {
      case "previewValue": {
        console.log("inside previewValue");
        Asc.scope.text = data.text; // export variable to plugin scope
        window.Asc.plugin.executeMethod("PasteHtml", [Asc.scope.text]);
        break;
      }
      case "insertImageToken": {
        console.log("inside insertImageToken");
        Asc.scope.text = data.text; // export variable to plugin scope
        this.callCommand(function () {
          var oDocument = Api.GetDocument();
          var oParagraph = Api.CreateParagraph();
          oParagraph.AddText(Asc.scope.text);
          oDocument.InsertContent([oParagraph]);
        }, false);
        break;
      }
      case "insertTextToken": {
        console.log("indide insertTextToken");
        Asc.scope.text = data.text; // export variable to plugin scope
        this.callCommand(function () {
          var oDocument = Api.GetDocument();
          var oParagraph = Api.CreateParagraph();
          oParagraph.AddText(Asc.scope.text);
          oDocument.InsertContent([oParagraph]);
        }, false);

        break;
      }
    }
  };
})(window, undefined);
