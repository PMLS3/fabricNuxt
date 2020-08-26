<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="demo-basic-card">
    <div class="vx-row">
      <div class="w-full vx-col sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <div slot="no-body">
            <img
              :src="card_1.img"
              alt="content-img"
              class="responsive card-img-top"
            />
          </div>
          <h5 class="mb-2">{{ card_1.title }}</h5>
          <p class="text-grey">{{ card_1.subtitle }}</p>
          <p class="text-grey">{{ card_1.subtitle_2 }}</p>
          <div class="flex flex-wrap justify-between">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >Download</vs-button
            >
            <vs-button class="mt-4" type="border" color="#b9b9b9"
              >View All</vs-button
            >
          </div>
        </vx-card>
      </div>

      <div class="w-full vx-col sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <img
            :src="card_2.img"
            alt="content-img"
            class="rounded-lg responsive"
          />
          <div class="my-6">
            <h5 class="mb-2">{{ card_2.title }}</h5>
            <p class="text-grey">{{ card_2.subtitle }}</p>
          </div>
          <vs-divider></vs-divider>
          <div class="flex flex-wrap justify-between">
            <span>
              <p class="text-xl">{{ card_2.footer_text_left_value }}</p>
              <p class="text-grey">{{ card_2.footer_text_left_label }}</p>
            </span>
            <span>
              <p class="text-xl">{{ card_2.footer_text_right_value }}</p>
              <p class="text-grey">{{ card_2.footer_text_right_label }}</p>
            </span>
          </div>
        </vx-card>
      </div>

      <!-- CONTENT CARD - PROGRESS BAR/GOAL -->
      <div class="w-full vx-col sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card>
          <img
            :src="card_3.img"
            alt="content-img"
            class="rounded-lg responsive"
          />
          <div class="my-6">
            <h5 class="mb-2">{{ card_3.title }}</h5>
          </div>
          <div class="mb-4">
            <div class="flex justify-between">
              <small class="font-semibold">{{ card_3.current_progress }}</small>
              <small class="text-grey">{{ card_3.progress_goal }}</small>
            </div>
            <vs-progress
              :percent="card_3.progress_done_per"
              class="block mt-1 shadow-md"
            ></vs-progress>
          </div>
          <div class="flex flex-wrap justify-between">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >{{ card_3.btn_left_text }}</vs-button
            >
            <vs-button class="mt-4" type="border" color="#b9b9b9">{{
              card_3.btn_right_text
            }}</vs-button>
          </div>
        </vx-card>
      </div>

      <!-- USER PROFILE CARD 2 - MINIMAL -->
      <div class="w-full vx-col sm:w-1/2 lg:w-1/3 mb-base">
        <vx-card class="p-2">
          <vs-avatar
            class="block mx-auto mb-6"
            size="80px"
            :src="card_4.userImg"
          />
          <div class="text-center">
            <h4>{{ card_4.name }}</h4>
            <p class="text-grey">{{ card_4.profession }}</p>
          </div>
          <div class="flex flex-wrap justify-between">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >{{ card_4.btn_1_text }}</vs-button
            >
            <vs-button class="mt-4" type="border" color="#b9b9b9">{{
              card_4.btn_2_text
            }}</vs-button>
          </div>
          <template slot="footer">
            <vs-divider />
            <div class="flex justify-between">
              <span class="flex items-center">
                <feather-icon
                  :icon="card_4.footer_text_1_icon"
                  svg-classes="h-5 w-5 text-warning stroke-current"
                />
                <span class="ml-2">{{ card_4.footer_text_1 }}</span>
              </span>
              <span class="flex items-center">
                <feather-icon
                  :icon="card_4.footer_text_2_icon"
                  svg-classes="h-5 w-5 text-primary stroke-current"
                />
                <span class="ml-2">{{ card_4.footer_text_2 }}</span>
              </span>
            </div>
          </template>
        </vx-card>
      </div>

      <!-- USER PRODFILE CARD -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card class="p-2">
          <div class="text-center">
            <h4>{{ card_5.name }}</h4>
            <p class="text-grey">{{ card_5.profession }}</p>
          </div>
          <vs-avatar
            class="block mx-auto my-6"
            size="80px"
            :src="card_5.userImg"
          />
          <div class="flex justify-between text-center">
            <span>
              <p class="text-xl font-semibold">
                {{ card_5.user_meta_1_title }}
              </p>
              <small class="text-grey">{{ card_5.user_meta_1_label }}</small>
            </span>
            <span>
              <p class="text-xl font-semibold">
                {{ card_5.user_meta_2_title }}
              </p>
              <small class="text-grey">{{ card_5.user_meta_2_label }}</small>
            </span>
            <span>
              <p class="text-xl font-semibold">
                {{ card_5.user_meta_3_title }}
              </p>
              <small class="text-grey">{{ card_5.user_meta_3_label }}</small>
            </span>
          </div>
          <vs-button
            type="gradient"
            class="w-full mt-6"
            color="#7367F0"
            gradient-color-secondary="#CE9FFC"
            >{{ card_5.btn_text }}</vs-button
          >
        </vx-card>
      </div>

      <!-- USER PROFILE CARD - SCORE -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card class="p-2">
          <vs-avatar
            class="block mx-auto mb-6"
            size="80px"
            :src="card_6.userImg"
          />
          <div class="text-center">
            <h4>{{ card_6.name }}</h4>
            <p class="text-grey">{{ card_6.profession }}</p>
          </div>
          <div class="mb-4 mt-base">
            <div class="flex justify-between">
              <small class="font-semibold">{{ card_6.current_progress }}</small>
              <small class="text-grey">{{ card_6.progress_goal }}</small>
            </div>
            <vs-progress
              :percent="card_6.progress_done_per"
              class="block mt-1 shadow-md"
            ></vs-progress>
          </div>
          <div class="flex flex-wrap justify-between">
            <vs-button
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="#7367F0"
              gradient-color-secondary="#CE9FFC"
              >{{ card_6.btn_left_text }}</vs-button
            >
            <vs-button class="mt-4" type="border" color="#b9b9b9">{{
              card_6.btn_right_text
            }}</vs-button>
          </div>
        </vx-card>
      </div>

      <!-- OVERLAY CARD -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card class="overflow-hidden overlay-card">
          <template slot="no-body">
            <img
              :src="card_7.overlay_img"
              alt="user-profile-cover"
              class="responsive"
            />
            <div class="flex flex-col justify-between text-white card-overlay">
              <h4 class="mb-4 text-white">{{ card_7.title }}</h4>
              <p>{{ card_7.text }}</p>
            </div>
          </template>
        </vx-card>
      </div>

      <!-- OVERLAY CARD 2 -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card class="overflow-hidden overlay-card">
          <template slot="no-body">
            <img
              :src="card_8.overlay_img"
              alt="user-profile-cover"
              class="responsive blur-1"
            />
            <div class="text-white card-overlay">
              <div class="flex flex-col justify-between h-full">
                <div class="w-full mt-8 text-center">
                  <h3 class="mb-2 tracking-wide text-white">
                    {{ card_8.weather }}
                  </h3>
                  <p class="mb-6">{{ card_8.place_name }}</p>
                  <div class="flex justify-around">
                    <feather-icon
                      :icon="card_8.weather_icon"
                      svg-classes="w-24 h-24 text-white"
                    />
                    <h2 class="text-white text-big">
                      {{ card_8.temperature }} <sup class="text-2xl">o</sup>
                    </h2>
                  </div>
                </div>
                <div class="w-full text-center">
                  <div
                    v-for="meta in card_8.meta"
                    :key="meta.label"
                    class="flex justify-between px-8 mb-8 text-xl"
                  >
                    <span>{{ meta.label }}</span>
                    <span>{{ meta.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </vx-card>
      </div>

      <!-- CHAT CARD -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card title="Chat" class="overflow-hidden">
          <template slot="no-body">
            <div class="chat-card-log">
              <!-- <VuePerfectScrollbar ref="chatLogPS" class="px-6 pt-6 scroll-area" :settings="settings" :key="$vs.rtl"> -->
              <ul ref="chatLog">
                <li
                  v-for="(msg, index) in chatLog"
                  :key="index"
                  class="flex items-start"
                  :class="{ 'flex-row-reverse': msg.isSent, 'mt-4': index }"
                >
                  <vs-avatar
                    size="40px"
                    class="flex-shrink-0 m-0"
                    :class="msg.isSent ? 'ml-3' : 'mr-3'"
                    :src="msg.senderImg"
                  ></vs-avatar>
                  <div
                    class="relative max-w-md px-4 py-3 mb-2 bg-white rounded-lg shadow-md msg"
                    :class="{
                      'chat-sent-msg bg-primary-gradient text-white':
                        msg.isSent,
                      'border border-solid d-theme-border-grey-light': !msg.isSent
                    }"
                  >
                    <span>{{ msg.msg }}</span>
                  </div>
                </li>
              </ul>
              <!-- </VuePerfectScrollbar> -->
            </div>
            <div class="flex p-6 bg-white chat-input-container">
              <vs-input
                v-model="chatMsgInput"
                class="w-full mr-3"
                placeholder="Type Your Message"
                @keyup.enter="chatMsgInput = ''"
              ></vs-input>
              <vs-button
                icon-pack="feather"
                icon="icon-send"
                @click="chatMsgInput = ''"
              ></vs-button>
            </div>
          </template>
        </vx-card>
      </div>

      <!-- CONTENT CARD - ICONS -->
      <div class="w-full vx-col lg:w-1/3 sm:w-1/2 mb-base">
        <vx-card
          v-if="card_9.title"
          :title="card_9.title"
          :subtitle="card_9.subtitle"
        >
          <template slot="actions">
            <feather-icon
              icon="MoreVerticalIcon"
              svg-classes="w-6 h-6 text-grey"
            ></feather-icon>
          </template>
          <img
            :src="card_9.img"
            alt="content-img"
            class="rounded-lg responsive"
          />
          <div class="flex flex-wrap mt-6">
            <span class="flex mr-6">
              <feather-icon
                class="cursor-pointer"
                icon="ThumbsUpIcon"
                svg-classes="text-success stroke-current h-6 w-6"
              />
              <span class="ml-2">{{ card_9.meta.likes }}</span>
            </span>
            <span class="flex mr-6">
              <feather-icon
                class="cursor-pointer"
                icon="MessageSquareIcon"
                svg-classes="text-primary stroke-current h-6 w-6"
              />
              <span class="ml-2">{{ card_9.meta.comments }}</span>
            </span>
            <span class="flex mr-6">
              <feather-icon
                class="cursor-pointer"
                icon="ThumbsDownIcon"
                svg-classes="text-danger stroke-current h-6 w-6"
              />
              <span class="ml-2">{{ card_9.meta.dislikes }}</span>
            </span>
          </div>
        </vx-card>
      </div>

      <div class="w-full vx-col lg:w-2/3 mb-base">
        <vx-card class="overflow-hidden">
          <template slot="no-body">
            <!-- <video-player ref="player" class="media-video-player card-video" :options="playerOptions" /> -->
          </template>
        </vx-card>
      </div>

      <!-- ACTIVITY TIMELINE -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 mb-base">
        <vx-card title="Activity Timeline">
          <vx-timeline :data="timelineData"></vx-timeline>
        </vx-card>
      </div>

      <div class="w-full vx-col sm:w-1/2 md:w-1/2 mb-base">
        <vx-card title="Contact Form">
          <vs-input v-model="name" placeholder="Name" class="w-full mb-4" />
          <vs-input
            v-model="email"
            placeholder="Email"
            type="email"
            class="w-full mb-4"
          />
          <vs-textarea v-model="msg" label="Message" />
          <vs-button class="mr-4" @click="name = email = msg = ''"
            >Submit</vs-button
          >
          <vs-button
            type="border"
            color="warning"
            class="mt-3"
            @click="name = email = msg = ''"
            >Cancel</vs-button
          >
        </vx-card>
      </div>
    </div>

    <!-- CARD WITH TABS COMPONENT -->
    <div class="vx-row match-height">
      <!-- SIMPLE CARD WITH TABS -->
      <div class="w-full vx-col md:w-1/2 mb-base">
        <vx-card>
          <vs-tabs>
            <vs-tab vs-label="HTML">
              <div class="mt-3">
                <p>
                  Lollipop chocolate cake muffin pudding biscuit cheesecake.
                  Pudding biscuit caramels jelly beans caramels. Pie macaroon
                  wafer danish sweet caramels. Icing jelly-o cotton candy sweet
                  roll brownie marshmallow marzipan icing. Candy canes apple pie
                  icing. Tart macaroon pastry caramels chocolate bar. Gummies
                  cupcake sesame snaps chocolate cookie sugar plum bear claw.
                  Cheesecake chocolate cake dessert bear claw candy tiramisu
                  soufflé.
                </p>
              </div>
            </vs-tab>
            <vs-tab vs-label="JS">
              <div class="mt-3">
                <p>
                  Wafer sesame snaps toffee brownie liquorice danish icing
                  fruitcake croissant. Gingerbread chocolate cake danish pie
                  gingerbread. Muffin donut fruitcake powder jelly lemon drops
                  cheesecake. Croissant oat cake carrot cake tiramisu halvah.
                  Cupcake cupcake wafer muffin topping danish cheesecake
                  croissant. Liquorice donut liquorice lollipop sesame snaps
                  lollipop ice cream macaroon danish. Cupcake chocolate cake
                  chupa chups gummi bears macaroon.
                </p>
              </div>
            </vs-tab>
            <vs-tab vs-label="OUTPUT">
              <div class="mt-3">
                <p>
                  Cookie cheesecake fruitcake sweet roll gummi bears marzipan
                  marshmallow marshmallow. Cheesecake muffin jujubes chocolate
                  cake carrot cake jujubes croissant. Cake toffee carrot cake
                  topping oat cake lemon drops toffee toffee marzipan.
                  Gingerbread toffee marshmallow marshmallow caramels brownie
                  donut cake. Cheesecake candy topping tart cotton candy
                  chocolate bar jujubes powder chupa chups. Cupcake candy
                  soufflé jelly beans. Icing lollipop tiramisu oat cake dessert.
                </p>
              </div>
            </vs-tab>
          </vs-tabs>
        </vx-card>
      </div>

      <!-- CARD WITH VERTICAL TABS -->
      <div class="w-full vx-col md:w-1/2 mb-base">
        <vx-card>
          <template slot="no-body">
            <vs-tabs vs-position="left" vs-alignment="fixed">
              <vs-tab vs-label="Features">
                <div class="pl-2 mt-1">
                  <p>
                    Powder halvah dragée. Powder cupcake bear claw cookie sugar
                    plum. Danish sesame snaps sugar plum brownie. Carrot cake
                    fruitcake chocolate cake jelly beans toffee. Icing chocolate
                    brownie. Biscuit candy canes jelly-o bonbon wafer jujubes.
                    Chocolate cake sweet roll jelly-o chocolate bar. Liquorice
                    tootsie roll ice cream sweet. Candy pie donut caramels
                    bonbon macaroon dragée chupa chups gingerbread. Dragée
                    fruitcake jujubes. Brownie caramels muffin caramels jelly
                    apple pie.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Products">
                <div class="pl-2 mt-1">
                  <p>
                    Cotton candy dessert dragée bonbon jelly beans icing sweet
                    roll. Sesame snaps cake dessert chupa chups sweet powder
                    biscuit. Jelly beans caramels croissant cheesecake.
                    Liquorice chocolate cake macaroon cake. Fruitcake croissant
                    carrot cake cookie halvah sesame snaps toffee. Cake tootsie
                    roll cake jelly beans croissant sugar plum jujubes. Bear
                    claw sesame snaps lollipop. Pudding biscuit donut sweet roll
                    pie apple pie wafer jelly beans brownie. Lemon drops ice
                    cream candy canes soufflé muffin.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Updates">
                <div class="pl-2 mt-1">
                  <p>
                    Bear claw sesame snaps lollipop. Pudding biscuit donut sweet
                    roll pie apple pie wafer jelly beans brownie. Lemon drops
                    ice cream candy canes soufflé muffin. Caramels cookie
                    macaroon sweet roll muffin liquorice brownie pie. Cupcake
                    tootsie roll cupcake candy brownie icing bear claw jujubes
                    cupcake. Marzipan pastry sesame snaps cotton candy chocolate
                    cake tiramisu. Wafer apple pie cotton candy cotton candy
                    icing.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Links">
                <div class="pl-2 mt-1">
                  <p>
                    Gingerbread dessert apple pie. Bear claw cake ice cream
                    cookie. Toffee jujubes jelly beans cookie muffin. Wafer
                    sugar plum bonbon sweet roll chocolate cake pie tootsie roll
                    jelly chocolate. Apple pie oat cake chocolate cake toffee
                    lollipop sesame snaps chocolate bar. Chocolate liquorice
                    pudding fruitcake toffee topping liquorice. Wafer topping
                    cotton candy dessert carrot cake cotton candy. Pudding
                    chocolate cake dragée cupcake. Pastry marzipan donut. Ice
                    cream chocolate tart chupa chups liquorice marshmallow sweet
                    roll jelly soufflé.
                  </p>
                </div>
              </vs-tab>
            </vs-tabs>
          </template>
        </vx-card>
      </div>

      <!-- HORIZONTAL TABS WITH ICONS -->
      <div class="w-full vx-col md:w-1/2">
        <vx-card>
          <vs-tabs vs-alignment="fixed" alignment="fixed">
            <vs-tab vs-label="Profile" vs-icon="account_circle">
              <div class="mt-3">
                <p>
                  Liquorice croissant chocolate chocolate cake. Bonbon dessert
                  carrot cake fruitcake pudding sugar plum sweet gummies bear
                  claw. Gummies marshmallow chocolate cake. Jelly icing cake
                  carrot cake. Gummies marshmallow chocolate carrot cake lemon
                  drops. Soufflé gingerbread cupcake chupa chups dragée halvah
                  toffee liquorice. Jelly-o pie ice cream ice cream pudding
                  sweet.
                </p>
              </div>
            </vs-tab>
            <vs-tab vs-label="Messages" vs-icon="message">
              <div class="mt-3">
                <p>
                  Jelly-o soufflé danish jelly-o jujubes oat cake caramels
                  chocolate. Danish jelly chocolate bar jelly jujubes gummies
                  halvah. Candy jujubes jujubes cheesecake bear claw sesame
                  snaps cheesecake gingerbread. Toffee bonbon candy canes
                  macaroon candy lollipop dragée. Brownie lemon drops chocolate
                  cake pastry jelly biscuit.
                </p>
              </div>
            </vs-tab>
          </vs-tabs>
        </vx-card>
      </div>

      <!-- CARD WITH VERTICAL ICON TABS -->
      <div class="w-full vx-col md:w-1/2 md:mt-0 mt-base">
        <vx-card>
          <template slot="no-body">
            <vs-tabs vs-position="left" alignment="fixed">
              <vs-tab vs-label="Features" vs-icon="extension">
                <div class="pl-2 mt-1">
                  <p>
                    Chocolate cake brownie candy canes marzipan. Chocolate cake
                    powder jujubes bonbon tart cake bonbon sweet roll. Carrot
                    cake sweet dragée ice cream pie candy canes sesame snaps
                    tart halvah. Lemon drops pastry tart candy. Caramels jelly
                    beans dessert dessert cupcake lollipop cake cotton candy.
                    Pudding chupa chups ice cream tiramisu liquorice. Lollipop
                    jelly pie tiramisu pudding marshmallow.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Products" vs-icon="store">
                <div class="pl-2 mt-1">
                  <p>
                    Bear claw liquorice candy liquorice chocolate cake wafer.
                    Gummi bears muffin cake icing pastry marshmallow lemon drops
                    sweet chocolate. Marzipan apple pie jelly beans marshmallow
                    jelly-o. Brownie danish bear claw. Dragée oat cake marzipan
                    fruitcake caramels croissant tootsie roll cupcake sesame
                    snaps. Cheesecake jujubes gingerbread apple pie bonbon
                    caramels chocolate bar.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Updates" vs-icon="get_app">
                <div class="pl-2 mt-1">
                  <p>
                    Cheesecake pie lollipop dragée candy icing jujubes
                    fruitcake. Apple pie caramels apple pie gingerbread danish
                    candy canes brownie liquorice topping. Icing dragée donut
                    jelly caramels cake. Toffee gummi bears ice cream apple pie.
                    Jujubes candy marzipan lollipop tiramisu biscuit apple pie
                    liquorice. Lemon drops icing gummies cake marshmallow.
                  </p>
                </div>
              </vs-tab>
              <vs-tab vs-label="Links" vs-icon="link">
                <div class="pl-2 mt-1">
                  <p>
                    Brownie marshmallow halvah wafer tart jelly. Chocolate cake
                    apple pie halvah brownie pastry icing pudding marshmallow.
                    Jelly beans candy canes sesame snaps chocolate cake sesame
                    snaps chocolate cake candy tiramisu. Caramels sesame snaps
                    candy canes cheesecake. Chocolate bar pie pastry liquorice
                    tart. Cupcake biscuit cupcake halvah tiramisu muffin.
                  </p>
                </div>
              </vs-tab>
            </vs-tabs>
          </template>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
// import { videoPlayer }     from 'vue-video-player'
import VxTimeline from '@/components/timeline/VxTimeline.vue'
// import 'video.js/dist/video-js.css'

export default {
  components: {
    // VuePerfectScrollbar,
    // videoPlayer,
    VxTimeline
  },
  data() {
    return {
      // card 1
      card_1: {},
      card_2: {},
      card_3: {},
      card_4: {},
      card_5: {},
      card_6: {},
      card_7: {},
      card_8: {},

      chatLog: [],
      chatMsgInput: '',

      card_9: {},

      timelineData: [
        {
          color: 'primary',
          icon: 'PlusIcon',
          title: 'New Task Added',
          desc: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          time: '25 Days Ago'
        },
        {
          color: 'warning',
          icon: 'AlertCircleIcon',
          title: 'Task Update Found',
          desc: 'Cupcake gummi bears soufflé caramels candy',
          time: '15 Days Ago'
        },
        {
          color: 'success',
          icon: 'CheckIcon',
          title: 'Task Finished',
          desc: 'Candy ice cream cake. Halvah gummi bears',
          time: '20 mins ago'
        }
      ],

      name: '',
      email: '',
      msg: '',

      playerOptions: {},
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  mounted() {
    this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight
  },
  created() {
    // Card 1
    this.$http
      .get('/api/users/pixinvent/product/1')
      .then((response) => {
        this.card_1 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 2
    this.$http
      .get('/api/users/pixinvent/product/sales/1')
      .then((response) => {
        this.card_2 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 3
    this.$http
      .get('/api/users/pixinvent/product/goals/1')
      .then((response) => {
        this.card_3 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 4
    this.$http
      .get('/api/users/89')
      .then((response) => {
        this.card_4 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 5
    this.$http
      .get('/api/users/58')
      .then((response) => {
        this.card_5 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 6
    this.$http
      .get('/api/users/16')
      .then((response) => {
        this.card_6 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 7
    this.$http
      .get('/api/place/18')
      .then((response) => {
        this.card_7 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 8
    this.$http
      .get('/api/place/76/weather')
      .then((response) => {
        this.card_8 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Chat Log
    this.$http
      .get('/api/chat/demo-1/log')
      .then((response) => {
        this.chatLog = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Card 9
    this.$http
      .get('/api/item/12/review')
      .then((response) => {
        this.card_9 = response.data
      })
      .catch((error) => {
        console.log(error)
      })

    // Player Options
    this.$http
      .get('/api/card/card-basic/player-option')
      .then((response) => {
        this.playerOptions = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
#demo-basic-card {
  .overlay-card {
    .vx-card__collapsible-content {
      max-height: 485px;
    }
  }

  .chat-card-log {
    height: 360px;

    .chat-sent-msg {
      background-color: #f2f4f7 !important;
    }
  }

  .card-video {
    .video-js {
      height: 370px;
    }
  }
}
</style>
