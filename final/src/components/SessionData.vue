<template>
    <div class="session">
        <div class="top">
            <div class="horizontal">
                <h1>{{ title }}</h1>
                <div v-show="matchCheck(id)" @click="addToSchedule(id)" class="add">Add Item</div>
            </div>
            <div class="horizontal">
                <h4 class="presenter">Presented by: <span @click="filterByPresenter(presenter)">{{ presenter }}</span></h4>
                <h4 class="schedule">{{ sDay }} at {{ leTime }}</h4>
            </div>
        </div>

        <div class="bottom">
            <p>{{ desc }}</p>
            <div class="categories">
                <h5>Categories:</h5>
                <div v-for="tag in tags" @click="filterByCategory(tag)" class="tag">{{ tag }}</div>
                <!-- (compute needs to be passed from sessionsView to filter similar categories) -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    emits: ["addToSchedule", "filterByCategory", "filterByPresenter"],
    props: {
        id: Number,
        title: String,
        desc: String,
        presenter: String,
        tags: Array,
        sTime: Number,
        sDay: String,
        added: Boolean,
        mySessions: Array,
    },
    computed: {
        leTime() {
            if (this.sTime > 12) {
                let time = this.sTime - 12;
                return `${time} PM`
                // return `Time PM`

            } else {
                return `${this.sTime} AM`
            }
        },

    },
    methods: {
        addToSchedule(sID) {
            this.$emit('addToSchedule', sID);
        },
        filterByCategory(sCat) {
            this.$emit('filterByCategory', sCat);
        },
        filterByPresenter(speaker) {
            this.$emit('filterByPresenter', speaker);
        },
        matchCheck(id) {
            const mySessions = this.mySessions
            if (mySessions != "") {
                mySessions.forEach((session) => {
                    if (session.id === id) {
                        return false
                    }
                })
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>
.session {
    border-radius: 30px;
    border: solid 2px lightgray;
    padding: 30px;
    margin: 30px 0;
}

.presenter span {
    cursor: pointer;
    margin-left: 10px;
}



span,
h5 {
    color: gray;
    margin: 0;
}

.categories {
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.tag,
.add {
    background-color: lightsalmon;
    color: darkred;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    margin-left: 15px;
    cursor: pointer;
}

.add,
.schedule {
    margin-left: 30px;
    width: fit-content;
    flex-wrap: nowrap;
}

.top {
    border-bottom: 2px solid gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.horizontal {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;
}

.bottom {
    margin: 16px 0 0;
}
</style>