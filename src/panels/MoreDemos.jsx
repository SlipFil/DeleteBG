import React from "react";
// import axios from "axios";

import { PlayIcon } from "../components/Icons.jsx";
// import axios from "axios";
// const axios = require('axios');
const { mergeSelected, copySelection, getSelection, getSelectionBounds, selectAll, duplicateDocument, paste, makeLayerMask, openLayerMask, selectLayer, deselect, makeSelection } = require('../lib/Functions');

export const MoreDemos = () => {
  const app = require("photoshop").app;

  const doc = app.activeDocument;
  const imagePath = doc.path;
  const layers = doc.layers;
  const layer = layers[0];
  const fs = require("uxp").storage.localFileSystem;


  function addAjaxHeaders(xhr) {
    xhr.setRequestHeader('Accept', 'application/json');
  
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
    console.log(formData + '1')

    addAjaxHeaders(xhr);

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr);
        console.log(xhr)
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
    const JSZip = require('../lib/jszip.min.js');
    var zip = await JSZip.loadAsync(data.data.result_b64, { 'base64': true });
    var zipEntries = Object.entries(zip.files);
    var returnFiles = {};
    for (let i = 0; i < zipEntries.length; ++i) {
      console.log(zipEntries[i].name);
      var currentZipEntry = zipEntries[i];
  
     let tempFile = await folderEntry.createFile(currentZipEntry[1].name, { overwrite: true });
      await tempFile.write(currentZipEntry[1]._data.compressedContent);
      returnFiles[currentZipEntry[1].name] = tempFile;
    }
  
    return returnFiles;
  }

  async function exportFile() {
    console.log('deleteBg was started')
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

        console.log(layers)
        let selectedLayers=[]
        layers.find(layer => {if(layer.selected) {selectedLayers.push(layer)}})
        console.log(selectedLayers)
        await mergeSelected()

        // var xhr = await upload(tempFileContents);
        
        console.log(xhr)
        let data = JSON.parse(xhr.response);
        console.log(data);
        var files = await saveRemoveBgResult(tempFolder, data);
        console.log(files);

        let colorFile = files['color.jpg'];
        const colorDoc = await app.open(colorFile);
        var colorLayer = colorDoc.activeLayers[0];
        colorLayer.name = "rgb";

        let alphaFile = files['alpha.png'];
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

  async function Handler() {
    return await exportFile();
  }

  const CreateNewLayerHandler = () => {
    const copyLayer = layer.duplicate();
    console.log(copyLayer);
    console.log(layer);

    // doc.layers.push({})
  };

  return (
    <>
      <sp-button variant="primary" onClick={Handler}>
        <span slot="icon">
          <PlayIcon />
        </span>
        Delete BG
      </sp-button>
      {/* <sp-button variant="primary" onClick={CreateNewLayerHandler}>
        <span slot="icon">
          <PlayIcon />
        </span>
        Create Layer
      </sp-button> */}
    </>
  );
};
