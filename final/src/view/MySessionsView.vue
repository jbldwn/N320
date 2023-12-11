<template>
    <section class="sessions">
        <p class="header">User Sessions</p>
        <div class="subHolder">
            <p class="subheader"><span v-if="viewable > 0">{{ viewable }} </span>sessions have been added</p>
        </div>
        <div class="sessionDisplay">
            <my-session-data v-for="session in mySessions" :key="session.id" :id="session.id" :title="session.title"
                :sTime="session.sTime" :sDay="session.sDay">
            </my-session-data>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return { viewable: 0 }
    },
    props: {
        mySessions:
        {
            id: Number,
            title: String,
            sTime: Number,
            sDay: String,
        },
    },
    computed: {
        leTime() {
            if (this.sTime > 12) {
                let time = this.sTime - 12;
                return `${time} PM`
            } else {
                return `${this.sTime} AM`
            }
        },

    },
    watch: {
        'mySessions': {
            handler() {
                console.log("viewableSesions watched");
                console.log(this.mySessions.length);
                this.viewable = this.mySessions.length;
            }
        },
    }
}
</script>

<style scoped>
.sessionDisplay {
    border-radius: 30px;
    border: solid 2px lightgray;
    padding: 30px;
    margin: 30px 0;
}

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