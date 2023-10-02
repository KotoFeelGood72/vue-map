<template>
  <div class="bar" :style="barStyles">
    <div class="bar-bg" :class="{'active': sidebarPositionPercentage === -80}" @click="closeBar"></div>
    <div class="bar-main" 
        ref="barMain"
        @touchstart="startDragging"
        @touchmove="handleDragging"
        @touchend="stopDragging"
        @mousedown="startDragging"
        @mousemove="handleDragging"
        @mouseup="stopDragging"
      >
      <div class="top-bar">
        <div class="drag">
        <div class="drag-bar"></div>
      </div>
        <input-search @focusSearch="openShutter"/>
        <v-menu @selectTab="selectTabs" />
      </div>
      <div class="scroll-area">
        <v-custom-menu :class="{'top-position-menu': sidebarPositionPercentage === 0}"/>
        <div class="tabs">
          <div class="tab" v-for="(item, i) in menu" :key="'tabs-' + i">
            <div v-if="activeTab === i">
              <list-section v-if="i === 0" :title="item.name" />
              <list-section v-else :title="item.name + ' поблизости'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputSearch from "@/components/bar/inputs/input-search.vue";
import vMenu from "@/components/bar/menu/v-menu.vue";
import vCustomMenu from "@/components/bar/menu/v-custom-menu.vue";
import listSection from "@/components/bar/list/list-section.vue";
import { menu } from "./menu/menu.js";

export default {
  components: {
    inputSearch,
    vMenu,
    vCustomMenu,
    listSection,
  },
  data() {
    return {
      activeTab: 0,
      menu,
      isDragging: false,
      startY: 0,
      currentY: 0,
      sidebarPositionPercentage: 0,
    };
  },
  computed: {
    barStyles() {
       return {
        top: `calc(90% + ${this.sidebarPositionPercentage}%)`,
      };
    },
  },
  methods: {
    selectTabs(index) {
      this.activeTab = index;
    },
    startDragging(event) {
      this.isDragging = true;
      this.startY = event.touches[0].clientY;
      this.currentY = this.startY;
    },
    handleDragging(event) {
      if (this.isDragging) {
        const deltaY = event.touches ? event.touches[0].clientY - this.currentY : event.clientY - this.currentY;
        const screenHeight = window.innerHeight;
        const percentageChange = (deltaY / screenHeight) * 100;

        if (this.sidebarPositionPercentage + percentageChange >= 0) {
          this.sidebarPositionPercentage = 0;
        } else {
          this.sidebarPositionPercentage += percentageChange;
        }

        this.currentY = event.touches ? event.touches[0].clientY : event.clientY;
      }
    },
    stopDragging() {
      this.isDragging = false;
      this.snapToNearestPosition();
    },
    snapToNearestPosition() {
      const positions = [-50, -80, 0];
      const closestPosition = positions.reduce(
        (closest, position) => {
          const distance = Math.abs(
            this.sidebarPositionPercentage - position
          );
          if (distance < closest.distance) {
            return { distance, position };
          }
          return closest;
        },
        { distance: Infinity, position: null }
      );
      if (closestPosition.position !== null) {
        this.sidebarPositionPercentage = closestPosition.position;
      }
    },
    closeBar() {
      this.sidebarPositionPercentage = 0;
    },
    openShutter() {
      this.sidebarPositionPercentage = -80;
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }, 100); 
    },
  },
};
</script>

<style lang="scss" scoped>
.drag {
  padding: 7px 0;
  position: relative;
  z-index: 999;
  touch-action: pan-x;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.bar-main {
  position: relative;
  z-index: 2;
  background-color: #fff;
  height: 100%;
}

.scroll-area {
  max-height: 100%;
  overflow-y: auto;
}

.drag-bar {
  width: 60px;
  height: 4px;
  background-color: rgb(17, 221, 187);
  margin: 0 auto;
  border-radius: 100px;
}
.bar {
  position: fixed;
  // top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  z-index: 999;
}

.top-bar {
  padding: 0 10px 10px 10px;
  box-shadow: 0 0 20px 0 #0000001f;
}

.tabs {
  
  .tab {
    &>div {
      height: 100%;
    }
  }
}

.top-position-menu {
  position: absolute;
  bottom: calc(100% - 5px);
}

.bar-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: -1;
  pointer-events: none;
  transition: all .3s ease;
  opacity: 0;
  visibility: hidden;

  &.active {
    top: -100%;
    opacity: .7;
    visibility: visible;
    pointer-events: all;
  }
}
</style>
