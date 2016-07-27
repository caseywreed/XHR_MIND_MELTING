var Predator = (function () {


  return {
    getCarnivores: function (callback) {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", "carnivores.json")
      xhr.addEventListener("load", function() {
        var carnivores = JSON.parse(xhr.responseText)
        callback(carnivores) //Execute the callback within this function or else you don't have access to it
      })
      xhr.send()
    },

    getHerbivores: function (callback) {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", "herbivores.json")
      xhr.addEventListener("load", function() {
        herbivores = JSON.parse(xhr.responseText)
        callback(herbivores) //Execute the callback within this function or else you don't have access to it
      })
      xhr.send()
    }
  }
}())


