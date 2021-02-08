import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./HeaderPage.module.scss";

type HeaderProps = {
  styleOptions: React.CSSProperties;
};

const Header = ({ styleOptions }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.Container} style={styleOptions}>
      <NavLink to="/">
        <div className={styles.Logo}>
          <svg viewBox="0 0 55.562499 10.583334" width="200px" fill="#009fA2">
            <path d="M 3.4478519,1.1175871e-5 C 2.4871549,1.1175871e-5 1.6718789,0.26059018 1.0030399,0.78187618 0.33419894,1.2910402 -5.9604645e-8,1.9091662 -5.9604645e-8,2.6365432 V 7.9468129 C -5.9604645e-8,8.6741898 0.33419894,9.2982802 1.0030399,9.8195668 1.6718789,10.32873 2.4871549,10.583344 3.4478519,10.583344 H 13.772286 17.21962 V 7.7101349 H 14.811499 12.221476 9.6624589 L 10.626225,8.6739003 C 10.679417,8.7270914 10.691137,8.8001913 10.65258,8.8387482 10.614023,8.8773051 10.539888,8.8661011 10.486698,8.81291 L 9.3839229,7.7101349 H 8.6470169 L 8.6857749,7.7773142 C 8.7082589,7.8162585 8.6947459,7.8659346 8.6558019,7.8884186 L 8.6092929,7.9152905 C 8.5703499,7.9377745 8.5206729,7.9247797 8.4981889,7.8858349 L 8.3969029,7.7101349 H 7.8904739 L 8.4940549,9.9637441 C 8.5135229,10.036404 8.4867799,10.105693 8.4341099,10.119807 8.3814399,10.13392 8.3233549,10.087047 8.3038859,10.014387 L 7.6863519,7.7101349 H 7.2615719 V 8.2170808 C 7.2615719,8.2620497 7.2254089,8.2982127 7.1804399,8.2982127 H 7.1266969 C 7.0817279,8.2982127 7.0450479,8.2620497 7.0450479,8.2170808 V 7.7101349 H 6.6202679 L 6.0027339,10.014387 C 5.9832649,10.087047 5.9251799,10.13392 5.8725099,10.119807 5.8198399,10.105695 5.7930959,10.036403 5.8125649,9.9637441 L 6.4166619,7.7101349 H 5.9097169 L 5.8084309,7.8858349 C 5.7859469,7.9247787 5.7367869,7.9377745 5.6978429,7.9152905 L 5.6508179,7.8884186 C 5.6118739,7.8659346 5.5988779,7.8162585 5.6213619,7.7773142 L 5.6601199,7.7101349 H 5.0343179 C 4.9973259,7.7101349 4.9620939,7.7079558 4.9257979,7.7070343 L 3.8199219,8.81291 C 3.7667309,8.8660998 3.6931139,8.8773051 3.6545569,8.8387482 3.6159999,8.8001913 3.6277209,8.7265747 3.6809119,8.6733836 L 4.6627639,7.6915313 C 4.1690989,7.6457959 3.7446439,7.5079806 3.3925579,7.273986 3.0928569,7.0748061 2.8985239,6.8520541 2.8039629,6.6073598 L 2.5305949,6.6807404 C 2.4579349,6.7002095 2.3876119,6.6739824 2.3734979,6.6213126 2.3593859,6.5686425 2.4067749,6.5100402 2.4794349,6.4905711 L 2.7502199,6.418224 C 2.7413049,6.3648433 2.7357499,6.3107913 2.7357499,6.2554433 V 4.2581492 L 2.4794349,4.1894192 C 2.4067749,4.1699492 2.3593859,4.1123822 2.3734979,4.0597122 2.3805559,4.0333772 2.4015029,4.0132442 2.4298259,4.0023512 2.4581499,3.9914582 2.4942659,3.9895162 2.5305949,3.9992502 L 2.7590049,4.0607452 C 2.8294119,3.7395492 3.0526649,3.4585962 3.4297649,3.2184192 3.7387429,3.0216302 4.1000389,2.8959302 4.5118689,2.8380812 L 3.6803949,2.0066072 C 3.6272039,1.9534162 3.6159999,1.8797992 3.6545569,1.8412422 3.6641959,1.8316032 3.6760219,1.8251022 3.6891799,1.8216052 3.7286559,1.8111132 3.7800289,1.8277042 3.8199219,1.8675972 L 4.7640499,2.8117262 C 4.8580849,2.8051642 4.9534829,2.8003572 5.0524049,2.8003572 H 5.6440999 C 5.6471399,2.7979612 5.6473629,2.7935672 5.6508179,2.7915722 L 5.6978429,2.7647002 C 5.7367869,2.7422152 5.7859469,2.7552122 5.8084309,2.7941562 L 5.8120479,2.8003572 H 6.3711869 L 5.8125649,0.71676318 C 5.7930959,0.64410318 5.8203559,0.57481318 5.8730269,0.56070018 5.9256959,0.54658718 5.9832649,0.59294418 6.0027339,0.66560418 L 6.5747919,2.8003572 H 7.0450479 V 2.4629102 C 7.0450479,2.4179422 7.0817279,2.3817782 7.1266969,2.3817782 H 7.1804399 C 7.2254089,2.3817782 7.2615719,2.4179422 7.2615719,2.4629102 V 2.8003572 H 7.7318279 L 8.3038859,0.66612018 C 8.3184879,0.61162518 8.3547459,0.57190618 8.3943189,0.56121718 8.4075099,0.55765418 8.4214589,0.55717218 8.4346269,0.56070018 8.4872969,0.57481318 8.5135229,0.64410318 8.4940549,0.71676318 L 7.9359499,2.8003572 H 8.4945719 L 8.4981889,2.7941562 C 8.5206729,2.7552122 8.5703499,2.7422162 8.6092929,2.7647002 L 8.6558019,2.7915722 C 8.6592399,2.7935572 8.6594849,2.7979742 8.6625199,2.8003572 H 9.5544549 L 10.487215,1.8675972 C 10.513809,1.8410022 10.545091,1.8242662 10.575065,1.8195382 10.60504,1.8148102 10.633299,1.8219632 10.65258,1.8412422 10.691137,1.8797992 10.678898,1.9534162 10.625708,2.0066072 L 9.8319579,2.8003572 H 17.21962 V 1.1175871e-5 L 13.772286,0.01809818 Z M 9.8319579,2.8003572 H 9.5544549 L 8.1416219,4.2126742 A 1.5,1.5 0 0 1 8.2806309,4.3516842 Z M 8.6625199,2.8003572 H 8.4945719 L 7.5261549,4.4777742 A 0.93868625,0.93987987 0 0 0 7.2615719,4.4069772 V 2.8003572 H 7.0450479 V 4.4064602 A 0.93868625,0.93987987 0 0 0 6.7804649,4.4772572 L 5.8120479,2.8003572 H 5.6440999 C 5.6128759,2.8249712 5.6008729,2.8671882 5.6213619,2.9026762 L 6.5928789,4.5857782 A 0.93868625,0.93987987 0 0 0 6.3990929,4.7795642 L 4.7159909,3.8075312 C 4.6770469,3.7850472 4.6273709,3.7985602 4.6048869,3.8375032 L 4.5780149,3.8840122 C 4.5555309,3.9229552 4.5690429,3.9726312 4.6079879,3.9951162 L 6.2910889,4.9671502 A 0.93868625,0.93987987 0 0 0 6.2202919,5.2317332 H 4.2762249 C 4.2312559,5.2317332 4.1950929,5.2678964 4.1950929,5.3128652 V 5.3671255 C 4.1950929,5.4120935 4.2312559,5.4482575 4.2762249,5.4482575 H 6.2202919 A 0.93868625,0.93987987 0 0 0 6.2910889,5.7128409 L 4.6079879,6.6848745 C 4.5690429,6.7073586 4.5555309,6.7565171 4.5780149,6.7954622 L 4.6048869,6.8424876 C 4.6273739,6.8814316 4.6770469,6.8944272 4.7159909,6.8719431 L 6.3990929,5.9004262 A 0.93868625,0.93987987 0 0 0 6.5928789,6.0942129 L 5.6601199,7.7101349 H 5.9097169 L 6.7804649,6.2022166 A 0.93868625,0.93987987 0 0 0 7.0450479,6.2735303 V 7.7101349 H 7.2615719 V 6.2730133 A 0.93868625,0.93987987 0 0 0 7.5261549,6.2022166 L 8.3969029,7.7101349 H 8.6470169 L 7.7132239,6.0936961 A 0.93868625,0.93987987 0 0 0 7.9064939,5.8993928 L 9.5911459,6.8719431 C 9.6300899,6.8944272 9.6792489,6.8814316 9.7017329,6.8424876 L 9.7286049,6.7954622 C 9.7510899,6.7565179 9.7380929,6.7073586 9.6991489,6.6848745 L 8.0144979,5.7118074 A 0.93868625,0.93987987 0 0 0 8.0847779,5.4482575 H 10.030395 C 10.075367,5.4482575 10.111527,5.4120935 10.111527,5.3671255 V 5.3128652 C 10.111527,5.2678964 10.075367,5.2317332 10.030395,5.2317332 H 8.0847779 A 0.93868625,0.93987987 0 0 0 8.0144979,4.9676672 L 9.6991489,3.9951162 C 9.7380929,3.9726312 9.7510899,3.9229562 9.7286049,3.8840122 L 9.7017329,3.8375032 C 9.6792489,3.7985592 9.6300899,3.7850472 9.5911459,3.8075312 L 7.9064939,4.7800812 A 0.93868625,0.93987987 0 0 0 7.7137409,4.5862942 L 8.6857749,2.9026762 C 8.7062739,2.8671702 8.6938569,2.8249642 8.6625199,2.8003572 Z M 7.9359499,2.8003572 H 7.7318279 L 7.4455399,3.8690262 A 1.5,1.5 0 0 1 7.6357099,3.9201852 Z M 6.5747919,2.8003572 H 6.3711869 L 6.6709109,3.9196682 A 1.5,1.5 0 0 1 6.7153519,3.9057162 1.5,1.5 0 0 1 6.8610799,3.8690262 Z M 4.7640499,2.8117262 C 4.6778189,2.8177422 4.5939959,2.8265462 4.5118689,2.8380812 L 6.0254719,4.3516842 A 1.5,1.5 0 0 1 6.1644809,4.2121572 Z M 2.7590049,4.0607452 C 2.7476749,4.1124342 2.7391219,4.1651002 2.7357499,4.2188752 V 4.2581492 L 5.6823399,5.0477652 A 1.5,1.5 0 0 1 5.7329829,4.8575962 Z M 2.7502199,6.418224 C 2.7610139,6.4828572 2.7801019,6.5456143 2.8039629,6.6073598 L 5.7324669,5.8229115 A 1.5,1.5 0 0 1 5.7133459,5.7614168 1.5,1.5 0 0 1 5.6818239,5.6327422 Z M 4.6627639,7.6915313 C 4.7483479,7.6994608 4.8359589,7.7047536 4.9257979,7.7070343 L 6.1644809,6.4688671 A 1.5,1.5 0 0 1 6.0254719,6.3288239 Z M 6.4166619,7.7101349 H 6.6202679 L 6.8610799,6.8114819 A 1.5,1.5 0 0 1 6.6709109,6.7608388 Z M 7.6863519,7.7101349 H 7.8904739 L 7.6357099,6.7598053 A 1.5,1.5 0 0 1 7.5576779,6.78461 1.5,1.5 0 0 1 7.4455399,6.8114819 Z M 9.3839229,7.7101349 H 9.6624589 L 8.2806309,6.3288239 A 1.5,1.5 0 0 1 8.1421389,6.4678334 Z M 19.171439,1.1175871e-5 V 2.8003572 H 33.545756 V 4.0008012 H 19.171439 V 4.6452062 H 36.27117 C 36.314898,4.4338972 36.391061,4.2529762 36.391061,4.0008012 V 2.8003572 C 36.391061,1.8668902 36.062787,1.1696842 35.406107,0.70901218 34.74943,0.23621718 33.928224,0.00597518 32.94321,0.01809818 L 22.618774,1.1175871e-5 Z M 38.342363,1.1175871e-5 V 2.8003572 H 42.428935 45.530037 V 4.6452062 H 48.265788 V 2.8003572 H 51.257853 C 51.040847,2.6018312 50.798909,2.4297512 50.535932,2.2913442 L 50.626882,2.1208122 C 50.964867,2.2990182 51.269489,2.5300312 51.533805,2.8003572 H 52.436074 C 52.047359,2.2655242 51.540539,1.8212412 50.950378,1.5099962 L 51.040813,1.3394642 C 51.698223,1.6866512 52.257983,2.1909892 52.673271,2.8003572 H 53.483557 C 52.992567,1.9236002 52.257256,1.2005372 51.364305,0.72916618 L 51.455256,0.55811718 C 52.412759,1.0640402 53.196495,1.8489482 53.705249,2.8003572 H 55.562499 V 1.1175871e-5 L 52.114648,0.01809818 41.790215,1.1175871e-5 Z M 53.705249,2.8003572 H 53.483557 C 53.922776,3.5846702 54.167074,4.4918782 54.145015,5.4565258 54.100224,7.4147496 52.983471,9.0967053 51.36689,9.950825 L 51.457841,10.121874 C 53.134651,9.2357486 54.293941,7.4910335 54.340352,5.4616934 54.36236,4.4996222 54.128884,3.5925872 53.705249,2.8003572 Z M 52.673271,2.8003572 H 52.436074 C 52.973215,3.5394032 53.282836,4.4527242 53.260315,5.4374054 53.223106,7.0643574 52.295329,8.4609856 50.951928,9.1689606 L 51.043395,9.3400095 C 52.446038,8.5985975 53.415797,7.1378301 53.454617,5.440506 53.476985,4.4626042 53.185245,3.5516012 52.673271,2.8003572 Z M 51.533805,2.8003572 H 51.257853 C 51.964714,3.4470212 52.400295,4.3824342 52.376646,5.4162181 52.347031,6.711163 51.607293,7.8233224 50.537482,8.3865795 L 50.627917,8.5571117 C 51.757593,7.9613446 52.538669,6.7865563 52.569916,5.4203522 52.593189,4.4028882 52.1937,3.4752582 51.533805,2.8003572 Z M 50.212439,2.9021602 50.122005,3.0726922 C 50.954535,3.5099732 51.513374,4.3907982 51.490398,5.3955475 51.468361,6.3589706 50.918776,7.186379 50.123039,7.6047151 L 50.213471,7.775764 C 51.069665,7.3253141 51.662594,6.435514 51.68625,5.4012318 51.710933,4.3219242 51.108178,3.3735522 50.212439,2.9021602 Z M 49.797993,3.6835072 49.707559,3.8545562 C 50.254116,4.1402602 50.621276,4.7177132 50.606213,5.3764271 50.591767,6.0079992 50.230431,6.5488774 49.708077,6.8213003 L 49.799028,6.9933829 C 50.381029,6.6878159 50.783931,6.0827077 50.799999,5.3800445 50.816766,4.6469362 50.406985,4.0028432 49.797993,3.6835072 Z M 11.829769,3.9930492 C 11.812763,3.9924362 11.794707,3.9943822 11.776542,3.9992502 L 8.5731199,4.8575962 A 1.5,1.5 0 0 1 8.5824219,4.8865352 L 8.6015419,4.9521642 A 1.5,1.5 0 0 1 8.6242799,5.0477652 L 11.827702,4.1894192 C 11.900361,4.1699492 11.94775,4.1123812 11.933638,4.0597122 11.923053,4.0202102 11.880785,3.9948872 11.829769,3.9930492 Z M 49.383031,4.4664052 49.292081,4.6379712 C 49.553066,4.7706362 49.729196,5.0418372 49.722029,5.3552398 49.71516,5.6555419 49.541207,5.909484 49.292081,6.036852 L 49.381481,6.205834 C 49.690422,6.045747 49.907327,5.730478 49.915815,5.359374 49.924662,4.9724652 49.705762,4.6336802 49.383031,4.4664052 Z M 49.216632,5.1402662 C 49.107134,5.1440302 49.02137,5.2353702 49.023881,5.3449047 49.026389,5.4544393 49.116379,5.5414964 49.225935,5.5402415 49.335491,5.5389866 49.423856,5.449817 49.423856,5.3402538 L 49.423341,5.3309521 C 49.418321,5.2215032 49.326133,5.1365022 49.216632,5.1402662 Z M 11.582239,5.2348342 C 11.300695,5.2348342 11.074259,5.2820619 11.074259,5.3402538 11.074259,5.3984458 11.300695,5.4451569 11.582239,5.4451569 H 47.607947 C 47.88949,5.4451569 48.115926,5.3984458 48.115926,5.3402538 48.115926,5.2820619 47.88949,5.2348342 47.607947,5.2348342 Z M 8.6242799,5.6322255 A 1.5,1.5 0 0 1 8.5731199,5.8223948 L 11.776542,6.6807404 C 11.849201,6.7002095 11.919525,6.6734652 11.933638,6.6207959 11.947751,6.5681269 11.899845,6.5100402 11.827185,6.4905711 Z M 19.171439,5.9154125 V 7.9468129 10.583344 H 21.907706 V 7.7101349 6.5102083 H 32.925123 C 34.080389,6.5102083 34.943589,6.3222297 35.515145,5.9464182 35.527622,5.9383852 35.533515,5.9237828 35.545633,5.9154125 Z M 45.530037,5.9154125 V 10.583344 H 48.265788 V 5.9154125 Z" />
          </svg>
        </div>
      </NavLink>
    </div>
  );
};

export default Header;