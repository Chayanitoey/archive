<template>
  <div class="filter year-filter">
    <div class="label">Filter by year</div>
    <svg :height="`${filterHeight}px`" :width="`${width}px`">
      <g class="year-bars-all">
        <rect
          v-for="bar in yearData.all"
          :key="`all_${bar[0]}`"
          :x="xScale(bar[0]) + 2"
          :y="filterHeight - yScale(bar[1])"
          :height="yScale(bar[1])"
          :width="xScale.bandwidth()"
        />
      </g>
      <g class="year-bars-filtered">
        <rect
          v-for="bar in yearData.filtered"
          :key="`all_${bar[0]}`"
          :x="xScale(bar[0]) + 2"
          :y="filterHeight - yScale(bar[1])"
          :height="yScale(bar[1])"
          :width="xScale.bandwidth()"
        />
      </g>
      <g class="year-labels">
        <text
          v-for="text in yearData.all"
          :key="text[0]"
          :x="xScale(text[0]) + xScale.bandwidth() / 2 + 2"
          :y="filterHeight - 3"
        >
          {{ text[0] }}
        </text>
      </g>
      <g ref="yearBrush" class="year-brush" />
    </svg>
  </div>
</template>

<script>
import { select } from 'd3-selection'
import { scaleLinear, scaleBand } from 'd3-scale'
import { max, bisectCenter } from 'd3-array'
import { brushX } from 'd3-brush'

export default {
  name: 'BarFilter',
  expose: [],
  props: {
    filterHeight: {
      type: Number,
      default: 0,
    },
    selectedYear: {
      type: Number,
      default: 2022,
    },
    yearData: {
      type: () => Object,
      default: {},
    },
  },
  emits: ['on-year-change'],
  data() {
    return {
      width: 250,
    }
  },
  computed: {
    brush() {
      return brushX().on('end', this.brushed)
    },
    xScale() {
      return scaleBand()
        .domain(this.yearData.all.map((d) => d[0]))
        .range([0, this.width])
        .paddingInner(0.1)
    },
    yScale() {
      return scaleLinear()
        .domain([0, max(this.yearData.all, (d) => d[1])])
        .range([0, this.filterHeight])
    },
  },
  mounted() {
    select(this.$refs.yearBrush).call(this.brush)
  },
  methods: {
    brushed({ selection, sourceEvent }) {
      if (!sourceEvent) {
        return
      }
      const domain = this.xScale.domain()
      const fullRange = [
        ...domain.map(this.xScale),
        this.xScale.range()[1],
      ]
      if (selection && selection.length) {
        const newSelection = [
          domain[bisectCenter(fullRange, selection[0])],
          domain[bisectCenter(fullRange, selection[1]) - 1], // correct for index
        ]
        this.$emit('on-year-change', newSelection)
        select(this.$refs.yearBrush).call(
          this.brush.move,
          [newSelection[0], newSelection[1] + 1].map(this.xScale) // correct for brush stopping at left of bar
        )
      } else if (
        this.selectedYear[0] === domain[0] ||
        this.selectedYear[1] === domain[1]
      ) {
        // if selection is full domain (ie no filter applied), click selects one bar
        const target = sourceEvent.layerX - this.xScale.bandwidth() / 2 // target bar's horizontal center
        const newSelection = [
          domain[bisectCenter(fullRange, target)],
          domain[bisectCenter(fullRange, target)],
        ]
        this.$emit('on-year-change', newSelection)
        select(this.$refs.yearBrush).call(
          this.brush.move,
          [newSelection[0], newSelection[1] + 1].map(this.xScale) // correct for brush stopping at left of bar
        )
      } else {
        // otherwise, reset to full domain
        this.$emit('on-year-change', [
          domain[0],
          domain[domain.length - 1],
        ])
      }
    },
  },
}
</script>

<style>
.label {
  font-size: 11px;
  text-align: left;
  padding-bottom: 5px;
}

.year-bars-all rect {
  fill: #dddddd;
}
.year-bars-filtered rect {
  fill: black;
  transition: all 0.5s;
}
.year-labels text {
  fill: white;
  font-size: 9px;
  text-anchor: middle;
}
</style>
