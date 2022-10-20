<template>
  <div class="apply-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="moveHome"
      >&lt; 返回</span>
      <span>用证申请</span>
      <span />
    </div>

    <van-form>
      <van-cell>
        <template #title>
          <van-col span="12">姓名</van-col>
          <van-col span="12">庄晨忠</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">出生日期</van-col>
          <van-col span="12">1969-06-26</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">性别</van-col>
          <van-col span="12">
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">籍贯</van-col>
          <van-col span="12">福清市</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">民族</van-col>
          <van-col span="12">汉族</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">政治面貌</van-col>
          <van-col span="12">中国共产党员</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">身份证号码</van-col>
          <van-col span="12">350102196906260411</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">文化程度</van-col>
          <van-col span="12">硕士学位</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">工作部门</van-col>
          <van-col span="12">福州大学纪委</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">职务</van-col>
          <van-col span="12">研究员</van-col>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <van-col span="12">联系电话</van-col>
          <van-col span="12">13559430571</van-col>
        </template>
      </van-cell>

      <van-cell>
        <template #title>
          <van-col span="12">选择证件</van-col>
          <van-col span="12">
            <van-field
              readonly
              clickable
              name="picker"
              :value="value"
              placeholder="请选择申请的证件"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>
          </van-col>
        </template>
      </van-cell>

      <van-cell v-if="value">
        <template #title>
          <van-col span="12">开始时间</van-col>
          <van-col span="12">
            <van-field
              v-model="valueTime"
              readonly
              placeholder="选择开始时间"
              @click="showPickerTime = true"
            />
            <van-popup v-model="showPickerTime" position="bottom">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirmStartTime"
                @change="changeFn()"
                @cancel="showPickerTime = false"
              />
            </van-popup>
          </van-col>
        </template>
      </van-cell>
      <van-cell v-if="value">
        <template #title>
          <van-col span="12">结束时间</van-col>
          <van-col span="12">
            <van-field
              v-model="valueTimeEnd"
              readonly
              placeholder="选择结束时间"
              @click="showPickerTimeEnd = true"
            />
            <van-popup v-model="showPickerTimeEnd" position="bottom">
              <van-datetime-picker
                v-model="currentDateEnd"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirmEndTime"
                @change="changeFn()"
                @cancel="showPickerTimeEnd = false"
              />
            </van-popup>
          </van-col>
        </template>
      </van-cell>
      <van-cell v-if="value">
        <template #title>
          <van-col span="12">具体地点</van-col>
          <van-col span="12">
            <van-field
              v-model="location"
              placeholder="请输入具体地点"
              :rules="[{ required: true}]"
            />
          </van-col>
        </template>
      </van-cell>
      <van-cell v-if="value">
        <template #title>
          <van-col span="12">使用事由</van-col>
          <van-col span="12">
            <van-field
              v-model="reason"
              placeholder="请输入具体事由"
              :rules="[{ required: true}]"
            />
          </van-col>
        </template>
      </van-cell>
    </van-form>

    <div class="btn">
      <van-button
        color="#b13a3d"
        round
        style="width: 80vw;"
      >
        提交
      </van-button>
    </div>
    <van-overlay :show="isOvershow">
      <div class="wrapper">
        <div class="block">
          <p class="c-head">
            行前教育
          </p>
          <div class="content">
            <p> 根据国家和省外办相关规定，为加强我校因公出国（境）教师的政治意识、组织意识和纪律意识，特明确相关纪律要求如下： </p>
            <p> 一、请登录中国领事服务网http://cs.mfa.gov.cn,浏览有关注意事项和安全提示，注意了解往访国的安全形势和当地治安状况，如遇突发事件或紧急情况，尽量减少外出或避开人群密集、敏感场所，必要时请报警并寻求中国驻当地使领馆的协助。 </p>
            <p> 二、增强大局意识，对外交往中，要忠于使命，认真履责，谨守纪律，切实维护国家以及学校的形象和利益。 </p>
            <p> 三、自觉遵守保密法律法规，严守保密纪律。增强安全保密意识，未经批准，不得携带涉密载体（包括纸质文件和电磁介质等)；妥善保管内部材料，未经批准，不得对外提供内部文件和资料（如批件、出国（境）申请表、经费情况表、备案表等）；不在非保密场所谈论涉密事项；不得泄露国家秘密和商业秘密。严禁使用个人电脑、手机或其他非涉密载体处理、存储涉密信息。 </p>
            <p> 四、教师出访“在外停留天数”和“出访时间”均有特定的计算方法和严格的规定（根据中办发〔2013〕16号文及省外办规定）。例如，经审批，出访时间：2018年8月1日离境（指中国边检出境章日期）～2018年8月5日回抵境内（指中国边检入境章日期），您选择航班和办理通关手续时，须保证护照（或通行证）上加盖的中国边检出、入境章日期分别为2018-08-01、2018-08-05（注：中国边检出境章日期视作离境日期，中国边检入境章日期视作回抵境内日期；如在京、沪、广、厦等地通关离境或入境通关，离境日期可能不同于离开福州的日期，回抵境内日期也可能不同于回到福州的日期）中国边检出、入境章日期均计入在外停留天数，故此例中，在外停留天数为5天。教师出访严禁超期，即，在外停留天数不得超过批准天数。 </p>
            <p> 五、严格按批准的往访国别、地区和在外停留时间（离、抵境当日计入在外停留时间）合理安排行程，不得擅自延长在外停留时间；未经批准不得变更出访路线（特别是境外路线），增加出访国家、地区或城市（包括转机），前往与出访任务无关的国家、地区或城市考察、观光，或以任何理由绕道旅行。经批准，需在第三国（地区）转机的，不可出机场。 </p>
            <p>...</p>
          </div>
          <div class="btn">
            <van-button
              color="#b13a3d"
              round
              :disabled="isAbled"
              @click="isOvershow = false"
            >
              已阅读并同意({{ time }}s)
            </van-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'Apply',
  data () {
    return {
      // 定时器
      timer: '',
      // 遮盖层显示
      isOvershow: true,
      // 按钮禁用
      isAbled: true,
      time: 3,
      // 用证申请表格
      form: {
        username: '庄晨忠',
        password: ''
      },
      radio: '1',
      columns: ['外交护照', '公务护照', '普通护照', '港澳通行证', '台湾通行证', '双程证'],
      showPicker: false,
      value: '', // 护照类型
      minDate: new Date(),
      maxDate: new Date(2050, 10, 20),
      currentDate: new Date(), // 开始时间
      changeDate: new Date(),
      valueTime: '', // 开始时间
      showPickerTime: false, // 开始时间
      currentDateEnd: new Date(),
      showPickerTimeEnd: false,
      valueTimeEnd: '',
      location: '',
      reason: ''
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time--
      }
      if (this.time === 0) {
        this.isAbled = false
      }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    moveHome () {
      this.$router.push('/home')
    },
    onSubmit (values) {
      console.log('submit', values)
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    onConfirmStartTime () {
      this.valueTime = this.timeFormat(this.currentDate)
      this.showPickerTime = false
    },
    onConfirmEndTime () {
      this.valueTimeEnd = this.timeFormat(this.currentDateEnd)
      this.showPickerTimeEnd = false
    },
    timeFormat (time) { // 时间格式化
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      return year + '-' + month + '-' + day
    },
    changeFn () {
      this.changeDate = this.currentDate
    }
  }
}
</script>

<style scoped lang="scss">
  .apply-container {
    height: 100%;

    .top {
      display: flex;
      justify-content: space-around;
      height: 8vh;
      line-height: 8vh;
      color: #fff;
      text-align: center;
      background-color: #b13a3d;
    }

    .wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .block {
      width: 80vw;
      height: 75vh;
      padding: 4vw;
      margin: 20vw 4vw;
      background-color: #fff;
      border-radius: 5.33333vw;

      .c-head {
        font-size: 4.53333vw;
        font-weight: 500;
        line-height: 1.6;
        text-align: center;
      }

      .content {
        height: 60vh;
        margin-top: 3vh;
        overflow: hidden;
        overflow-y: scroll;
        font-size: 3.6vw;
        line-height: 1.4;
        text-indent: 2em;
      }
    }

    .value {
      margin-right: 20vw;
    }

    .btn {
      width: 80%;
      height: 7vh;
      margin: 2vh auto;
      text-align: center;
    }

    // .van-cell::before {
    //   position: absolute;
    //   left: 8px;
    //   font-size: 14px;
    //   color: #ee0a24;
    //   content: "*";
    // }
  }
</style>
