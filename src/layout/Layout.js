import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ChangeTheme } from "../context/ThemeContext";
import { useTranslation } from "next-i18next";

const Layout = ({ children }) => {
  const { myMode, lightTheme, darkTheme, myPalette } = ChangeTheme();
  const { i18n } = useTranslation();

  return (
    <ThemeProvider theme={myMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <section className="layout" dir={i18n.language === "en" ? "ltr" : "rtl"}>
        <div className="topWrapper">
          <Header />
          <Navbar />
          <Banner />
        </div>
        <svg
          className="top-bg-image"
          src="http://www.w3.org/2000/svg"
          width="1440"
          height="59"
          viewBox="0 0 1440 59"
        >
          <path
            d="M8.15 58.999H256.416H261.336H1440V37.373C1434.96 36.159 1426.96 38.29 1420.29 36.767C1421.43 35.668 1418.45 35.436 1416.94 34.894C1422.91 33.463 1431.62 32.844 1440 32.233V22.828C1431.57 21.697 1426.94 19.77 1413.58 19.671C1412.4 20.375 1410.36 20.731 1406.86 20.374C1402.57 21.426 1400.86 23.018 1393.45 23.419C1392.45 23.002 1390.33 22.823 1391.22 22.014C1388.05 21.82 1388.32 22.343 1385.62 22.247C1381.3 20.852 1365.46 20.028 1372.21 17.798L1370.53 17.68L1372.21 17.563C1369.86 16.991 1370.6 17.064 1371.09 16.157C1366.63 16.083 1362.83 16.145 1361.02 16.627L1360.47 16.978C1359.15 16.194 1354.77 16.139 1351.52 16.352L1352.08 15.923C1344.82 16.048 1353.73 15.545 1349.84 15.221C1349.09 15.714 1343.34 14.679 1342.02 15.221L1342.57 15.573L1340.9 15.69C1340.9 15.924 1341.8 15.968 1342.02 16.158C1339 16.384 1336.62 16.746 1336.42 17.564C1338.73 18.332 1343.95 18.486 1344.25 19.672C1344.5 19.49 1344.28 19.21 1345.37 19.204C1354.4 19.966 1361.28 21.179 1369.97 22.014C1370.53 24.945 1356.34 25.221 1347.61 25.995C1347.36 26.438 1348.87 26.513 1348.73 26.932C1347.07 26.809 1345.91 26.586 1344.25 26.462C1344.71 27.028 1342.21 26.972 1343.13 27.634L1344.44 27.985L1343.13 28.338C1343.37 28.6 1344.38 28.702 1345.37 28.806C1346.39 27.476 1358.59 27.707 1357.67 26.697C1368.57 26.247 1370.78 23.98 1385.62 24.355C1385.64 24.821 1388.68 24.654 1387.86 25.293C1380.06 26.001 1375.88 27.468 1367.73 28.103C1363.44 30.484 1349.98 30.944 1342.02 32.553C1341.83 32.279 1340.25 32.298 1338.66 32.318C1336.92 33.589 1334.02 34.795 1327.48 35.598C1318.3 35.49 1310.32 35.133 1308.47 33.49C1309.79 32.908 1310.32 32.158 1312.94 31.849C1304.78 32.545 1309.74 30.491 1305.12 30.446C1302.44 30.352 1305.74 31.512 1301.76 31.149C1299.8 31.091 1299.21 30.745 1299.53 30.212C1292.8 30.125 1283.94 30.654 1276.05 30.212C1272.07 30.952 1270.48 31.128 1264.87 30.679C1261.93 31.704 1265.04 33.202 1258.16 33.724C1256.81 35.021 1261.35 35.085 1261.51 36.064C1257.33 37.703 1265.57 38.981 1264.87 39.813C1252.22 38.702 1253.88 35.269 1253.68 32.787C1253.63 32.083 1249.72 31.63 1253.68 31.149C1250.16 31.184 1251.51 30.199 1249.21 29.977C1248.09 29.977 1246.97 29.977 1245.85 29.977L1246.42 30.329C1244.85 30.116 1243.95 30.037 1243.06 29.977L1243.62 29.744C1241.92 29.241 1238.84 29.025 1236.91 28.573C1241.79 27.308 1236.88 25.946 1232.44 25.294C1235.69 25.09 1233.7 24.943 1233.56 24.356C1230.29 23.893 1229.93 24.274 1227.96 23.654C1227.3 23.169 1229.35 22.115 1226.84 22.015C1226.71 23.112 1225.22 21.758 1222.38 22.015C1222.32 22.337 1222.9 22.528 1223.49 22.716C1220.09 22.706 1217.8 22.929 1216.78 23.42L1218.46 23.691L1215.11 23.77L1215.67 23.419C1214.41 23.369 1213.92 23.157 1213.43 22.949C1215.35 22.963 1216.3 22.77 1216.78 22.483C1211.27 22.622 1211.27 21.606 1210.08 20.842C1203.19 20.637 1204.38 21.761 1203.37 22.248C1201.61 22.146 1202.41 21.511 1198.89 21.78C1197.97 22.287 1194.68 22.301 1194.42 22.949C1201.45 23.657 1196.88 26.125 1196.66 28.102C1184.86 27.685 1186.85 24.381 1176.53 23.653C1171.15 25.081 1162.9 24.299 1158.64 23.185C1157.83 21.286 1167.07 19.556 1158.64 18.734C1155.23 19.191 1151.18 19.513 1145.22 19.438C1143.08 18.403 1137.72 18.042 1130.69 18.032C1130.11 20.963 1134.68 22.539 1136.28 25.057C1133.22 25.971 1126.46 24.823 1123.98 25.995L1124.54 26.346C1123.05 26.266 1121.56 26.222 1120.06 26.346L1120.62 25.995C1111.53 25.869 1111.7 25.917 1104.97 25.76C1105.56 24.354 1103.33 24.759 1098.27 24.824C1097.6 24.077 1100.36 24.099 1098.27 23.653C1093.51 23.145 1088.81 23.111 1084.84 22.949C1084.08 22.017 1082.02 21.357 1082.61 20.139C1076.22 20.619 1081.47 18.66 1078.14 18.499C1078.14 18.733 1078.14 18.967 1078.14 19.204C1069.88 18.894 1064.89 20.863 1054.66 20.139C1052.04 18.58 1043.2 18.324 1043.48 16.158C1038.53 16.137 1035.4 16.497 1033.41 17.095C1038.61 17.411 1034.68 19.639 1041.24 19.672C1040.62 20.714 1035.78 20.87 1032.29 21.312C1023.65 19.141 1000.18 20.074 999.867 16.159C996.464 16.734 989.57 16.097 992.036 17.096C991.355 16.771 987.738 17.061 987.569 16.629C989.816 16.218 986.055 15.085 986.451 14.285C990.616 14.714 989.001 13.881 989.805 12.881C983.741 12.998 984.376 12.046 981.981 11.709C977.651 11.098 975.357 11.981 970.796 11.475C970.884 11.884 970.55 12.204 969.68 12.412C964.069 11.529 962.008 13.05 958.497 13.35L957.192 13.7L955.143 13.583C957.362 15.435 960.431 15.733 965.206 16.863C966.154 16.175 968.809 17.002 970.795 16.863C974.286 16.444 970.438 15.945 973.032 15.458C978.467 15.414 975.238 17.18 978.626 17.565C975.498 17.16 968.709 16.704 967.441 17.8C970.155 18.557 974.8 18.911 976.388 19.906C974.676 23.933 990.163 24.358 995.397 26.933C989.831 27.641 985.348 28.576 978.626 29.04C981.87 29.297 983.994 29.788 986.45 30.212C982.426 30.931 979.806 31.941 974.151 32.318C970.931 32.289 972.209 31.32 968.559 31.382C962.835 32.385 960.167 31.3 956.264 32.318C955.204 31.213 949.24 31.136 947.313 30.212C944.26 30.04 945.06 30.676 942.844 30.679L943.402 31.031C942.536 30.839 941.496 30.729 940.646 30.724C940.199 30.995 938.462 31.213 936.692 31.499L937.255 31.149C932.281 30.939 929.315 30.312 928.306 29.274C924.741 29.135 924.849 29.714 922.717 29.274C925.768 28.639 919.824 28.691 920.48 27.87C915.055 28.367 911.869 27.039 903.712 27.4C901.647 28.609 893.85 28.615 892.525 29.978C893.608 30.765 895.709 31.342 898.114 31.85C889.619 31.892 896.079 30.997 889.167 31.15C888.921 31.591 890.431 31.666 890.292 32.085C883.236 31.896 879.897 34.197 871.281 34.427C868.58 33.883 873.027 33.8 873.518 33.256C871.164 33.048 868.548 32.892 866.808 32.554L866.252 32.905C865.712 32.437 865.826 31.843 862.897 31.734L864.573 31.618C861.762 30.957 858.44 30.404 855.628 29.744C855.624 29.507 856.537 29.465 856.747 29.274L855.066 29.003L855.628 28.574C851.783 28.521 852.033 27.607 850.035 27.168C848.134 27.549 844.428 27.553 843.331 28.104C840.333 27.95 839.075 27.434 836.619 27.168C836.705 27.575 836.371 27.896 835.501 28.104L837.177 28.378L833.823 28.456L833.27 28.104C831.842 26.992 828.203 25.647 824.325 25.762C822.506 24.994 824.575 24.867 824.325 23.888C820.063 23.414 821.723 23.071 818.731 22.249C813.173 23.237 810.969 21.523 805.314 22.484C804.066 21.728 799.584 21.653 800.839 20.376C796.427 21.106 788.96 20.811 784.066 20.376C783.77 21.639 779.742 22.124 777.358 22.951L779.038 23.226L778.476 23.655C780.074 23.712 780.362 24.042 781.83 24.123C780.742 24.9 779.624 23.862 778.476 23.889L777.358 23.772L776.237 23.655C776.055 23.926 774.475 23.907 772.883 23.889C772.883 23.812 772.883 23.733 772.883 23.655L771.209 23.772L769.532 23.655C758.064 24.905 753.553 21.222 747.17 19.907L746.049 19.79C745.926 19.634 745.799 19.478 745.488 19.322L747.17 19.439C747.788 18.788 751.494 18.783 753.878 18.501C754.506 17.434 751.897 17.044 752.761 15.925C746.638 16.036 743.538 15.515 739.348 15.223C740.014 15.832 738.896 16.065 735.988 15.925L734.312 16.044C734.312 16.044 732.634 15.925 733.75 16.393C733.652 16.695 727.085 16.408 732.634 15.925L733.942 15.574L735.988 15.691C735.988 15.458 735.988 15.223 735.988 14.989C731.515 14.742 728.326 14.301 724.811 14.989L725.365 15.34C723.122 15.24 721.161 15.127 719.251 14.864C718.467 14.954 717.216 15.072 716.396 15.305C716.284 15.534 716.396 15.718 716.423 16.043C716.777 16.313 717.796 16.424 718.787 16.539L720.892 16.979L719.215 16.862C719.153 17.005 719.052 17.139 718.099 17.095L718.657 17.445L719.216 17.799C719.572 18.342 719.034 18.696 718.1 18.967C714.822 18.771 718.768 18.214 718.1 17.799L716.424 17.525L716.984 17.096C715.442 17.106 714.526 16.986 713.628 16.863C713.624 16.629 714.532 16.584 714.745 16.393L713.066 16.276L713.628 15.925C713.084 15.648 712.435 15.395 711.391 15.223L710.83 15.575L709.156 15.458C703.151 16.486 698.657 15.216 693.499 15.458C692.835 16.957 691.332 18.283 683.436 18.267C675.373 16.673 687.385 13.998 690.144 12.413C694.716 12.559 690.785 13.391 694.62 13.351C698.49 12.643 693.549 12.366 701.329 12.648C705.582 11.616 699.575 10.82 703.566 10.305C697.218 10.982 699.05 9.416 696.852 8.667C695.298 8.135 691.499 7.992 690.143 7.261C689.075 6.679 689.716 6.468 689.025 5.854C684.028 5.48 677.426 6.104 678.964 7.027C668.849 7.067 672.352 8.603 671.136 10.304C667.363 10.841 657.21 10.042 657.718 11.475L659.4 11.358L658.837 11.709C659.151 12.19 661.826 12.177 663.307 12.412L664.614 12.06C665.007 12.228 665.28 12.392 665.882 12.575L664.425 12.881C665.187 13.735 665.989 14.584 665.546 15.691C655.025 16.319 647.242 14.596 647.656 12.177C649.138 11.944 651.818 11.957 652.13 11.475C649.79 11.34 648.933 10.895 645.421 11.007C645.07 11.323 643.828 11.453 644.303 11.944C643.355 12.981 638.959 12.935 640.948 14.051C633.751 13.745 642.198 15.357 636.474 15.457C633.788 14.457 631.109 13.457 629.769 12.177C625.91 11.191 617.407 11.177 614.115 10.071C614.266 6.431 609.902 3.085 596.221 1.873C596.302 1.078 596.571 0.239 593.984 0C593.817 0.581 590.202 0.068 589.51 0C595.14 1.873 586.645 4.038 589.51 5.854C589.975 5.455 590.956 5.904 592.865 5.854C592.555 5.244 592.493 4.683 596.22 4.918C596.011 5.811 592.218 5.952 591.747 6.791C593.833 6.824 595.49 6.946 596.22 7.26C596.762 8.623 592.47 8.972 590.627 9.836C592.219 10.284 594.082 10.674 596.22 11.007C594.492 11.348 595.236 12.205 595.105 12.881C600.063 13.48 600.056 15.122 605.166 15.691C608.65 15.39 602.358 14.376 607.405 14.285C613.297 14.433 610.502 15.009 610.757 16.159C619.606 16.96 620.542 19.42 628.65 20.375C626.584 22.362 627.739 25.025 618.584 25.527C616.785 24.185 610.873 23.708 611.877 21.78C609.853 21.475 606.231 21.99 602.934 21.547C602.077 22.225 601.159 22.891 598.457 23.185C590.728 22.744 587.635 20.185 588.392 18.734C586.698 18.077 581.147 18.224 579.449 17.564C582.213 17.235 581.422 16.757 580.57 16.158C575.256 16.067 572.504 16.655 568.27 16.158C568.435 16.739 567.691 17.129 566.03 17.329C565.739 16.998 563.58 17.061 562.677 16.861C559.652 17.289 562.483 17.654 560.443 18.031C557.503 18.102 559.56 17.122 555.969 17.329C553.67 17.393 554.921 18.202 552.616 18.265C544.781 18.654 543.555 20.428 532.489 20.139C529.786 19.066 526.055 18.21 519.074 18.032C516.578 19.852 508.559 20.514 503.421 21.78C493.283 22.029 493.311 20.148 484.406 20.139L484.966 20.491L483.291 20.609C483.291 20.998 483.291 21.39 483.291 21.78C479.263 22.004 481.306 20.77 482.172 20.609L481.613 20.257L483.29 20.139C478.795 19.579 479.217 18.47 476.58 18.032C475.847 19.05 465.335 18.02 465.398 19.204C460.368 18.274 452.579 19.237 448.626 19.905C446.067 19.661 444.669 19.174 440.804 19.204C435.933 20.363 441.923 22.313 435.209 22.715C433.774 22.801 423.744 20.748 427.385 19.905C424.113 19.576 421.889 20.174 419.556 19.437C420.703 17.287 421.586 16.718 418.438 14.518C414.593 14.621 412.17 14.425 409.495 14.284C409.321 14.56 409.682 14.95 408.375 14.988C403.904 14.142 399.851 15.378 394.958 15.221C394.515 14.818 396.618 14.621 394.958 14.518C390.926 14.611 390.01 15.356 387.133 15.689L386.569 16.042L384.892 15.923C383.633 18.498 368.708 16.101 371.474 14.987C363.024 15.193 357.311 12.802 350.228 11.942C349.879 11.625 348.642 11.495 349.112 11.005C342.19 10.894 340.738 9.637 332.342 9.834C328.333 9.19 328.225 7.73 324.513 7.024C321.354 6.83 321.618 7.354 318.924 7.258C319.244 6.364 313.787 6.292 311.097 6.086C306.145 5.71 305.292 4.921 303.27 4.916C302.106 4.914 299.613 6.352 298.795 5.15L297.12 5.032L298.795 4.916C297.494 4.486 295.874 4.124 294.324 3.744C293.486 5 289.145 4.818 290.972 6.322C287.709 6.575 286.76 7.313 282.021 7.259C277.625 7.01 277.546 5.855 276.43 4.917C271.246 4.987 266.755 4.915 264.132 4.449C263.592 4.726 262.942 4.979 261.896 5.151C260.446 3.942 255.363 5.522 252.95 5.619C252.162 4.224 245.848 3.985 246.244 2.341C237.099 1.837 232.343 1.446 223.882 1.637C220.293 3.022 206.382 2.719 199.28 2.106C198.579 3.2 190.297 3.061 188.103 2.575C187.764 3.035 189.61 3.04 190.337 3.277C187.764 4.606 188.935 7.307 184.745 8.899C186.791 9.795 190.515 10.344 192.575 11.241C187.964 13.422 199.937 14.037 202.638 15.457C198.507 16.698 196.003 18.282 189.218 18.968C189.567 20.215 186.98 20.843 181.395 20.843C177.816 23.217 166.079 23.882 156.793 25.058C155.089 27.211 162.181 27.522 166.853 28.339C165.265 28.941 164.238 29.661 160.147 29.743C152.388 27.253 137.125 26.086 138.903 22.248C143.385 22.016 144.578 21.094 145.613 20.14C139.82 19.402 138.85 17.654 136.666 16.159C138.303 15.956 140.21 15.809 140.018 15.222C138.537 14.03 131.257 14.536 127.721 14.284C128.853 15.546 121.49 16.19 115.423 16.628C118.126 16.919 119.039 17.587 119.894 18.266C116.246 21.154 97.868 22.004 99.768 25.293C100.098 25.908 95.432 25.478 96.414 26.23C99.38 28.235 109.135 26.709 116.538 26.462C118.149 26.593 119.271 26.828 119.894 27.166C117.536 28.624 114.616 29.963 108.713 30.678C105.309 30.69 104.363 30.184 102.003 29.976C97.656 31.173 98.706 33.501 91.941 34.191C76.148 34.083 65.189 33.028 52.804 31.616C53.799 29.611 46.608 29.453 52.804 28.102C46.763 28.185 43.879 27.143 40.504 26.932C34.743 26.568 27.273 26.925 22.616 26.697C13.643 26.259 13.854 24.531 17.025 22.716C11.567 22.756 15.649 21.893 13.67 21.548C8.567 22.099 3.998 21.921 0 21.429V59L8.15 58.999Z"
            fill={myPalette.background.default}
          />
        </svg>

        <section className="wrapper_pages">{children}</section>

        <div className="bottomWrapper">
          <svg
            className="bottom-bg-image"
            src="http://www.w3.org/2000/svg"
            width="1440"
            height="59"
            viewBox="0 0 1440 49"
          >
            <path
              d="M1431.85 0.000999451H1183.58H1178.66H0V11.627C5.03601 12.841 13.0439 10.71 19.715 12.233C18.573 13.332 21.5549 13.564 23.0649 14.106C17.089 15.537 8.38196 16.156 0.000976562 16.767V26.172C8.43201 27.303 13.063 29.23 26.424 29.329C27.599 28.625 29.641 28.269 33.136 28.626C37.427 27.574 39.1421 25.982 46.55 25.581C47.545 25.998 49.6731 26.177 48.7841 26.986C51.9491 27.18 51.6841 26.657 54.3781 26.753C58.7001 28.148 74.5439 28.972 67.7939 31.202L69.47 31.32L67.7939 31.437C70.1429 32.009 69.396 31.936 68.9139 32.843C73.3689 32.917 77.171 32.855 78.9771 32.373L79.533 32.022C80.851 32.806 85.226 32.861 88.484 32.648L87.922 33.077C95.182 32.952 86.274 33.455 90.1591 33.779C90.906 33.286 96.6641 34.321 97.9821 33.779L97.426 33.427L99.1 33.31C99.1 33.076 98.1991 33.032 97.9821 32.842C101.002 32.616 103.383 32.254 103.577 31.436C101.273 30.668 96.052 30.514 95.748 29.328C95.498 29.51 95.7169 29.79 94.632 29.796C85.599 29.034 78.717 27.821 70.031 26.986C69.468 24.055 83.656 23.779 92.394 23.005C92.6421 22.562 91.1279 22.487 91.272 22.068C92.9299 22.191 94.0911 22.414 95.748 22.538C95.291 21.972 97.79 22.028 96.869 21.366L95.558 21.015L96.869 20.662C96.631 20.4 95.6229 20.298 94.632 20.194C93.611 21.524 81.41 21.293 82.329 22.303C71.4349 22.753 69.2169 25.02 54.377 24.645C54.361 24.179 51.322 24.346 52.144 23.707C59.943 22.999 64.1229 21.532 72.2679 20.897C76.5559 18.516 90.015 18.056 97.983 16.447C98.171 16.721 99.751 16.702 101.34 16.682C103.08 15.411 105.985 14.205 112.519 13.402C121.703 13.51 129.681 13.867 131.528 15.51C130.212 16.092 129.683 16.842 127.055 17.151C135.224 16.455 130.26 18.509 134.883 18.554C137.563 18.648 134.263 17.488 138.237 17.851C140.202 17.909 140.791 18.255 140.472 18.788C147.197 18.875 156.056 18.346 163.953 18.788C167.932 18.048 169.522 17.872 175.133 18.321C178.065 17.296 174.957 15.798 181.843 15.276C183.189 13.979 178.652 13.915 178.488 12.936C182.667 11.297 174.425 10.019 175.134 9.187C187.781 10.298 186.125 13.731 186.317 16.213C186.372 16.917 190.283 17.37 186.317 17.851C189.839 17.816 188.492 18.801 190.79 19.023C191.907 19.023 193.027 19.023 194.145 19.023L193.584 18.671C195.154 18.884 196.048 18.963 196.938 19.023L196.382 19.256C198.08 19.759 201.156 19.975 203.088 20.427C198.207 21.692 203.125 23.054 207.559 23.706C204.311 23.91 206.303 24.057 206.445 24.644C209.715 25.107 210.073 24.726 212.036 25.346C212.699 25.831 210.649 26.885 213.155 26.985C213.292 25.888 214.782 27.242 217.624 26.985C217.677 26.663 217.098 26.472 216.505 26.284C219.913 26.294 222.2 26.071 223.219 25.58L221.539 25.309L224.894 25.23L224.331 25.581C225.593 25.631 226.076 25.843 226.57 26.051C224.646 26.037 223.7 26.23 223.218 26.517C228.727 26.378 228.727 27.394 229.922 28.158C236.808 28.363 235.616 27.239 236.63 26.752C238.386 26.854 237.59 27.489 241.109 27.22C242.031 26.713 245.324 26.699 245.578 26.051C238.55 25.343 243.12 22.875 243.344 20.898C255.138 21.315 253.155 24.619 263.471 25.347C268.847 23.919 277.104 24.701 281.358 25.815C282.166 27.714 272.932 29.444 281.358 30.266C284.772 29.809 288.821 29.487 294.777 29.562C296.924 30.597 302.277 30.958 309.312 30.968C309.89 28.037 305.316 26.461 303.72 23.943C306.783 23.029 313.537 24.177 316.022 23.005L315.46 22.654C316.95 22.734 318.442 22.778 319.935 22.654L319.375 23.005C328.467 23.131 328.301 23.083 335.027 23.24C334.437 24.646 336.674 24.241 341.735 24.176C342.4 24.923 339.635 24.901 341.735 25.347C346.488 25.855 351.187 25.889 355.155 26.051C355.916 26.983 357.983 27.643 357.39 28.861C363.783 28.381 358.527 30.34 361.863 30.501C361.863 30.267 361.863 30.033 361.863 29.796C370.12 30.106 375.107 28.137 385.342 28.861C387.956 30.42 396.802 30.676 396.523 32.842C401.47 32.863 404.595 32.503 406.586 31.905C401.386 31.589 405.316 29.361 398.762 29.328C399.376 28.286 404.216 28.13 407.706 27.688C416.351 29.859 439.818 28.926 440.133 32.841C443.536 32.266 450.43 32.903 447.964 31.904C448.645 32.229 452.262 31.939 452.431 32.371C450.184 32.782 453.945 33.915 453.549 34.715C449.384 34.286 450.999 35.119 450.195 36.119C456.259 36.002 455.624 36.954 458.019 37.291C462.349 37.902 464.643 37.019 469.204 37.525C469.116 37.116 469.45 36.796 470.32 36.588C475.931 37.471 477.992 35.95 481.503 35.65L482.808 35.3L484.857 35.417C482.638 33.565 479.569 33.267 474.794 32.137C473.846 32.825 471.191 31.998 469.205 32.137C465.714 32.556 469.562 33.055 466.968 33.542C461.533 33.586 464.762 31.82 461.374 31.435C464.502 31.84 471.291 32.296 472.559 31.2C469.845 30.443 465.2 30.089 463.612 29.094C465.324 25.067 449.837 24.642 444.603 22.067C450.169 21.359 454.652 20.424 461.374 19.96C458.13 19.703 456.006 19.212 453.55 18.788C457.574 18.069 460.194 17.059 465.849 16.682C469.069 16.711 467.791 17.68 471.441 17.618C477.165 16.615 479.833 17.7 483.736 16.682C484.796 17.787 490.76 17.864 492.687 18.788C495.74 18.96 494.94 18.324 497.156 18.321L496.598 17.969C497.464 18.161 498.504 18.271 499.354 18.276C499.801 18.005 501.538 17.787 503.308 17.501L502.745 17.851C507.719 18.061 510.685 18.688 511.694 19.726C515.259 19.865 515.151 19.286 517.283 19.726C514.232 20.361 520.176 20.309 519.52 21.13C524.945 20.633 528.131 21.961 536.288 21.6C538.353 20.391 546.15 20.385 547.475 19.022C546.392 18.235 544.291 17.658 541.886 17.15C550.381 17.108 543.921 18.003 550.833 17.85C551.079 17.409 549.569 17.334 549.708 16.915C556.764 17.104 560.103 14.803 568.719 14.573C571.42 15.117 566.973 15.2 566.482 15.744C568.836 15.952 571.452 16.108 573.192 16.446L573.748 16.095C574.288 16.563 574.174 17.157 577.103 17.266L575.427 17.382C578.238 18.043 581.56 18.596 584.372 19.256C584.376 19.493 583.463 19.535 583.253 19.726L584.934 19.997L584.372 20.426C588.217 20.479 587.967 21.393 589.965 21.832C591.866 21.451 595.572 21.447 596.669 20.896C599.667 21.05 600.925 21.566 603.381 21.832C603.295 21.425 603.629 21.104 604.499 20.896L602.823 20.622L606.177 20.544L606.73 20.896C608.158 22.008 611.797 23.353 615.675 23.238C617.494 24.006 615.425 24.133 615.675 25.112C619.937 25.586 618.277 25.929 621.269 26.751C626.827 25.763 629.031 27.477 634.686 26.516C635.934 27.272 640.416 27.347 639.161 28.624C643.573 27.894 651.04 28.189 655.934 28.624C656.23 27.361 660.258 26.876 662.642 26.049L660.962 25.774L661.524 25.345C659.926 25.288 659.638 24.958 658.17 24.877C659.258 24.1 660.376 25.138 661.524 25.111L662.642 25.228L663.763 25.345C663.945 25.074 665.525 25.093 667.117 25.111C667.117 25.188 667.117 25.267 667.117 25.345L668.791 25.228L670.468 25.345C681.936 24.095 686.447 27.778 692.83 29.093L693.951 29.21C694.074 29.366 694.201 29.522 694.512 29.678L692.83 29.561C692.212 30.212 688.506 30.217 686.122 30.499C685.494 31.566 688.103 31.956 687.239 33.075C693.362 32.964 696.462 33.485 700.652 33.777C699.986 33.168 701.104 32.935 704.012 33.075L705.688 32.956C705.688 32.956 707.366 33.075 706.25 32.607C706.348 32.305 712.915 32.592 707.366 33.075L706.058 33.426L704.012 33.309C704.012 33.542 704.012 33.777 704.012 34.011C708.485 34.258 711.674 34.699 715.189 34.011L714.635 33.66C716.878 33.76 718.839 33.873 720.749 34.136C721.533 34.046 722.784 33.928 723.604 33.695C723.716 33.466 723.604 33.282 723.577 32.957C723.223 32.687 722.204 32.576 721.213 32.461L719.108 32.021L720.785 32.138C720.847 31.995 720.948 31.861 721.901 31.905L721.343 31.555L720.784 31.201C720.428 30.658 720.966 30.304 721.9 30.033C725.178 30.229 721.232 30.786 721.9 31.201L723.576 31.475L723.016 31.904C724.558 31.894 725.474 32.014 726.372 32.137C726.376 32.371 725.468 32.416 725.255 32.607L726.934 32.724L726.372 33.075C726.916 33.352 727.565 33.605 728.609 33.777L729.17 33.425L730.844 33.542C736.849 32.514 741.343 33.784 746.501 33.542C747.165 32.043 748.668 30.717 756.564 30.733C764.627 32.327 752.615 35.002 749.856 36.587C745.284 36.441 749.215 35.609 745.38 35.649C741.51 36.357 746.451 36.634 738.671 36.352C734.418 37.384 740.425 38.18 736.434 38.695C742.782 38.018 740.95 39.584 743.148 40.333C744.702 40.865 748.501 41.008 749.857 41.739C750.925 42.321 750.284 42.532 750.975 43.146C755.972 43.52 762.574 42.896 761.036 41.973C771.151 41.933 767.648 40.397 768.864 38.696C772.637 38.159 782.79 38.958 782.282 37.525L780.6 37.642L781.163 37.291C780.849 36.81 778.174 36.823 776.693 36.588L775.386 36.94C774.993 36.772 774.72 36.608 774.118 36.425L775.575 36.119C774.813 35.265 774.011 34.416 774.454 33.309C784.975 32.681 792.758 34.404 792.344 36.823C790.862 37.056 788.182 37.043 787.87 37.525C790.21 37.66 791.067 38.105 794.579 37.993C794.93 37.677 796.172 37.547 795.697 37.056C796.645 36.019 801.041 36.065 799.052 34.949C806.249 35.255 797.802 33.643 803.526 33.543C806.212 34.543 808.891 35.543 810.231 36.823C814.09 37.809 822.593 37.823 825.885 38.929C825.734 42.569 830.098 45.915 843.779 47.127C843.698 47.922 843.429 48.761 846.016 49C846.183 48.419 849.798 48.932 850.49 49C844.86 47.127 853.355 44.962 850.49 43.146C850.025 43.545 849.044 43.096 847.135 43.146C847.445 43.756 847.507 44.317 843.78 44.082C843.989 43.189 847.782 43.048 848.253 42.209C846.167 42.176 844.51 42.054 843.78 41.74C843.238 40.377 847.53 40.028 849.373 39.164C847.781 38.716 845.918 38.326 843.78 37.993C845.508 37.652 844.764 36.795 844.895 36.119C839.937 35.52 839.944 33.878 834.834 33.309C831.35 33.61 837.642 34.624 832.595 34.715C826.703 34.567 829.498 33.991 829.243 32.841C820.394 32.04 819.458 29.58 811.35 28.625C813.416 26.638 812.261 23.975 821.416 23.473C823.215 24.815 829.127 25.292 828.123 27.22C830.147 27.525 833.769 27.01 837.066 27.453C837.923 26.775 838.841 26.109 841.543 25.815C849.272 26.256 852.365 28.815 851.608 30.266C853.302 30.923 858.853 30.776 860.551 31.436C857.787 31.765 858.578 32.243 859.43 32.842C864.744 32.933 867.496 32.345 871.73 32.842C871.565 32.261 872.309 31.871 873.97 31.671C874.261 32.002 876.42 31.939 877.323 32.139C880.348 31.711 877.517 31.346 879.557 30.969C882.497 30.898 880.44 31.878 884.031 31.671C886.33 31.607 885.079 30.798 887.384 30.735C895.219 30.346 896.445 28.572 907.511 28.861C910.214 29.934 913.945 30.79 920.926 30.968C923.422 29.148 931.441 28.486 936.579 27.22C946.717 26.971 946.689 28.852 955.594 28.861L955.034 28.509L956.709 28.391C956.709 28.002 956.709 27.61 956.709 27.22C960.737 26.996 958.694 28.23 957.828 28.391L958.387 28.743L956.71 28.861C961.205 29.421 960.783 30.53 963.42 30.968C964.153 29.95 974.665 30.98 974.602 29.796C979.632 30.726 987.421 29.763 991.374 29.095C993.933 29.339 995.331 29.826 999.196 29.796C1004.07 28.637 998.077 26.687 1004.79 26.285C1006.23 26.199 1016.26 28.252 1012.61 29.095C1015.89 29.424 1018.11 28.826 1020.44 29.563C1019.3 31.713 1018.41 32.282 1021.56 34.482C1025.41 34.379 1027.83 34.575 1030.51 34.716C1030.68 34.44 1030.32 34.05 1031.62 34.012C1036.1 34.858 1040.15 33.622 1045.04 33.779C1045.48 34.182 1043.38 34.379 1045.04 34.482C1049.07 34.389 1049.99 33.644 1052.87 33.311L1053.43 32.958L1055.11 33.077C1056.37 30.502 1071.29 32.899 1068.53 34.013C1076.98 33.807 1082.69 36.198 1089.77 37.058C1090.12 37.375 1091.36 37.505 1090.89 37.995C1097.81 38.106 1099.26 39.363 1107.66 39.166C1111.67 39.81 1111.77 41.27 1115.49 41.976C1118.65 42.17 1118.38 41.646 1121.08 41.742C1120.76 42.636 1126.21 42.708 1128.9 42.914C1133.86 43.29 1134.71 44.079 1136.73 44.084C1137.89 44.086 1140.39 42.648 1141.2 43.85L1142.88 43.968L1141.2 44.084C1142.51 44.514 1144.13 44.876 1145.68 45.256C1146.51 44 1150.86 44.182 1149.03 42.678C1152.29 42.425 1153.24 41.687 1157.98 41.741C1162.38 41.99 1162.45 43.145 1163.57 44.083C1168.75 44.013 1173.25 44.085 1175.87 44.551C1176.41 44.274 1177.06 44.021 1178.1 43.849C1179.55 45.058 1184.64 43.478 1187.05 43.381C1187.84 44.776 1194.15 45.015 1193.76 46.659C1202.9 47.163 1207.66 47.554 1216.12 47.363C1219.71 45.978 1233.62 46.281 1240.72 46.894C1241.42 45.8 1249.7 45.939 1251.9 46.425C1252.24 45.965 1250.39 45.96 1249.66 45.723C1252.24 44.394 1251.07 41.693 1255.26 40.101C1253.21 39.205 1249.49 38.656 1247.43 37.759C1252.04 35.578 1240.06 34.963 1237.36 33.543C1241.49 32.302 1244 30.718 1250.78 30.032C1250.43 28.785 1253.02 28.157 1258.6 28.157C1262.18 25.783 1273.92 25.118 1283.21 23.942C1284.91 21.789 1277.82 21.478 1273.15 20.661C1274.74 20.059 1275.76 19.339 1279.85 19.257C1287.61 21.747 1302.88 22.914 1301.1 26.752C1296.62 26.984 1295.42 27.906 1294.39 28.86C1300.18 29.598 1301.15 31.346 1303.33 32.841C1301.7 33.044 1299.79 33.191 1299.98 33.778C1301.46 34.97 1308.74 34.464 1312.28 34.716C1311.15 33.454 1318.51 32.81 1324.58 32.372C1321.87 32.081 1320.96 31.413 1320.11 30.734C1323.75 27.846 1342.13 26.996 1340.23 23.707C1339.9 23.092 1344.57 23.522 1343.59 22.77C1340.62 20.765 1330.86 22.291 1323.46 22.538C1321.85 22.407 1320.73 22.172 1320.11 21.834C1322.46 20.376 1325.38 19.037 1331.29 18.322C1334.69 18.31 1335.64 18.816 1338 19.024C1342.34 17.827 1341.29 15.499 1348.06 14.809C1363.85 14.917 1374.81 15.972 1387.2 17.384C1386.2 19.389 1393.39 19.547 1387.2 20.898C1393.24 20.815 1396.12 21.857 1399.5 22.068C1405.26 22.432 1412.73 22.075 1417.38 22.303C1426.36 22.741 1426.15 24.469 1422.98 26.284C1428.43 26.244 1424.35 27.107 1426.33 27.452C1431.43 26.901 1436 27.079 1440 27.571V0L1431.85 0.000999451Z"
              fill={myPalette.background.default}
            />
          </svg>
          <Footer />
          <CopyRights />
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Layout;
