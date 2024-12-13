import Sortable from "../../vendor/sortable"

const SortableInputsFor = {
  mounted(){
    new Sortable(this.el, {
      animation: 150,
      dragClass: "drag-item",
      ghostClass: "drag-ghost",
      handle: "[data-handle]",
      onEnd: () => {
        this.el.closest("form").querySelector("input").dispatchEvent(new Event("input", {bubbles: true}))
      }
    })
  }
}

export default SortableInputsFor;
