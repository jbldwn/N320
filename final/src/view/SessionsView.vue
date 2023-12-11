<template>
    <section class="sessions">
        <p class="header">Confrence Session Information</p>
        <div class="subHolder">
            <p class="subheader"><span v-if="viewable > 0">{{ viewable }} of </span>10 sessions:</p>
            <div class="btn" @click="clear()">Clear Filters</div>
        </div>

        <div class="sessionDisplay">
            <session-data v-if="viewableSessions == ''" v-for="session in sessions" :key="session.id" :id="session.id"
                :title="session.title" :presenter="session.presenter" :desc="session.desc" :tags="session.tags"
                :sTime="session.sTime" :sDay="session.sDay" @addToSchedule="addToSchedule"
                @filterByCategory="filterByCategory" @filterByPresenter="filterByPresenter" :mySessions="mySessions">
            </session-data>

            <session-data v-else v-for="vSession in viewableSessions" :key="vSession.id" :id="vSession.id"
                :title="vSession.title" :presenter="vSession.presenter" :desc="vSession.desc" :tags="vSession.tags"
                :sTime="vSession.sTime" :sDay="vSession.sDay" @addToSchedule="addToSchedule"
                @filterByCategory="filterByCategory" @filterByPresenter="filterByPresenter" :mySessions="mySessions">
            </session-data>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return { viewableSessions: [], viewable: 0, }
    },
    emits: ["addToSchedule", "filterByCategory", "filterByPresenter"],
    props: {
        sessions:
        {
            id: Number,
            title: String,
            desc: String,
            presenter: String,
            tags: Array,
            sTime: Number,
            sDay: String,
            added: Boolean,
        },
        mySessions: Array

    }, watch: {
        'viewableSessions': {
            handler() {
                console.log("viewableSesions watched");
                this.viewable = this.viewableSessions.length;
            }
        },
    },
    methods: {
        addToSchedule(sID) {
            this.$emit('addToSchedule', sID);
        },
        filterByCategory(sCat) {
            const establishList = [];
            const viewableList = this.viewableSessions;
            if (viewableList == "") {
                this.sessions.filter(function (session) {
                    const tags = session.tags;
                    tags.filter(function (tag) {
                        if (tag === sCat) {
                            establishList.push(session);
                        }
                    })
                })
                this.viewableSessions = establishList;

            } else {
                const newViewableList = [];
                viewableList.filter(function (session) {
                    const tags = session.tags;
                    tags.filter(function (tag) {
                        if (tag === sCat) {
                            newViewableList.push(session)
                        }
                    })
                })
                this.viewableSessions = newViewableList;
            }
        },
        filterByPresenter(speaker) {
            const viewableList = this.viewableSessions
            if (viewableList == "") {
                this.sessions.filter(function (session) {
                    if (session.presenter === speaker) {
                        viewableList.push(session)
                    }
                })
                // this.viewableCount();
            } else {
                const newViewableList = [];
                viewableList.filter(function (session) {
                    if (session.presenter === speaker) {
                        viewableList.push(session)
                    }
                })
                this.viewableSessions = newViewableList;
            }
        },
        clear() {
            this.viewableSessions = [];
            this.viewable = 0;
        }
    },
    compute: {
    }
}
</script>

<style scoped>
.subHolder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.subHolder p {
    margin-bottom: 0;
}

.sessions {
    width: 90vw;
    margin: 30px auto 60px;
}

.header {
    font-size: 24px;
}

.subheader {
    font-size: 12px;
}
</style>