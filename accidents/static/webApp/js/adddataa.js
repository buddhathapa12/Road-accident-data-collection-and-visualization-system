// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"OHG6":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function () {
  selectListeners();
  formevents();
  addevents();
});
var map;

function startmap() {
  map = new ol.Map({
    target: 'map',
    layers: [new ol.layer.Tile({
      source: new ol.source.OSM()
    })],
    view: new ol.View({
      //Set center
      center: ol.proj.transform([85.31, 27.71], 'EPSG:4326', 'EPSG:3857'),
      zoom: 7,
      extent: ol.proj.transformExtent([84.31, 26.71, 86.31, 28.71], 'EPSG:4326', 'EPSG:3857')
    })
  });
  map.on("singleclick", function (evt) {
    console.log("clicked");
    var latLong = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
    addMarker(latLong[0], latLong[1]);
  });

  if (!navigator.geolocation) {
    document.querySelector("#currentlocationbutton").style.display = "none";
  }
}

function addevents() {
  document.querySelector("#currentlocationbutton").addEventListener("click", function (e) {
    navigator.geolocation.getCurrentPosition(showPosition, function (e) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;

        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;

        case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;

        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
      }
    });
  });
  document.querySelector("#latlongbutton").addEventListener("click", function (e) {
    document.querySelector(".locationSelectOverlay").style.display = "flex";
    startmap();
    document.querySelector(".locationSelectOverlay").addEventListener("click", function (e) {
      if (e.target == document.querySelector(".locationSelectOverlay")) e.target.style.display = "none";
    });
  });
}

function formevents() {
  document.querySelector("#no_of_vehicle_involved").addEventListener("change", function (e) {
    if (parseInt(e.target.value) != null) {
      for (var i = parseInt(e.target.value) - 1; i >= 1; i--) {
        var items = document.querySelector("#vehicledata1").cloneNode(true);
        items.setAttribute("id", "vehicledata" + (i + 1));
        var allSelects = items.querySelectorAll(".normalselect");
        allSelects.forEach(function (element) {
          element.querySelector(".selection").addEventListener("click", function () {
            if (element.classList.contains("active")) {
              var alllis = element.querySelector(".liItems").childNodes;
              alllis.forEach(function (li) {
                li.onclick = null;
              });
              element.classList.remove("active");
              return;
            } else {
              if (!element.classList.contains("active")) {
                var alllis = element.querySelector(".liItems").childNodes;
                alllis.forEach(function (li) {
                  li.onclick = function () {
                    element.setAttribute("val", li.value);
                    element.querySelector(".selection").innerHTML = li.innerHTML;
                  };
                });
                var first = true;

                document.onclick = function () {
                  if (first) {
                    first = false;
                    return;
                  }

                  if (element.classList.contains("active")) {
                    element.classList.remove("active");
                    document.onclick = null;
                    var alllis = element.querySelector(".liItems").childNodes;
                    alllis.forEach(function (li) {
                      li.onclick = null;
                    });
                  }
                };

                element.classList += " active";
              }
            }
          });
        });
        items.querySelector(".DataHeaderText").innerHTML += " " + (i + 1);
        document.querySelector("#vehicledata1").parentNode.insertBefore(items, document.querySelector("#vehicledata1").nextSibling);
      }
    }
  });
  document.querySelector("#no_of_driver_involved").addEventListener("change", function (e) {
    if (parseInt(e.target.value) != null) {
      for (var i = parseInt(e.target.value) - 1; i >= 1; i--) {
        var itemss = document.querySelector("#driverdata1").cloneNode(true);
        itemss.setAttribute("id", "driverdata" + (i + 1));
        var allSelects = itemss.querySelectorAll(".normalselect");
        allSelects.forEach(function (element) {
          element.querySelector(".selection").addEventListener("click", function () {
            if (element.classList.contains("active")) {
              var alllis = element.querySelector(".liItems").childNodes;
              alllis.forEach(function (li) {
                li.onclick = null;
              });
              element.classList.remove("active");
              return;
            } else {
              if (!element.classList.contains("active")) {
                var alllis = element.querySelector(".liItems").childNodes;
                alllis.forEach(function (li) {
                  li.onclick = function () {
                    element.setAttribute("val", li.value);
                    element.querySelector(".selection").innerHTML = li.innerHTML;
                  };
                });
                var first = true;

                document.onclick = function () {
                  if (first) {
                    first = false;
                    return;
                  }

                  if (element.classList.contains("active")) {
                    element.classList.remove("active");
                    document.onclick = null;
                    var alllis = element.querySelector(".liItems").childNodes;
                    alllis.forEach(function (li) {
                      li.onclick = null;
                    });
                  }
                };

                element.classList += " active";
              }
            }
          });
        });
        itemss.querySelector(".DataHeaderText").innerHTML += " " + (i + 1);
        document.querySelector("#driverdata1").parentNode.insertBefore(itemss, document.querySelector("#driverdata1").nextSibling);
      }
    }
  });
  document.querySelector("#no_of_passanger_involved").addEventListener("change", function (e) {
    if (parseInt(e.target.value) != null) {
      for (var i = parseInt(e.target.value) - 1; i >= 1; i--) {
        var itemsss = document.querySelector("#travellerdata1").cloneNode(true);
        itemsss.setAttribute("id", "travellerdata" + (i + 1));
        var allSelects = itemsss.querySelectorAll(".normalselect");
        allSelects.forEach(function (element) {
          element.querySelector(".selection").addEventListener("click", function () {
            if (element.classList.contains("active")) {
              var alllis = element.querySelector(".liItems").childNodes;
              alllis.forEach(function (li) {
                li.onclick = null;
              });
              element.classList.remove("active");
              return;
            } else {
              if (!element.classList.contains("active")) {
                var alllis = element.querySelector(".liItems").childNodes;
                alllis.forEach(function (li) {
                  li.onclick = function () {
                    element.setAttribute("val", li.value);
                    element.querySelector(".selection").innerHTML = li.innerHTML;
                  };
                });
                var first = true;

                document.onclick = function () {
                  if (first) {
                    first = false;
                    return;
                  }

                  if (element.classList.contains("active")) {
                    element.classList.remove("active");
                    document.onclick = null;
                    var alllis = element.querySelector(".liItems").childNodes;
                    alllis.forEach(function (li) {
                      li.onclick = null;
                    });
                  }
                };

                element.classList += " active";
              }
            }
          });
        });
        itemsss.querySelector(".DataHeaderText").innerHTML += " " + (i + 1);
        document.querySelector("#travellerdata1").parentNode.insertBefore(itemsss, document.querySelector("#travellerdata1").nextSibling);
      }
    }
  });
  document.querySelector("#no_of_pedestrian_involved").addEventListener("change", function (e) {
    if (parseInt(e.target.value) != null) {
      for (var i = parseInt(e.target.value) - 1; i >= 1; i--) {
        var itema = document.querySelector("#pedestriandata1").cloneNode(true);
        itema.setAttribute("id", "pedestriandata" + (i + 1));
        var allSelects = itema.querySelectorAll(".normalselect");
        allSelects.forEach(function (element) {
          element.querySelector(".selection").addEventListener("click", function () {
            if (element.classList.contains("active")) {
              var alllis = element.querySelector(".liItems").childNodes;
              alllis.forEach(function (li) {
                li.onclick = null;
              });
              element.classList.remove("active");
              return;
            } else {
              if (!element.classList.contains("active")) {
                var alllis = element.querySelector(".liItems").childNodes;
                alllis.forEach(function (li) {
                  li.onclick = function () {
                    element.setAttribute("val", li.value);
                    element.querySelector(".selection").innerHTML = li.innerHTML;
                  };
                });
                var first = true;

                document.onclick = function () {
                  if (first) {
                    first = false;
                    return;
                  }

                  if (element.classList.contains("active")) {
                    element.classList.remove("active");
                    document.onclick = null;
                    var alllis = element.querySelector(".liItems").childNodes;
                    alllis.forEach(function (li) {
                      li.onclick = null;
                    });
                  }
                };

                element.classList += " active";
              }
            }
          });
        });
        itema.querySelector(".DataHeaderText").innerHTML += " " + (i + 1);
        document.querySelector("#pedestriandata1").parentNode.insertBefore(itema, document.querySelector("#pedestriandata1").nextSibling);
      }
    }
  });
}

function showPosition(position) {
  navigatetoLocation(position.coords.longitude, position.coords.latitude);
  showLocationdot(position);
  navigator.geolocation.watchPosition(showLocationdot);
  return;
}

;
var locationLayer = null;
var locationFeature = null;
var locationPoint = null;
var positionmarker = null;

function showLocationdot(location) {
  if (locationLayer == null) {
    var centerLongitudeLatitude = ol.proj.fromLonLat([location.coords.longitude, location.coords.latitude]);
    var style = new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: 'rgba(112, 150, 255, 0.8)'
        }),
        stroke: new ol.style.Stroke({
          width: 1,
          color: 'rgba(112, 150, 255, 0.8)'
        }),
        radius: 10
      })
    });
    locationPoint = new ol.geom.Point(centerLongitudeLatitude);
    locationFeature = [new ol.Feature({
      geometry: locationPoint,
      fill: 'red'
    })];
    locationLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: locationFeature
      }),
      style: style
    });
    map.addLayer(locationLayer);
  } else {
    var centerLongitudeLatitude = ol.proj.fromLonLat([location.coords.longitude, location.coords.latitude]);
    locationPoint.setCoordinates(centerLongitudeLatitude);
  }
}

function navigatetoLocation(long, lat) {
  map.getView().animate({
    center: getESPG(lat, long),
    zoom: 15,
    duration: 1000
  });
}

function getESPG(lon, lat) {
  return ol.proj.transform([lat, lon], 'EPSG:4326', 'EPSG:3857');
}

function addMarker(lon, lat) {
  document.querySelector("#accident_location_longitude").value = lon;
  document.querySelector("#accident_location_latitude").value = lat;
  console.log(lon);

  if (positionmarker == null) {
    var centerLongitudeLatitude = ol.proj.fromLonLat([lon, lat]);
    positionmarker = new ol.geom.Point(centerLongitudeLatitude);
    var iconFeature = new ol.Feature({
      geometry: positionmarker
    });
    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1],
        scale: 0.1,
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        opacity: 0.75,
        src: '/marker.png'
      })
    });
    iconFeature.setStyle(iconStyle);
    var vectorSource = new ol.source.Vector({
      features: [iconFeature]
    });
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });
    map.addLayer(vectorLayer);
  } else {
    var centerLongitudeLatitude = ol.proj.fromLonLat([lon, lat]);
    positionmarker.setCoordinates(centerLongitudeLatitude);
  }
}

function selectListeners() {
  var allSelects = document.querySelectorAll(".normalselect");
  allSelects.forEach(function (element) {
    element.querySelector(".selection").addEventListener("click", function () {
      if (element.classList.contains("active")) {
        var alllis = element.querySelector(".liItems").childNodes;
        alllis.forEach(function (li) {
          li.onclick = null;
        });
        element.classList.remove("active");
        return;
      } else {
        if (!element.classList.contains("active")) {
          var alllis = element.querySelector(".liItems").childNodes;
          alllis.forEach(function (li) {
            li.onclick = function () {
              element.setAttribute("val", li.value);
              element.querySelector(".selection").innerHTML = li.innerHTML;
            };
          });
          var first = true;

          document.onclick = function () {
            if (first) {
              first = false;
              return;
            }

            if (element.classList.contains("active")) {
              element.classList.remove("active");
              document.onclick = null;
              var alllis = element.querySelector(".liItems").childNodes;
              alllis.forEach(function (li) {
                li.onclick = null;
              });
            }
          };

          element.classList += " active";
        }
      }
    });
  });
}
},{}]},{},["OHG6"], null)
//# sourceMappingURL=/adddata.js.map


function requestserver(){
	     document.querySelector("#savebutton").addEventListener("click", function () {
    var data = new FormData();
    
    data.append('csrfmiddlewaretoken', document.getElementsByName("csrfmiddlewaretoken").value);
    data.append('report_no', document.querySelector("#report_no").value);
    data.append('police_office_name', document.querySelector("#police_office_name").value);
    data.append('police_office_province', (document.querySelector("#police_office_province").hasAttribute("val")?document.querySelector("#police_office_province").getAttribute("val"): 0));
    data.append('police_office_district', document.querySelector("#police_office_district").value);
    data.append('no_of_vehicle_involved', document.querySelector("#no_of_vehicle_involved").value);
    data.append('no_of_driver_involved', document.querySelector("#no_of_driver_involved").value);
    data.append('no_of_passanger_involved', document.querySelector("#no_of_passanger_involved").value);
    data.append('no_of_pedestrian_involved', document.querySelector("#no_of_pedestrian_involved").value);
    data.append('accident_seriousness', (document.querySelector("#accident_seriousness").hasAttribute("val")?document.querySelector("#accident_seriousness").getAttribute("val"): 0));
    data.append('day', document.querySelector("#day").value);
    data.append('month', (document.querySelector("#month").hasAttribute("val")?document.querySelector("#month").getAttribute("val"): 0));
    data.append('year', document.querySelector("#year").value);
    data.append('day_of_week', (document.querySelector("#day_of_week").hasAttribute("val")?document.querySelector("#day_of_week").getAttribute("val"): 0));
    data.append('hour', document.querySelector("#hour").value);
    data.append('minute', document.querySelector("#minute").value);
    data.append('vehicle_control', (document.querySelector("#vehicle_control").hasAttribute("val")?document.querySelector("#vehicle_control").getAttribute("val"): 0));
    data.append('collision_type', (document.querySelector("#collision_type").hasAttribute("val")?document.querySelector("#collision_type").getAttribute("val"): 0));
    data.append('weather_condition', (document.querySelector("#weather_condition").hasAttribute("val")?document.querySelector("#weather_condition").getAttribute("val"): 0));
    data.append('lighting_condition',(document.querySelector("#lighting_condition").hasAttribute("val")?document.querySelector("#lighting_condition").getAttribute("val"): 0));
    data.append('hit_and_run', (document.querySelector("#hit_and_run").hasAttribute("val")?document.querySelector("#hit_and_run").getAttribute("val"): 0));
    data.append('accident_place_name', document.querySelector("#accident_place_name").value);
    data.append('accident_location', document.querySelector("#accident_location").value);
    data.append('accident_location_longitude', document.querySelector("#accident_location_longitude").value);
    data.append('accident_location_latitude', document.querySelector("#accident_location_latitude").value);
    
    data.append('road_number', document.querySelector("#road_number").value);
    data.append('road_length', document.querySelector("#road_length").value);
    // data.append('hundred_meters', document.querySelector("#lat").value);
    // data.append('node_map', document.querySelector("#lat").value);
    // data.append('node_no', document.querySelector("#lat").value);
    // data.append('node_2', document.querySelector("#lat").value);
    data.append('police_info', document.querySelector("#police_info").value);
    data.append('investigation_officers_name', document.querySelector("#investigation_officers_name").value);
    data.append('investigation_officers_name_standard', document.querySelector("#investigation_officers_name_standard").value);
    data.append('reinvestigation_officers_name', document.querySelector("#reinvestigation_officers_name").value);
    data.append('reinvestigation_officers_name_standard', document.querySelector("#reinvestigation_officers_name_standard").value);
    data.append('noted_action', document.querySelector("#noted_action").value);
    

    //Vehicle Description
    for(var i=0;i<document.querySelector("#no_of_vehicle_involved").value;i++ ){
      var container=document.querySelector("#vehicledata"+(i+1));
      data.append('vehicle_registration_no'+i.toString(), container.querySelector("#vehicle_registration_no").value);
      data.append('vehicle_owner_name'+i.toString(), container.querySelector("#vehicle_owner_name").value);
      data.append('vehicle_owner_address'+i.toString(), container.querySelector("#vehicle_owner_address").value);
      data.append('third_party_insurance'+i.toString(),(container.querySelector("#third_party_insurance").hasAttribute("val")?document.querySelector("#third_party_insurance").getAttribute("val"): 0));
      data.append('name_of_vehicle_company'+i.toString(), container.querySelector("#name_of_vehicle_company").value);
      data.append('vehicle_type'+i.toString(),(container.querySelector("#vehicle_type").hasAttribute("val")?document.querySelector("#vehicle_type").getAttribute("val"): 0));
      data.append('vehicle_action'+i.toString(), (container.querySelector("#vehicle_action").hasAttribute("val")?document.querySelector("#vehicle_action").getAttribute("val"): 0));
      data.append('load_condition'+i.toString(),(container.querySelector("#load_condition").hasAttribute("val")?document.querySelector("#load_condition").getAttribute("val"): 0));
      data.append('mistake'+i.toString(),(container.querySelector("#mistake").hasAttribute("val")?document.querySelector("#mistake").getAttribute("val"): 0));
      data.append('vehicle_loss'+i.toString(),(container.querySelector("#vehicle_loss").hasAttribute("val")?document.querySelector("#vehicle_loss").getAttribute("val"): 0));
      data.append('owner_type'+i.toString(),(container.querySelector("#owner_type").hasAttribute("val")?document.querySelector("#owner_type").getAttribute("val"): 0));
      
    }
   
    //Driver Description
    for(var i=0; i<document.querySelector("#no_of_driver_involved").value; i++){
      var container=document.querySelector("#driverdata"+(i+1));
      data.append('driver_name'+i.toString(), container.querySelector("#driver_name").value);
      data.append('driver_address'+i.toString(), container.querySelector("#driver_address").value);
      data.append('driver_licence_no'+i.toString(), container.querySelector("#driver_licence_no").value);
      data.append('report_taking_office'+i.toString(), container.querySelector("#report_taking_office").value);
      data.append('driver_age'+i.toString(), container.querySelector("#driver_age").value);
      data.append('driver_sex'+i.toString(),(container.querySelector("#driver_sex").hasAttribute("val")?document.querySelector("#driver_sex").getAttribute("val"): 0));
      data.append('driver_fault'+i.toString(),(container.querySelector("#driver_fault").hasAttribute("val")?document.querySelector("#driver_fault").getAttribute("val"): 0));
      data.append('driving_licence_type'+i.toString(),(container.querySelector("#driving_licence_type").hasAttribute("val")?document.querySelector("#driving_licence_type").getAttribute("val"): 0));
      data.append('driver_injury_type'+i.toString(),(container.querySelector("#driver_injury_type").hasAttribute("val")?document.querySelector("#driver_injury_type").getAttribute("val"): 0));
      data.append('alcohol_used'+i.toString(),(container.querySelector("#alcohol_used").hasAttribute("val")?document.querySelector("#alcohol_used").getAttribute("val"): 0));
      data.append('seatbelt_or_helmet_used'+i.toString(),(container.querySelector("#seatbelt_or_helmet_used").hasAttribute("val")?document.querySelector("#seatbelt_or_helmet_used").getAttribute("val"): 0));
      
    }

    
    //Passanger Description 
    for(var i=0 ; i<document.querySelector("#no_of_passanger_involved").value; i++){
      var container=document.querySelector("#travellerdata"+(i+1));
      data.append('passanger_name'+i.toString(), container.querySelector("#passanger_name").value);
      data.append('passanger_address'+i.toString(), container.querySelector("#passanger_address").value);
      data.append('vehicle_no'+i.toString(), container.querySelector("#vehicle_no").value);
      data.append('passanger_age'+i.toString(), container.querySelector("#passanger_age").value);
      data.append('passanger_sex'+i.toString(),(container.querySelector("#passanger_sex").hasAttribute("val")?document.querySelector("#passanger_sex").getAttribute("val"): 0));
      data.append('injury_seriousness'+i.toString(),(container.querySelector("#injury_seriousness").hasAttribute("val")?document.querySelector("#injury_seriousness").getAttribute("val"): 0));
      data.append('passanger_condition'+i.toString(),(container.querySelector("#passanger_condition").hasAttribute("val")?document.querySelector("#passanger_condition").getAttribute("val"): 0));
      data.append('passanger_action'+i.toString(),(container.querySelector("#passanger_action").hasAttribute("val")?document.querySelector("#passanger_action").getAttribute("val"): 0));
      data.append('passanger_seatbelt_or_helmet_used'+i.toString(),(container.querySelector("#passanger_seatbelt_or_helmet_used").hasAttribute("val")?document.querySelector("#passanger_seatbelt_or_helmet_used").getAttribute("val"): 0));

    }
    
    //Pedestrian Description
    for(var i=0 ; i<document.querySelector("#no_of_passanger_involved").value; i++){
      var container=document.querySelector("#pedestriandata"+(i+1));
      data.append('pedestrian_name'+i.toString(), container.querySelector("#pedestrian_name").value);
      data.append('pedestrian_address'+i.toString(), container.querySelector("#pedestrian_address").value);
      data.append('pedestrian_age'+i.toString(), container.querySelector("#pedestrian_age").value);
      data.append('pedestrian_sex'+i.toString(),(container.querySelector("#pedestrian_sex").hasAttribute("val")?document.querySelector("#pedestrian_sex").getAttribute("val"): 0));
      data.append('pedestrian_injury_seriousness'+i.toString(),(container.querySelector("#pedestrian_injury_seriousness").hasAttribute("val")?document.querySelector("#pedestrian_injury_seriousness").getAttribute("val"): 0));
      data.append('pedestrian_condition'+i.toString(),(container.querySelector("#pedestrian_condition").hasAttribute("val")?document.querySelector("#pedestrian_condition").getAttribute("val"): 0));
      data.append('pedestrian_action'+i.toString(),(container.querySelector("#pedestrian_action").hasAttribute("val")?document.querySelector("#pedestrian_action").getAttribute("val"): 0));
      data.append('pedestrian_alcohol_used'+i.toString(),(container.querySelector("#pedestrian_alcohol_used").hasAttribute("val")?document.querySelector("#pedestrian_alcohol_used").getAttribute("val"): 0));
    }

    //Witness Description
    //data.append('witness_name', document.querySelector("#witness_name").value);

    
    // data.append('vehicle_registration_no', document.querySelector("#vehicle_registration_no").value);
    // data.append('vehicle_owner_name', document.querySelector("#vehicle_owner_name").value);
    // data.append('vehicle_owner_address', document.querySelector("#vehicle_owner_address").value);
    // data.append('third_party_insurance',(document.querySelector("#third_party_insurance").hasAttribute("val")?document.querySelector("#third_party_insurance").getAttribute("val"): 0));
    // data.append('name_of_vehicle_company', document.querySelector("#name_of_vehicle_company").value);
    // data.append('vehicle_type',(document.querySelector("#vehicle_type").hasAttribute("val")?document.querySelector("#vehicle_type").getAttribute("val"): 0));
    // data.append('vehicle_action', (document.querySelector("#vehicle_action").hasAttribute("val")?document.querySelector("#vehicle_action").getAttribute("val"): 0));
    // data.append('load_condition',(document.querySelector("#load_condition").hasAttribute("val")?document.querySelector("#load_condition").getAttribute("val"): 0));      
    // data.append('mistake',(document.querySelector("#mistake").hasAttribute("val")?document.querySelector("#mistake").getAttribute("val"): 0));
    // data.append('vehicle_loss',(document.querySelector("#vehicle_loss").hasAttribute("val")?document.querySelector("#vehicle_loss").getAttribute("val"): 0));
    // data.append('owner_type',(document.querySelector("#owner_type").hasAttribute("val")?document.querySelector("#owner_type").getAttribute("val"): 0));
      
   
    // //Driver Description
    // data.append('driver_name', document.querySelector("#driver_name").value);
    // data.append('driver_address', document.querySelector("#driver_address").value);
    // data.append('driver_licence_no', document.querySelector("#driver_licence_no").value);
    // data.append('report_taking_office', document.querySelector("#report_taking_office").value);
    // data.append('driver_age', document.querySelector("#driver_age").value);
    // data.append('driver_sex',(document.querySelector("#driver_sex").hasAttribute("val")?document.querySelector("#driver_sex").getAttribute("val"): 0));
    // data.append('driver_fault',(document.querySelector("#driver_fault").hasAttribute("val")?document.querySelector("#driver_fault").getAttribute("val"): 0));
    // data.append('driving_licence_type',(document.querySelector("#driving_licence_type").hasAttribute("val")?document.querySelector("#driving_licence_type").getAttribute("val"): 0));
    // data.append('driver_injury_type',(document.querySelector("#driver_injury_type").hasAttribute("val")?document.querySelector("#driver_injury_type").getAttribute("val"): 0));      
    // data.append('alcohol_used',(document.querySelector("#alcohol_used").hasAttribute("val")?document.querySelector("#alcohol_used").getAttribute("val"): 0));
    // data.append('seatbelt_or_helmet_used',(document.querySelector("#seatbelt_or_helmet_used").hasAttribute("val")?document.querySelector("#seatbelt_or_helmet_used").getAttribute("val"): 0));
      
  

    
    // //Passanger Description 
    // data.append('passanger_name', document.querySelector("#passanger_name").value);
    // data.append('passanger_address', document.querySelector("#passanger_address").value);
    // data.append('vehicle_no', document.querySelector("#vehicle_no").value);
    // data.append('passanger_age', document.querySelector("#passanger_age").value);
    // data.append('passanger_sex',(document.querySelector("#passanger_sex").hasAttribute("val")?document.querySelector("#passanger_sex").getAttribute("val"): 0));
    // data.append('injury_seriousness',(document.querySelector("#injury_seriousness").hasAttribute("val")?document.querySelector("#injury_seriousness").getAttribute("val"): 0));
    // data.append('passanger_condition',(document.querySelector("#passanger_condition").hasAttribute("val")?document.querySelector("#passanger_condition").getAttribute("val"): 0));
    // data.append('passanger_action',(document.querySelector("#passanger_action").hasAttribute("val")?document.querySelector("#passanger_action").getAttribute("val"): 0));
    // data.append('passanger_seatbelt_or_helmet_used',(document.querySelector("#passanger_seatbelt_or_helmet_used").hasAttribute("val")?document.querySelector("#passanger_seatbelt_or_helmet_used").getAttribute("val"): 0));

    
    // //Pedestrian Description
    // data.append(('pedestrian_name'), document.querySelector("#pedestrian_name").value);
    // data.append(('pedestrian_address'), document.querySelector("#pedestrian_address").value);
    // data.append(('pedestrian_age'), document.querySelector("#pedestrian_age").value);
    // data.append(('pedestrian_sex'),(document.querySelector("#pedestrian_sex").hasAttribute("val")?document.querySelector("#pedestrian_sex").getAttribute("val"): 0));
    // data.append(('pedestrian_injury_seriousness'),(document.querySelector("#pedestrian_injury_seriousness").hasAttribute("val")?document.querySelector("#pedestrian_injury_seriousness").getAttribute("val"): 0));
    // data.append(('pedestrian_condition'),(document.querySelector("#pedestrian_condition").hasAttribute("val")?document.querySelector("#pedestrian_condition").getAttribute("val"): 0));
    // data.append(('pedestrian_action'),(document.querySelector("#pedestrian_action").hasAttribute("val")?document.querySelector("#pedestrian_action").getAttribute("val"): 0));
    // data.append(('pedestrian_alcohol_used'),(document.querySelector("#pedestrian_alcohol_used").hasAttribute("val")?document.querySelector("#pedestrian_alcohol_used").getAttribute("val"): 0));


    //Road Description
    data.append('road_runway_type',(document.querySelector("#road_runway_type").hasAttribute("val")?document.querySelector("#road_runway_type").getAttribute("val"): 0));
    data.append('intersection_type',(document.querySelector("#intersection_type").hasAttribute("val")?document.querySelector("#intersection_type").getAttribute("val"): 0));
    data.append('road_description',(document.querySelector("#road_description").hasAttribute("val")?document.querySelector("#road_description").getAttribute("val"): 0));
    data.append('road_surface',(document.querySelector("#road_surface").hasAttribute("val")?document.querySelector("#road_surface").getAttribute("val"): 0));
    data.append('road_condition',(document.querySelector("#road_condition").hasAttribute("val")?document.querySelector("#road_condition").getAttribute("val"): 0));
    data.append('surface_condition',(document.querySelector("#surface_condition").hasAttribute("val")?document.querySelector("#surface_condition").getAttribute("val"): 0));
    data.append('road_construction',(document.querySelector("#road_construction").hasAttribute("val")?document.querySelector("#road_construction").getAttribute("val"): 0));

    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        alert("Data saved");
      }
    };

    xhr.open('POST', '../accident_add/', true);
    xhr.send(data);
  });
}
document.addEventListener("DOMContentLoaded",function(){
	requestserver();
});
