function PageRenderer() {
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        var text = document.createElement("h1");
        text.innerHTML = "Vladimir";
        text.classList.add("test");
        this.mainContainer.appendChild(text);
    }
    this.renderRight = function() {
        
    }
}