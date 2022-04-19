import React, { useState } from "react";
import { TextField, ActionButton, Form } from "@adobe/react-spectrum";
import ApiKeyForm from "../components/ApiKeyForm";
import {observer} from 'mobx-react-lite'
import User from '../store/userStore.js'



const {
  mergeSelected,
  copySelection,
  selectAll,
  paste,
  makeLayerMask,
  openLayerMask,
  selectLayer,
  copySelectedLayers,
  mergeCopiedLayers,
} = require("../lib/Functions");
console.log(User.isAuth)

export const MoreDemos = observer(  () => {
  const [auth, setAuth] = useState(User.isAuth);
  const app = require("photoshop").app;
  const doc = app.activeDocument;
  const imagePath = doc.path;
  const layers = doc.layers;
  // let layer = layers[0];
  let layer;
  const fs = require("uxp").storage.localFileSystem;

  function addAjaxHeaders(xhr) {
    xhr.setRequestHeader("Accept", "application/json");

    var apiKey = "wrM622FnpZmiGSW4SfcJChPz";

    if (apiKey != undefined) {
      xhr.setRequestHeader("X-Api-Key", apiKey);
    }
  }

  async function upload(file) {
    return new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append("image_file", file, "original.jpg");
      formData.append("size", "auto");
      formData.append("format", "zip");

      let xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.remove.bg/v1.0/removebg");
      console.log(formData + "1");

      addAjaxHeaders(xhr);

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr);
          console.log(xhr);
        } else {
          reject({
            status: this.status,
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };

      xhr.send(formData);
    });
  }

  async function saveRemoveBgResult(folderEntry, data) {
    const JSZip = require("../lib/jszip.min.js");
    var zip = await JSZip.loadAsync(data.data.result_b64, { base64: true });
    var zipEntries = Object.entries(zip.files);
    var returnFiles = {};
    for (let i = 0; i < zipEntries.length; ++i) {
      console.log(zipEntries[i].name);
      var currentZipEntry = zipEntries[i];

      let tempFile = await folderEntry.createFile(currentZipEntry[1].name, {
        overwrite: true,
      });
      await tempFile.write(currentZipEntry[1]._data.compressedContent);
      returnFiles[currentZipEntry[1].name] = tempFile;
      console.log(tempFile)
    }

    return returnFiles;
  }

  async function exportFile() {
    console.log("deleteBg was started");
    var tempFolder = await fs.getTemporaryFolder();
    // console.log(tempFolder);
    let tempFile = await tempFolder.createFile("temp.jpg", { overwrite: true });
    // console.log(tempFile);
    await doc.save(tempFile, {
      embedColorProfile: true,
      quality: 8,
    });

    setTimeout(async function () {
      try {
        const tempFileContents = await tempFile.read({
          format: require("uxp").storage.formats.binary,
        });

        // console.log(layers)
        // let selectedLayers=[]
        // layers.find(layer => {if(layer.selected) {selectedLayers.push(layer)}})
        // console.log(selectedLayers)
        await copySelectedLayers();
        await mergeCopiedLayers();

        // var xhr = await upload(tempFileContents);

        console.log(xhr);
        let data = JSON.parse(xhr.response);
        console.log(data);
        var files = await saveRemoveBgResult(tempFolder, data);
        console.log(files);

        let colorFile = files["color.jpg"];
        const colorDoc = await app.open(colorFile);
        var colorLayer = colorDoc.activeLayers[0];
        colorLayer.name = "rgb";

        let alphaFile = files["alpha.png"];
        const alphaDoc = await app.open(alphaFile);

        const alphaLayer = await alphaDoc.activeLayers[0].duplicate(colorDoc);
        alphaLayer.name = "alpha";
        alphaDoc.closeWithoutSaving();

        app.activeDocument = colorDoc;

        await selectAll(); // select all from alpha layer
        await copySelection();
        await selectLayer("rgb");

        await makeLayerMask();
        await openLayerMask();

        await paste();

        await colorDoc.activeLayers[0].duplicate(doc, "remove.bg");
        await colorDoc.closeWithoutSaving();
      } catch (err) {
        console.log(err);
      }
    }, 500);
    await exportSingleFile()
  }
  async function exportSingleFile() {
    console.log("deleteBg was started");
    var tempFolder = await fs.getTemporaryFolder();
    // console.log(tempFolder);
    let tempFile = await tempFolder.createFile("temp.jpg", { overwrite: true });
    // console.log(tempFile);
    await doc.save(tempFile, {
      embedColorProfile: true,
      quality: 8,
    });

    setTimeout(async function () {
      try {
        const tempFileContents = await tempFile.read({
          format: require("uxp").storage.formats.binary,
        });

        // console.log(layers)
        // let selectedLayers=[]
        // layers.find(layer => {if(layer.selected) {selectedLayers.push(layer)}})
        // console.log(selectedLayers)
        // await copySelectedLayers();
        // await mergeCopiedLayers();

        var xhr = await upload(tempFileContents);

        console.log(xhr);
        let data = JSON.parse(xhr.response);
        console.log(data);
        var files = await saveRemoveBgResult(tempFolder, data);
        console.log(files);

        let colorFile = files["color.jpg"];
        const colorDoc = await app.open(colorFile);
        var colorLayer = colorDoc.activeLayers[0];
        colorLayer.name = "rgb";

        let alphaFile = files["alpha.png"];
        const alphaDoc = await app.open(alphaFile);

        const alphaLayer = await alphaDoc.activeLayers[0].duplicate(colorDoc);
        alphaLayer.name = "alpha";
        alphaDoc.closeWithoutSaving();

        app.activeDocument = colorDoc;

        await selectAll(); // select all from alpha layer
        await copySelection();
        await selectLayer("rgb");

        await makeLayerMask();
        await openLayerMask();

        await paste();

        await colorDoc.activeLayers[0].duplicate(doc, "remove.bg");
        await colorDoc.closeWithoutSaving();
      } catch (err) {
        console.log(err);
      }
    }, 500);
  }

  async function deleteBGHandler() {
    let app = require("photoshop").app;
    let doc = app.activeDocument;
    let layers = doc.layers;
    console.log(layers.length);
    if (layers.length !== 1) {
      return await exportFile();
    } else {
      return await exportSingleFile();
    }
  }




  return (
    <>
      {!User.isAuth ? (
        <ApiKeyForm auth = {User.isAuth} />
      ) : (
        <sp-button variant="primary" onClick={deleteBGHandler}>
          Delete Background
        </sp-button>
      )}
      
    </>
  );
})
