<template>
  <v-container>
    <v-content class="mt-8">
      <v-row>
        <v-col md="12">
          <v-card elevation="2">
            <v-row>
              <v-col cols="12">
                <div class="text-center primary--text h5 text--darken-4 pt-3">
                  联系我们
                </div>
                <div class="primary--text text--darken-2 text-center">
                  Contact
                </div>
              </v-col>
            </v-row>
            <v-row justify="center" class="hidden-sm-and-down">
              <v-col
                md="12"
                class="d-flex flex-row grey--text text--darken-3 justify-center mt-n2"
              >
                <div class="">
                  <v-icon color="primary darken-2" class="mr-1">
                    mdi-email
                  </v-icon>
                  wh8groupbd@gmail.com
                </div>

                <div class="mx-8">
                  <v-icon color="primary darken-2" class="mr-1">
                    mdi-skype
                  </v-icon>
                  live:.cid.e6563c0aec147b56
                </div>

                <div class="">
                  <v-icon color="primary darken-2" class="mr-1">
                    mdi-telegram
                  </v-icon>
                  @BTWmanager @BTWsales @BTWsales888
                </div>
              </v-col>
            </v-row>
            <v-row class="hidden-md-and-up" justify="center">
              <v-col
                sm="3"
                cols="12"
                class="grey--text text--darken-3 ml-4 ml-sm-0"
              >
                <v-icon color="primary darken-2"> mdi-email </v-icon>
                <br />
                wh8groupbd@gmail.com
              </v-col>
              <v-col
                sm="3"
                cols="12"
                class="grey--text text--darken-3 ml-4 ml-sm-0"
              >
                <v-icon color="primary darken-2"> mdi-skype </v-icon>
                <br />
                live:.cid.e6563c0aec147b56
              </v-col>
              <v-col
                sm="3"
                cols="12"
                class="grey--text text--darken-3 ml-4 ml-sm-0"
              >
                <v-icon color="primary darken-2"> mdi-telegram </v-icon>
                <br />
                @BTWmanager @BTWsales @BTWsales888
              </v-col>
            </v-row>

            <!-- <v-col
                  md="12"
                  sm="4"
                  class="d-flex flex-row grey--text text--darken-3 justify-center mt-n2"
                >
                  <div>
                    <v-icon color="primary darken-2" class="mr-1">
                      mdi-email
                    </v-icon>
                    wh8groupbd@gmail.com
                  </div>

                  <div class="mx-8">
                    <v-icon color="primary darken-2" class="mr-1">
                      mdi-skype
                    </v-icon>
                    live:.cid.e6563c0aec147b56
                  </div>

                  <div>
                    <v-icon color="primary darken-2" class="mr-1">
                      mdi-telegram
                    </v-icon>
                    @BTWmanager @BTWsales @BTWsales888
                  </div>
                </v-col> -->
            <v-row>
              <v-col md="12" sm="12" class="mt-n2">
                <v-divider class="mx-8"></v-divider>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="3" cols="0" class=""></v-col>
              <v-col md="3" sm="6">
                <v-text-field
                  label="姓名"
                  placeholder=" "
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                  dense
                ></v-text-field>

                <v-text-field
                  label="称谓"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-text-field
                  label="公司名称"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-text-field
                  label="国家"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-text-field
                  label="联系信箱"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-select
                  label="国码"
                  outlined
                  placeholder=" "
                  dense
                  class="mr-md-3 ml-3"
                ></v-select>

                <v-text-field
                  label="联系电话"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-text-field
                  label="联系手机"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>

                <v-select
                  label="通讯软体"
                  outlined
                  placeholder=" "
                  dense
                  class="mr-md-3 ml-3"
                ></v-select>

                <v-text-field
                  label="通讯帐号"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="mr-md-3 ml-3"
                ></v-text-field>
              </v-col>
              <v-col md="4" sm="6">
                <v-text-field
                  label="兴趣产品"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="ml-md-3 mr-3"
                ></v-text-field>

                <v-text-field
                  label="主旨"
                  placeholder=" "
                  dense
                  outlined
                  height="40"
                  class="ml-md-3 mr-3"
                ></v-text-field>

                <v-textarea
                  label="內容"
                  placeholder=" "
                  dense
                  outlined
                  class="ml-md-3 mr-3"
                  height="170"
                >
                </v-textarea>
                <div class="float-right mr-sm-3">
                  <v-btn
                    rounded
                    class="mr-4 text--secondary"
                    width="110"
                    elevation="0"
                    text
                  >
                    清除
                  </v-btn>

                  <v-btn rounded width="110" color="primary">送出</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Connection",
};
</script>
<style></style>
