<script>
    import "../../css/model.css"
    
    export let open = [false];
    export let title;
    export let from;
    export let to;
    export let tafseer;
    export let note;

    function closeModal() {
        note = localStorage.getItem(title) || '';
        open[0] = false;
        document.querySelector("body").style.overflow = "auto";
    }

    async function saveNote() {
        localStorage.setItem(title, note);
        closeModal();

        // The next line makes some issues when closing the model using "Save" button
        // then click on another Ayah, it will load the old note...
        // why ? cause not all processes done when this alert run.
        alert(note);
    }

</script>
{#if open[0]}
    <div class="modal">
        <button class="modal-background" on:click={closeModal}></button>
        <div class="modal-box">
            <div class="modal-navbar">
                <button class="modal-close" on:click={closeModal}>رجوع</button>
                <div class="modal-title">{from}-{to}</div>
                <div class="modal-close"></div>
            </div>
            <div class="modal-inner-box">
                <p class="binding">
                    التّفْصيْلُ الموضوعِي {from}-{to}:
                    <br />
                    {tafseer}
                </p>
                <br />
                <h2 class="binding">
                    ملاحظاتك:
                    <br>
                    {note}
                </h2>
                <span class="input-label" aria-label="إضافة ملاحظة" id="_label-0">
                    إضافة ملاحظة
                </span>
                <input type="text" placeholder="اكتـب ملاحـظتك" class="modal-notes" bind:value={note}>
                <button class="modal-button" on:click={saveNote}>
                    حفظ
                </button>
            </div>
        </div>
    </div>
{/if}