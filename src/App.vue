<template>
  <div class="screen">
    <div class="avatar position-md-relative position-sticky mx-auto">
      <div class=" ">
        <div
          class="position-absolute start-50 translate-middle-x"
          style="z-index: 1; top: -25px"
        >
          <div
            @click="random"
            class="
              bg-white
              rounded-circle
              p-2
              d-flex
              justify-content-center
              align-items-center
            "
            style="cursor: pointer; width: 50px; height: 50px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
              />
            </svg>
          </div>
        </div>
        <NiceAvatar
          ref="niceAvatar"
          :size="size"
          :face-color="faceColor"
          :eye="eye"
          :eye-brow="eyeBrow"
          :ear="ear"
          :earring="earring"
          :mouth="mouth"
          :hair="hair"
          :hair-color="hairColor"
          :nose="nose"
          :glasses="glasses"
          :beard="beard"
          :beard-color="beardColor"
          :shirt="shirt"
          :shirt-color="shirtColor"
          :bg-color="bgColor"
        />
      </div>
      <div class="mt-3 d-none d-md-block">
        <div
          class="btn btn-success d-flex align-items-center gap-2"
          @click="getPng"
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            />
          </svg>
          Save as PNG
        </div>
        <a
          target="_blank"
          href="https://github.com/ademilter/vue-nice-avatar"
          class="btn btn-outline-secondary d-flex align-items-center gap-2 mt-2"
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.14233 0C3.63983 0 0 3.66667 0 8.20283C0 11.8288 2.33217 14.8982 5.5675 15.9845C5.972 16.0662 6.12017 15.808 6.12017 15.5908C6.12017 15.4007 6.10683 14.7488 6.10683 14.0697C3.84183 14.5587 3.37017 13.0918 3.37017 13.0918C3.00617 12.1412 2.46683 11.8968 2.46683 11.8968C1.7255 11.3943 2.52083 11.3943 2.52083 11.3943C3.34317 11.4487 3.77467 12.2363 3.77467 12.2363C4.5025 13.4857 5.67533 13.1327 6.14717 12.9153C6.2145 12.3857 6.43033 12.019 6.6595 11.8153C4.853 11.6252 2.95233 10.919 2.95233 7.76817C2.95233 6.87183 3.27567 6.1385 3.788 5.56817C3.70717 5.3645 3.424 4.52233 3.869 3.39517C3.869 3.39517 4.5565 3.17783 6.10667 4.23717C6.77035 4.05761 7.45479 3.96627 8.14233 3.9655C8.82983 3.9655 9.53067 4.06067 10.1778 4.23717C11.7282 3.17783 12.4157 3.39517 12.4157 3.39517C12.8607 4.52233 12.5773 5.3645 12.4965 5.56817C13.0223 6.1385 13.3323 6.87183 13.3323 7.76817C13.3323 10.919 11.4317 11.6115 9.61167 11.8153C9.90833 12.0733 10.1643 12.5622 10.1643 13.3363C10.1643 14.4363 10.151 15.3192 10.151 15.5907C10.151 15.808 10.2993 16.0662 10.7037 15.9847C13.939 14.898 16.2712 11.8288 16.2712 8.20283C16.2845 3.66667 12.6313 0 8.14233 0Z"
              fill="#24292F"
            />
          </svg>
          Github
        </a>

        <div class="mt-2 mx-auto text-center user-select-none">
          We
          <svg
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
          Open Source
        </div>
      </div>
    </div>

    <div class="options">
      <div class="container">
        <div class="row">
          <div class="p-4 rounded col-md-8">
            <h4>Background Color</h4>
            <div>
              <label
                v-for="value in BG_COLORS"
                :key="value"
                :style="{ backgroundColor: value }"
                class="p-4 rounded-circle"
                :class="{ 'border border-primary shadow': bgColor === value }"
              >
                <input
                  type="radio"
                  name="bgColor"
                  :value="value"
                  v-model="bgColor"
                  class="d-none"
                />
              </label>
              <!-- <label>
                <input type="color" name="bgColor" v-model="bgColor" />
              </label> -->
            </div>
          </div>

          <div class="p-4 rounded col-md-4">
            <h4>Face</h4>
            <div>
              <label
                v-for="value in FACE_COLORS"
                :key="value"
                :style="{ backgroundColor: value }"
                class="p-4 rounded-circle"
                :class="{ 'border border-primary shadow': faceColor === value }"
              >
                <input
                  type="radio"
                  name="face"
                  :value="value"
                  v-model="faceColor"
                  class="d-none"
                />
              </label>
              <!-- <label>
                <input type="color" name="face" v-model="faceColor" />
              </label> -->
            </div>
          </div>
        </div>

        <div
          class="d-flex align-items-start flex-md-row flex-column overflow-auto"
        >
          <div
            class="
              nav nav-pills
              me-3
              flex-md-column flex-row
              overflow-auto
              flex-nowrap
              gap-3 gap-md-0
            "
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link p-2 active text-start"
              id="v-pills-eyes-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-eyes"
              type="button"
              role="tab"
              aria-controls="v-pills-eyes"
              aria-selected="false"
            >
              Eyes
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-eyeBrowsAndEyelashes-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-eyeBrowsAndEyelashes"
              type="button"
              role="tab"
              aria-controls="v-pills-eyeBrowsAndEyelashes"
              aria-selected="false"
            >
              Eyebrows and Eyelashes
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-ear-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-ear"
              type="button"
              role="tab"
              aria-controls="v-pills-ear"
              aria-selected="false"
            >
              Ear
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-mouth-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-mouth"
              type="button"
              role="tab"
              aria-controls="v-pills-mouth"
              aria-selected="false"
            >
              Mouth
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-beard-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-beard"
              type="button"
              role="tab"
              aria-controls="v-pills-beard"
              aria-selected="true"
            >
              Beard
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-hair-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-hair"
              type="button"
              role="tab"
              aria-controls="v-pills-hair"
              aria-selected="false"
            >
              Hair
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-nose-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-nose"
              type="button"
              role="tab"
              aria-controls="v-pills-nose"
              aria-selected="false"
            >
              Nose
            </button>
            <hr />
            <span class="text-muted mb-2 d-md-block d-none">Accessories</span>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-glasses-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-glasses"
              type="button"
              role="tab"
              aria-controls="v-pills-glasses"
              aria-selected="false"
            >
              Glasses
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-shirt-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-shirt"
              type="button"
              role="tab"
              aria-controls="v-pills-shirt"
              aria-selected="false"
            >
              Shirt
            </button>
            <button
              class="nav-link p-2 text-start"
              id="v-pills-earring-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-earring"
              type="button"
              role="tab"
              aria-controls="v-pills-earring"
              aria-selected="false"
            >
              Earring
            </button>
          </div>
          <div class="tab-content w-100" id="v-pills-tabContent">
            <div
              class="tab-pane w-100 fade show active"
              id="v-pills-eyes"
              role="tabpanel"
              aria-labelledby="v-pills-eyes-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Eyes</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in eyesValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{ 'border border-primary shadow': eye === value }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="value"
                        :eye-brow="eyeBrow"
                        :ear="ear"
                        :earring="earring"
                        :mouth="mouth"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="eyes"
                        :value="value"
                        v-model="eye"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane w-100 fade"
              id="v-pills-eyeBrowsAndEyelashes"
              role="tabpanel"
              aria-labelledby="v-pills-eyeBrowsAndEyelashes-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Eyebrows and Eyelashes</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in eyeBrowsValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': eyeBrow === value,
                      }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="value"
                        :ear="ear"
                        :earring="earring"
                        :mouth="mouth"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="eyeBrows"
                        :value="value"
                        v-model="eyeBrow"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane w-100 fade"
              id="v-pills-ear"
              role="tabpanel"
              aria-labelledby="v-pills-ear-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Ear</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in earValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{ 'border border-primary shadow': ear === value }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="eyeBrow"
                        :ear="value"
                        :earring="earring"
                        :mouth="mouth"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="ear"
                        :value="value"
                        v-model="ear"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane w-100 fade"
              id="v-pills-mouth"
              role="tabpanel"
              aria-labelledby="v-pills-mouth-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Mouth</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in mouthValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': mouth === value,
                      }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="eyeBrow"
                        :ear="ear"
                        :earring="earring"
                        :mouth="value"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="mouth"
                        :value="value"
                        v-model="mouth"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-beard"
              role="tabpanel"
              aria-labelledby="v-pills-beard-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Beard</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in beardValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{ 'border-primary': beard === value }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="eyeBrow"
                        :ear="ear"
                        :earring="earring"
                        :mouth="mouth"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="value"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />

                      <input
                        type="radio"
                        name="beard"
                        :value="value"
                        v-model="beard"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                  <!-- <label>
                    <input
                      type="color"
                      name="beardColor"
                      v-model="beardColor"
                    />
                  </label> -->
                </div>
                <div
                  class="
                    d-flex
                    flex-wrap
                    gap-3
                    justify-content-center
                    p-2
                    m-2
                    rounded
                    w-75
                    mx-auto
                    mt-3
                  "
                >
                  <div
                    v-for="value in BG_COLORS"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': beardColor === value,
                      }"
                    >
                      <div
                        class="rounded-circle"
                        :style="{
                          backgroundColor: value,
                          width: '50px',
                          height: '50px',
                        }"
                      ></div>
                      <input
                        type="radio"
                        name="hair"
                        :value="value"
                        v-model="beardColor"
                        class="d-none"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-hair"
              role="tabpanel"
              aria-labelledby="v-pills-hair-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Hair</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in hairValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': hair === value,
                      }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="eyeBrow"
                        :ear="ear"
                        :earring="earring"
                        :mouth="mouth"
                        :hair="value"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="hair"
                        :value="value"
                        v-model="hair"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                  <!-- <label>
                    <input type="color" name="hairColor" v-model="hairColor" />
                  </label> -->
                </div>
                <div
                  class="
                    d-flex
                    flex-wrap
                    gap-3
                    justify-content-center
                    p-2
                    m-2
                    rounded
                    w-75
                    mx-auto
                    mt-3
                  "
                >
                  <div
                    v-for="value in BG_COLORS"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': hairColor === value,
                      }"
                    >
                      <div
                        class="rounded-circle"
                        :style="{
                          backgroundColor: value,
                          width: '50px',
                          height: '50px',
                        }"
                      ></div>
                      <input
                        type="radio"
                        name="hair"
                        :value="value"
                        v-model="hairColor"
                        class="d-none"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-nose"
              role="tabpanel"
              aria-labelledby="v-pills-nose-tab"
              tabindex="0"
            >
              <div>
                <div class="p-4 rounded w-100">
                  <h4>Nose</h4>
                  <div class="d-flex flex-wrap gap-3">
                    <div
                      v-for="value in noseValues"
                      :key="value"
                      class="d-flex flex-column align-items-center"
                    >
                      <label
                        class="
                          bg-white
                          rounded-circle
                          shadow
                          d-flex
                          align-items-center
                          flex-column
                          border
                          m-0
                        "
                        :class="{
                          'border border-primary shadow': nose === value,
                        }"
                      >
                        <NiceAvatar
                          size="120"
                          :face-color="faceColor"
                          :eye="eye"
                          :eye-brow="eyeBrow"
                          :ear="ear"
                          :earring="earring"
                          :mouth="mouth"
                          :hair="hair"
                          :hair-color="hairColor"
                          :nose="value"
                          :glasses="glasses"
                          :beard="beard"
                          :beard-color="beardColor"
                          :shirt="shirt"
                          :shirt-color="shirtColor"
                          :bg-color="bgColor"
                        />
                        <input
                          type="radio"
                          name="nose"
                          :value="value"
                          v-model="nose"
                          class="d-none"
                        />
                      </label>
                      <span>{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-glasses"
              role="tabpanel"
              aria-labelledby="v-pills-glasses-tab"
              tabindex="0"
            >
              <div>
                <div class="p-4 rounded w-100">
                  <h4>Glasses</h4>
                  <div class="d-flex flex-wrap gap-3">
                    <div
                      v-for="value in glassesValues"
                      :key="value"
                      class="d-flex flex-column align-items-center"
                    >
                      <label
                        class="
                          bg-white
                          rounded-circle
                          shadow
                          d-flex
                          align-items-center
                          flex-column
                          border
                          m-0
                        "
                        :class="{
                          'border border-primary shadow': glasses === value,
                        }"
                      >
                        <NiceAvatar
                          size="120"
                          :face-color="faceColor"
                          :eye="eye"
                          :eye-brow="eyeBrow"
                          :ear="ear"
                          :earring="earring"
                          :mouth="mouth"
                          :hair="hair"
                          :hair-color="hairColor"
                          :nose="nose"
                          :glasses="value"
                          :beard="beard"
                          :beard-color="beardColor"
                          :shirt="shirt"
                          :shirt-color="shirtColor"
                          :bg-color="bgColor"
                        />
                        <input
                          type="radio"
                          name="glasses"
                          :value="value"
                          v-model="glasses"
                          class="d-none"
                        />
                      </label>
                      <span>{{ value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-shirt"
              role="tabpanel"
              aria-labelledby="v-pills-shirt-tab"
              tabindex="0"
            >
              <div>
                <div class="p-4 rounded w-100">
                  <h4>Shirt</h4>
                  <div class="d-flex flex-wrap gap-3">
                    <div
                      v-for="value in shirtValues"
                      :key="value"
                      class="d-flex flex-column align-items-center"
                    >
                      <label
                        class="
                          bg-white
                          rounded-circle
                          shadow
                          d-flex
                          align-items-center
                          flex-column
                          border
                          m-0
                        "
                        :class="{
                          'border border-primary shadow': shirt === value,
                        }"
                      >
                        <NiceAvatar
                          size="120"
                          :face-color="faceColor"
                          :eye="eye"
                          :eye-brow="eyeBrow"
                          :ear="ear"
                          :earring="earring"
                          :mouth="mouth"
                          :hair="hair"
                          :hair-color="hairColor"
                          :nose="nose"
                          :glasses="glasses"
                          :beard="beard"
                          :beard-color="beardColor"
                          :shirt="value"
                          :shirt-color="shirtColor"
                          :bg-color="bgColor"
                        />
                        <input
                          type="radio"
                          name="shirt"
                          :value="value"
                          v-model="shirt"
                          class="d-none"
                        />
                      </label>
                      <span>{{ value }}</span>
                    </div>
                    <div
                      class="
                        d-flex
                        flex-wrap
                        gap-3
                        justify-content-center
                        p-2
                        m-2
                        rounded
                        w-75
                        mx-auto
                        mt-3
                      "
                    >
                      <div
                        v-for="value in BG_COLORS"
                        :key="value"
                        class="d-flex flex-column align-items-center"
                      >
                        <label
                          class="
                            bg-white
                            rounded-circle
                            shadow
                            d-flex
                            align-items-center
                            flex-column
                            border
                            m-0
                          "
                          :class="{
                            'border border-primary shadow':
                              shirtColor === value,
                          }"
                        >
                          <div
                            class="rounded-circle"
                            :style="{
                              backgroundColor: value,
                              width: '50px',
                              height: '50px',
                            }"
                          ></div>
                          <input
                            type="radio"
                            name="hair"
                            :value="value"
                            v-model="shirtColor"
                            class="d-none"
                          />
                        </label>
                      </div>
                    </div>
                    <!-- <label>
                      <input
                        type="color"
                        name="shirtColor"
                        v-model="shirtColor"
                      />
                    </label> -->
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane w-100 fade"
              id="v-pills-earring"
              role="tabpanel"
              aria-labelledby="v-pills-earring-tab"
              tabindex="0"
            >
              <div class="p-4 rounded w-100">
                <h4>Earring</h4>
                <div class="d-flex flex-wrap gap-3">
                  <div
                    v-for="value in earringValues"
                    :key="value"
                    class="d-flex flex-column align-items-center"
                  >
                    <label
                      class="
                        bg-white
                        rounded-circle
                        shadow
                        d-flex
                        align-items-center
                        flex-column
                        border
                        m-0
                      "
                      :class="{
                        'border border-primary shadow': earring === value,
                      }"
                    >
                      <NiceAvatar
                        size="120"
                        :face-color="faceColor"
                        :eye="eye"
                        :eye-brow="eyeBrow"
                        :ear="ear"
                        :earring="value"
                        :mouth="mouth"
                        :hair="hair"
                        :hair-color="hairColor"
                        :nose="nose"
                        :glasses="glasses"
                        :beard="beard"
                        :beard-color="beardColor"
                        :shirt="shirt"
                        :shirt-color="shirtColor"
                        :bg-color="bgColor"
                      />
                      <input
                        type="radio"
                        name="earring"
                        :value="value"
                        v-model="earring"
                        class="d-none"
                      />
                    </label>
                    <span>{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-3 d-block d-md-none">
        <div
          class="btn btn-success d-flex align-items-center gap-2"
          @click="getPng"
        >
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            />
          </svg>
          Save as PNG
        </div>
        <a
          target="_blank"
          href="https://github.com/ademilter/vue-nice-avatar"
          class="btn btn-outline-secondary d-flex align-items-center gap-2 mt-2"
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.14233 0C3.63983 0 0 3.66667 0 8.20283C0 11.8288 2.33217 14.8982 5.5675 15.9845C5.972 16.0662 6.12017 15.808 6.12017 15.5908C6.12017 15.4007 6.10683 14.7488 6.10683 14.0697C3.84183 14.5587 3.37017 13.0918 3.37017 13.0918C3.00617 12.1412 2.46683 11.8968 2.46683 11.8968C1.7255 11.3943 2.52083 11.3943 2.52083 11.3943C3.34317 11.4487 3.77467 12.2363 3.77467 12.2363C4.5025 13.4857 5.67533 13.1327 6.14717 12.9153C6.2145 12.3857 6.43033 12.019 6.6595 11.8153C4.853 11.6252 2.95233 10.919 2.95233 7.76817C2.95233 6.87183 3.27567 6.1385 3.788 5.56817C3.70717 5.3645 3.424 4.52233 3.869 3.39517C3.869 3.39517 4.5565 3.17783 6.10667 4.23717C6.77035 4.05761 7.45479 3.96627 8.14233 3.9655C8.82983 3.9655 9.53067 4.06067 10.1778 4.23717C11.7282 3.17783 12.4157 3.39517 12.4157 3.39517C12.8607 4.52233 12.5773 5.3645 12.4965 5.56817C13.0223 6.1385 13.3323 6.87183 13.3323 7.76817C13.3323 10.919 11.4317 11.6115 9.61167 11.8153C9.90833 12.0733 10.1643 12.5622 10.1643 13.3363C10.1643 14.4363 10.151 15.3192 10.151 15.5907C10.151 15.808 10.2993 16.0662 10.7037 15.9847C13.939 14.898 16.2712 11.8288 16.2712 8.20283C16.2845 3.66667 12.6313 0 8.14233 0Z"
              fill="#24292F"
            />
          </svg>
          Github
        </a>

        <div class="mt-2 mx-auto text-center user-select-none">
          We
          <svg
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
          Open Source
        </div>
      </div>

  </div>
</template>

<script>
import {
  EYES,
  EYEBROWS,
  EAR,
  EARRING,
  MOUTH,
  HAIR,
  NOSE,
  GLASSES,
  BEARD,
  SHIRT,
  SHIRT_COLORS,
  BG_COLORS,
  FACE_COLORS,
  HAIR_COLORS,
  BEARD_COLORS,
} from "./components/NiceAvatar/types";
import NiceAvatar from "./components/NiceAvatar/NiceAvatar";
import { saveSvgAsPng } from "save-svg-as-png";

export default {
  name: "App",
  components: {
    NiceAvatar,
  },
  data() {
    return {
      size: 250,
      faceColor: FACE_COLORS[0],
      eye: EYES.OVAL,
      eyeBrow: EYEBROWS.EYEBROWS_UP,
      ear: EAR.SMALL,
      earring: EARRING.NONE,
      mouth: MOUTH.LAUGHING,
      hair: HAIR.FONZA,
      hairColor: HAIR_COLORS[0],
      nose: NOSE.CURVE,
      glasses: GLASSES.NONE,
      beard: BEARD.NONE,
      beardColor: BEARD_COLORS[0],
      shirt: SHIRT.COLLARED,
      shirtColor: SHIRT_COLORS[0],
      bgColor: BG_COLORS[0],
      FACE_COLORS,
      BG_COLORS,
    };
  },
  computed: {
    eyesValues() {
      return Object.values(EYES);
    },
    eyeBrowsValues() {
      return Object.values(EYEBROWS);
    },
    earValues() {
      return Object.values(EAR);
    },
    earringValues() {
      return Object.values(EARRING);
    },
    mouthValues() {
      return Object.values(MOUTH);
    },
    hairValues() {
      return Object.values(HAIR);
    },
    noseValues() {
      return Object.values(NOSE);
    },
    glassesValues() {
      return Object.values(GLASSES);
    },
    beardValues() {
      return Object.values(BEARD);
    },
    shirtValues() {
      return Object.values(SHIRT);
    },
  },
  mounted() {
    this.random();
  },
  methods: {
    random() {
      this.bgColor = this.getRandom(BG_COLORS);
      this.faceColor = this.getRandom(FACE_COLORS);
      this.beard = this.getRandom(Object.values(BEARD));
      this.beardColor = this.getRandom(BEARD_COLORS);
      this.eye = this.getRandom(Object.values(EYES));
      this.eyeBrow = this.getRandom(Object.values(EYEBROWS));
      this.ear = this.getRandom(Object.values(EAR));
      this.earring = this.getRandom(Object.values(EARRING));
      this.mouth = this.getRandom(Object.values(MOUTH));
      this.hair = this.getRandom(Object.values(HAIR));
      this.hairColor = this.getRandom(HAIR_COLORS);
      this.nose = this.getRandom(Object.values(NOSE));
      this.glasses = this.getRandom(Object.values(GLASSES));
      this.shirt = this.getRandom(Object.values(SHIRT));
      this.shirtColor = this.getRandom(SHIRT_COLORS);
    },
    getRandom(list) {
      return list[Math.floor(Math.random() * list.length)];
    },
    async getPng() {
      const opts = {
        scale: 1,
        encoderOptions: 1,
      };
      const $el = this.$refs.niceAvatar.$el;
      console.log($el);
      return await saveSvgAsPng($el, "nice-avatar", opts);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
}

body {
  padding: 30px;
}

.screen {
  display: grid;
  grid-gap: 20px;
}

#v-pills-tab {
  width: 260px;
}

#v-pills-tab .nav-link {
  min-width: 150px;
}

.avatar {
  top: 30px;
  width: fit-content;
  scale: 1;
}

@media (min-width: 700px) {
  .screen {
    grid-template-columns: 260px 1fr;
  }
}

@media (max-width: 768px) {
  #v-pills-tab {
    width: 100%;
  }
  .avatar {
    scale: 0.7;
  }
}

.options {
  display: grid;
  grid-gap: 20px;
  justify-items: flex-start;
}

.options > div {
  display: grid;
  grid-gap: 10px;
}

label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 10px;
  margin-bottom: 10px;
}

button {
  padding: 4px 6px;
}

.buttons {
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: column;
  align-items: center;
}
</style>
