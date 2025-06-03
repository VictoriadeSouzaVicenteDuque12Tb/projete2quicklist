const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false

        }

        items.push(item)

        document.querySelector("#item").value = ""
        showItemsList()
}
function showItemsList(){
    const sectipnList = document.querySelector(".list")
    sectipnList.textContent = ""
    items.map((item, index) => {
        sectipnList.innerHTML += `
        <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-1">
                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-1">${item.name}</label>
                </div>

            <button>
                <img src="./assets/trash-icon.svg" alt="trash icon">
            </button>
        </div>
        `
    })
}