<script lang="ts">
    let vote: number;

    export let adjustVotes: (newVote: number) => void;

    const changeVote = (direction: string) => {
        let newVote = 0
        if (direction === 'up') {
            newVote = vote === 1 ? 0 : 1
        }

        if (direction === 'down') {
            newVote = vote === -1 ? 0 : -1
        }

        console.log(newVote)

        vote = newVote;
        adjustVotes(newVote)
    }

    const determineHighlight = (isUp: boolean, isDown: boolean, vote: number) => {
        if (isUp && vote === 1) {
            return 'green'
        }

        if (isDown && vote === -1) {
            return 'red'
        }

        return 'gray'
    }
    
</script>

<style>
    .wrapper {
        float: left;
    }
     .vote-button {
        float: left;
        clear: both;
     }

     .green {
         color: green;
     }

     .red {
         color: red;
     }

     .gray {
         color: gray;
     }
</style>

<div class="wrapper">
    <button class="vote-button up {determineHighlight(true, false, vote)}" on:click={() => changeVote('up')}>
    up
    </button>
    <button class="vote-button down {determineHighlight(false, true, vote)}" on:click={() => changeVote('down')}>
    down
    </button>
</div>