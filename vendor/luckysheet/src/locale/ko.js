export default {
    functionlist: {
        SUMIF: {
            d: "지정된 조건을 만족하는 범위 내의 값들을 더합니다.",
            a: "지정된 조건을 만족하는 범위 내의 값들을 더합니다.",
            p: [
                {
                    name: "범위",
                    detail: "조건에 따라 검사할 범위입니다.",
                },
                {
                    name: "조건",
                    detail:
                        "범위에 적용할 패턴 또는 테스트 조건입니다.\n\n범위에 검사할 텍스트가 포함된 경우 조건은 반드시 문자열이어야 합니다. 조건에는 단일 문자를 일치시키는 ? 또는 0개 이상의 연속된 문자를 일치시키는 * 같은 와일드카드가 포함될 수 있습니다. 물음표나 별표 자체를 일치시키려면 해당 문자 앞에 물결표(~) 접두사를 붙입니다(예: ~? 및 ~*). 문자열 조건은 반드시 따옴표로 감싸야 합니다. 함수는 범위의 각 셀이 조건과 일치하는지(와일드광를 사용한 경우 매칭되는지) 확인합니다.\n\n범위에 검사할 숫자가 포함된 경우 조건은 문자열일 수도 있고 숫자일 수도 있습니다. 주어진 조건이 숫자이면 범위의 각 셀이 조건과 같은지 검사합니다. 또한 조건은 숫자를 포함하는 문자열(마찬가지로 일치 여부 검사)이거나, 다음과 같은 접두사가 붙은 숫자일 수 있습니다: = (같음), > (범위 셀의 값이 조건값보다 큼), < (범위 셀의 값이 조건값보다 작음)",
                },
                {
                    name: "합계 범위",
                    detail: "더할 범위입니다(범위와 다른 경우).",
                },
            ],
        },
        TAN: {
            d: "주어진 각도의 탄젠트 값을 반환합니다.",
            a: "주어진 각도의 탄젠트 값을 반환합니다.",
            p: [
                {
                    name: "각도",
                    detail: "탄젠트 값을 구할 각도이며, 라디안 단위로 지정합니다.",
                },
            ],
        },
        TANH: {
            d: "주어진 실수의 쌍곡탄젠트 값을 반환합니다.",
            a: "주어진 실수의 쌍곡탄젠트 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "쌍곡탄젠트 값을 구할 실수입니다.",
                },
            ],
        },
        CEILING: {
            d: "가장 가까운 지정된 인수(배수)의 배수로 숫자를 올림합니다.",
            a: "가장 가까운 지정된 인수(배수)의 배수로 숫자를 올림합니다.",
            p: [
                {
                    name: "값",
                    detail: "올림할 숫자입니다.",
                },
                {
                    name: "인수",
                    detail: "값을 이 숫자의 정수 배로 올림합니다.",
                },
            ],
        },
        ATAN: {
            d: "숫자의 아크탄젠트(역탄젠트) 값을 라디안 단위로 반환합니다.",
            a: "숫자의 아크탄젠트 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "아크탄젠트 값을 구할 숫자입니다.",
                },
            ],
        },
        ASINH: {
            d: "숫자의 역쌍곡정현 값을 반환합니다.",
            a: "숫자의 역쌍곡정현 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "역쌍곡정현 값을 구할 숫자입니다.",
                },
            ],
        },
        ABS: {
            d: "숫자의 절대값을 반환합니다.",
            a: "숫자의 절대값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "절대값을 구할 숫자입니다.",
                },
            ],
        },
        ACOS: {
            d: "숫자의 아크코사인(역코사인) 값을 라디안 단위로 반환합니다.",
            a: "숫자의 아크코사인 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "아크코사인 값을 구할 숫자입니다. 경계값을 포함하여 -1과 1 사이여야 합니다.",
                },
            ],
        },
        ACOSH: {
            d: "숫자의 역쌍곡여현 값을 반환합니다.",
            a: "숫자의 역쌍곡여현 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "역쌍곡여현 값을 구할 숫자입니다. 1 이상이어야 합니다.",
                },
            ],
        },
        MULTINOMIAL: {
            d: "인수들의 합의 계승을 각 인수 계승의 곱으로 나눈 값을 반환합니다.",
            a: "인수들의 합의 계승을 각 인수 계승의 곱으로 나눈 값을 반환합니다.",
            p: [
                {
                    name: "값1",
                    detail: "계산에 사용할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "값2",
                    detail: "계산에 사용할 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        ATANH: {
            d: "숫자의 역쌍곡탄젠트 값을 반환합니다.",
            a: "숫자의 역쌍곡탄젠트 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "역쌍곡탄젠트 값을 구할 숫자입니다. -1과 1 사이여야 합니다(-1과 1 제외).",
                },
            ],
        },
        ATAN2: {
            d: "x축과 원점(0,0)에서 지정된 좌표점(`x`,`y`)을 연결한 선 사이의 각도를 라디안 단위로 반환합니다.",
            a: "x축과 원점(0,0)에서 지정된 좌표점(`x`,`y`)을 연결한 선 사이의 각도를 라디안 단위로 반환합니다.",
            p: [
                {
                    name: "x",
                    detail: "x축과의 각도를 계산할 선분의 끝점 x 좌표입니다.",
                },
                {
                    name: "y",
                    detail: "x축과의 각도를 계산할 선분의 끝점 y 좌표입니다.",
                },
            ],
        },
        COUNTBLANK: {
            d: "지정한 범위 내의 빈 셀 개수를 반환합니다.",
            a: "지정한 범위 내의 빈 셀 개수를 반환합니다.",
            p: [
                {
                    name: "범위",
                    detail: "빈 셀의 개수를 셀 범위입니다.",
                },
            ],
        },
        COSH: {
            d: "주어진 실수의 쌍곡코사인 값을 반환합니다.",
            a: "주어진 실수의 쌍곡코사인 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "쌍곡코사인 값을 구할 실수입니다.",
                },
            ],
        },
        INT: {
            d: "숫자를 그보다 작거나 같은 가장 가까운 정수로 내림합니다.",
            a: "숫자를 그보다 작거나 같은 가장 가까운 정수로 내림합니다.",
            p: [
                {
                    name: "값",
                    detail: "가장 가까운 정수로 내림할 숫자입니다.",
                },
            ],
        },
        ISEVEN: {
            d: "제공된 숫자가 짝수인지 확인합니다.",
            a: "제공된 숫자가 짝수인지 확인합니다.",
            p: [
                {
                    name: "값",
                    detail:
                        "짝수인지 검증할 숫자입니다.\n\n값이 짝수이거나 짝수가 포함된 셀을 참조하는 경우 ISEVEN은 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.",
                },
            ],
        },
        ISODD: {
            d: "제공된 숫자가 홀수인지 확인합니다.",
            a: "제공된 숫자가 홀수인지 확인합니다.",
            p: [
                {
                    name: "값",
                    detail:
                        "홀수인지 검증할 숫자입니다.\n\n값이 홀수이거나 홀수가 포함된 셀을 참조하는 경우 ISODD는 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.",
                },
            ],
        },
        LCM: {
            d: "하나 이상의 정수의 최소공배수를 반환합니다.",
            a: "하나 이상의 정수의 최소공배수를 반환합니다.",
            p: [
                {
                    name: "값1",
                    detail: "최소공배수를 구할 때 인수를 확인할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "값2",
                    detail: "[선택] - 최소공배수를 구할 때 인수를 고려할 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        LN: {
            d: "e(오일러 상수)를 밑으로 하는 숫자의 자연로그 값을 반환합니다.",
            a: "e(오일러 상수)를 밑으로 하는 숫자의 자연로그 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "e를 밑으로 하여 로그를 구할 값입니다.\n\n값은 양수여야 합니다.",
                },
            ],
        },
        LOG: {
            d: "지정한 밑을 기준으로 숫자의 로그 값을 반환합니다.",
            a: "지정한 밑을 기준으로 숫자의 로그 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "로그를 계산할 양의 실수입니다.",
                },
                {
                    name: "밑",
                    detail: "[선택] - 로그의 밑입니다.",
                },
            ],
        },
        LOG10: {
            d: "10을 밑으로 하는 숫자의 상용로그 값을 반환합니다.",
            a: "10을 밑으로 하는 숫자의 상용로그 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "10을 밑으로 하여 로그를 구할 숫자입니다.\n\n값은 양수여야 합니다.",
                },
            ],
        },
        MOD: {
            d: "두 수를 나눈 나머지를 반환하며, 결과의 부호는 제수(나누는 수)와 같습니다.",
            a: "두 수를 나눈 나머지를 반환합니다.",
            p: [
                {
                    name: "피제수",
                    detail: "나누어 나머지를 구할 숫자입니다.",
                },
                {
                    name: "제수",
                    detail: "다른 숫자를 나눌 숫자입니다.",
                },
            ],
        },
        MROUND: {
            d: "숫자를 다른 정수의 가장 가까운 배수로 반올림합니다.",
            a: "숫자를 다른 정수의 가장 가까운 배수로 반올림합니다.",
            p: [
                {
                    name: "값",
                    detail: "다른 정수의 가장 가까운 배수로 반올림할 숫자입니다.",
                },
                {
                    name: "인수",
                    detail: "값은 이 인수의 정수 배로 반올림됩니다.",
                },
            ],
        },
        ODD: {
            d: "가장 가까운 홀수로 숫자를 올림합니다.",
            a: "가장 가까운 홀수로 숫자를 올림합니다.",
            p: [
                {
                    name: "값",
                    detail:
                        "올림할 숫자이며, 이 값보다 큰 가장 가까운 홀수로 올림됩니다.\n\n음수인 경우 절대값이 더 큰 인접한 음의 홀수로 올림됩니다.",
                },
            ],
        },
        SUMSQ: {
            d: "일련의 숫자 및/또는 셀의 제곱의 합을 반환합니다.",
            a: "일련의 숫자 및/또는 셀의 제곱의 합을 반환합니다.",
            p: [
                {
                    name: "값1",
                    detail: "제곱하여 더할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "값2, ...",
                    detail: "[선택] - 값1의 제곱에 추가로 제곱하여 더할 숫자 또는 범위입니다.",
                },
            ],
        },
        COMBIN: {
            d: "집합의 전체 객체 수와 선택할 객체 수가 주어졌을 때, 서로 다른 조합의 수를 반환합니다.",
            a: "집합의 전체 객체 수와 선택할 객체 수가 주어졌을 때 조합의 수를 반환합니다.",
            p: [
                {
                    name: "n",
                    detail: "선택할 대상이 되는 전체 객체 집합의 크기입니다.",
                },
                {
                    name: "k",
                    detail: "선택할 객체의 수입니다.",
                },
            ],
        },
        SUM: {
            d: "일련의 숫자 및/또는 셀의 합계를 반환합니다.",
            a: "일련의 숫자 및/또는 셀의 합계를 반환합니다.",
            p: [
                {
                    name: "값1",
                    detail: "더할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "값2",
                    detail: "[선택] - 더할 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        SUBTOTAL: {
            d: "지정한 요약 함수를 사용하여 열 방향 셀들의 부분합을 반환합니다.",
            a: "지정한 요약 함수를 사용하여 부분합을 반환합니다.",
            p: [
                {
                    name: "함수 코드",
                    detail:
                        "부분합을 계산하는 데 사용할 함수입니다.\n\n1은 AVERAGE\n\n2는 COUNT\n\n3은 COUNTA\n\n4는 MAX\n\n5는 MIN\n\n6은 PRODUCT\n\n7은 STDEV\n\n8은 STDEVP\n\n9는 SUM\n\n10은 VAR\n\n11은 VARP\n\n이러한 2자리 코드 앞에 10(1자리 코드의 경우) 또는 1(2자리 코드의 경우)을 붙여 숨겨진 값을 무시하도록 설정할 수 있습니다. 예를 들어 102는 숨겨진 셀을 제외한 COUNT를 의미하며, 110은 숨겨진 값을 제외한 VAR를 의미합니다.",
                },
                {
                    name: "범위1",
                    detail: "부분합을 계산할 첫 번째 범위입니다.",
                },
                {
                    name: "범위2",
                    detail: "[선택] - 부분합을 계산할 추가 범위입니다.",
                },
            ],
        },
        ASIN: {
            d: "숫자의 아크사인(역사인) 값을 라디안 단위로 반환합니다.",
            a: "숫자의 아크사인 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "아크사인 값을 구할 숫자입니다. 경계값을 포함하여 -1과 1 사이여야 합니다.",
                },
            ],
        },
        COUNTIF: {
            d: "범위 내에서 특정 조건을 만족하는 셀의 개수를 반환합니다.",
            a: "범위 내에서 특정 조건을 만족하는 셀의 개수를 반환합니다.",
            p: [
                {
                    name: "범위",
                    detail: "조건에 따라 검사할 범위입니다.",
                },
                {
                    name: "조건",
                    detail:
                        "범위에 적용할 패턴 또는 테스트 조건입니다.\n\n범위에 검사할 텍스트가 포함된 경우 조건은 반드시 문자열이어야 합니다. 조건에는 단일 문자를 일치시키는 ? 또는 0개 이상의 연속된 문자를 일치시키는 * 같은 와일드카드가 포함될 수 있습니다. 물음표나 별표 자체를 일치시키려면 해당 문자 앞에 물결표(~) 접두사를 붙입니다(예: ~? 및 ~*). 문자열 조건은 반드시 따옴표로 감싸야 합니다. 함수는 범위의 각 셀이 조건과 일치하는지(와일드카드를 사용한 경우 매칭되는지) 확인합니다.\n\n범위에 검사할 숫자가 포함된 경우 조건은 문자열일 수도 있고 숫자일 수도 있습니다. 주어진 조건이 숫자이면 범위의 각 셀이 조건과 같은지 검사합니다. 또한 조건은 숫자를 포함하는 문자열이거나, =, >, >=, < 또는 <= 같은 접두사가 붙은 숫자일 수 있으며, 각각 범위의 셀이 조건값과 같거나, 크거나, 크거나 같거나, 작거나, 작거나 같은지 검사하는 데 사용됩니다.",
                },
            ],
        },
        RADIANS: {
            d: "각도(도) 값을 라디안으로 변환합니다.",
            a: "각도(도) 값을 라디안으로 변환합니다.",
            p: [
                {
                    name: "각도",
                    detail: "도 단위에서 라디안으로 변환할 각도입니다.",
                },
            ],
        },
        RAND: {
            d: "0 이상 1 미만(0은 포함하고 1은 제외)의 난수를 반환합니다.",
            a: "0 이상 1 미만의 난수를 반환합니다.",
            p: [],
        },
        COUNTUNIQUE: {
            d: "지정한 값과 범위 내에서 중복을 제외한 고유한 숫자의 개수를 계산합니다.",
            a: "지정한 값과 범위 내에서 고유한 값의 개수를 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "고유 여부를 확인할 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2",
                    detail: "[선택] - 고유 여부를 확인할 추가 값 또는 범위입니다.",
                },
            ],
        },
        DEGREES: {
            d: "라디안 단위의 각도를 도(degree) 단위로 변환합니다.",
            a: "라디안 단위의 각도를 도 단위로 변환합니다.",
            p: [
                {
                    name: "각도",
                    detail: "라디안에서 도로 변환할 각도입니다.",
                },
            ],
        },
        ERFC: {
            d: "숫자의 상보 오차 함수(complementary error function) 값을 반환합니다.",
            a: "숫자의 상보 오차 함수 값을 반환합니다.",
            p: [
                {
                    name: "z",
                    detail: "상보 오차 함수를 계산할 숫자입니다.",
                },
            ],
        },
        EVEN: {
            d: "가장 가까운 짝수로 숫자를 올림합니다.",
            a: "가장 가까운 짝수로 숫자를 올림합니다.",
            p: [
                {
                    name: "값",
                    detail:
                        "올림할 숫자이며, 이 값보다 큰 가장 가까운 짝수로 올림됩니다.\n\n음수인 경우 절대값이 더 큰 인접한 음의 짝수로 올림됩니다.",
                },
            ],
        },
        EXP: {
            d: "오일러 상수 e(~2.718)의 지정된 거듭제곱 값을 반환합니다.",
            a: "오일러 상수 e(~2.718)의 지정된 거듭제곱 값을 반환합니다.",
            p: [
                {
                    name: "지수",
                    detail: "e를 거듭곱할 지수 값입니다.",
                },
            ],
        },
        FACT: {
            d: "숫자의 계승(팩토리얼)을 반환합니다.",
            a: "숫자의 계승을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "계승을 계산하여 반환할 숫자 또는 숫자(가 있는 셀)에 대한 참조입니다.",
                },
            ],
        },
        FACTDOUBLE: {
            d: "숫자의 이중 계승(double factorial)을 반환합니다.",
            a: "숫자의 이중 계승을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "이중 계승을 계산하여 반환할 숫자 또는 숫자(가 있는 셀)에 대한 참조입니다.",
                },
            ],
        },
        PI: {
            d: "소수점 아래 14자리까지의 PI(원주율) 값을 반환합니다.",
            a: "소수점 아래 14자리까지의 PI 값을 반환합니다.",
            p: [],
        },
        FLOOR: {
            d: "지정한 인수(배수)의 가장 가까운 배수로 숫자를 내림합니다.",
            a: "지정한 인수(배수)의 가장 가까운 배수로 숫자를 내림합니다.",
            p: [
                {
                    name: "값",
                    detail: "인수의 가장 가까운 배수로 내림할 숫자입니다.",
                },
                {
                    name: "인수",
                    detail: "값을 이 숫자의 정수 배로 내림합니다.\n\n인수는 0이 될 수 없습니다.",
                },
            ],
        },
        GCD: {
            d: "하나 이상의 정수의 최대공약수를 반환합니다.",
            a: "하나 이상의 정수의 최대공약수를 반환합니다.",
            p: [
                {
                    name: "값1",
                    detail: "최대공약수를 찾을 때 인수를 확인할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "값2",
                    detail: "[선택] - 최대공약수를 구할 때 인수를 고려할 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        RANDBETWEEN: {
            d: "두 정수 사이(두 정수 포함)의 난수를 반환합니다.",
            a: "두 정수 사이의 난수를 반환합니다.",
            p: [
                {
                    name: "하한",
                    detail: "난수 범위의 하한값입니다.",
                },
                {
                    name: "상한",
                    detail: "난수 범위의 상한값입니다.",
                },
            ],
        },
        ROUND: {
            d: "지정한 자릿수로 숫자를 반올림합니다.",
            a: "지정한 자릿수로 숫자를 반올림합니다.",
            p: [
                {
                    name: "값",
                    detail: "반올림할 숫자입니다.",
                },
                {
                    name: "자릿수",
                    detail:
                        "반올림할 자릿수입니다.\n\n자릿수는 음수가 될 수 있으며, 이 경우 값의 소수점 왼쪽 부분을 지정한 자릿수만큼 반올림합니다.",
                },
            ],
        },
        ROUNDDOWN: {
            d: "0에 가까워지는 방향으로 숫자를 내림합니다.",
            a: "0에 가까워지는 방향으로 숫자를 내림합니다.",
            p: [
                {
                    name: "값",
                    detail: "내림할 임의의 실수입니다.",
                },
                {
                    name: "자릿수",
                    detail:
                        "내림하여 도달할 소수점 자릿수입니다.\n\n자릿수는 음수가 될 수 있으며, 이 경우 값의 소수점 왼쪽 부분을 지정한 자릿수만큼 내림합니다.",
                },
            ],
        },
        ROUNDUP: {
            d: "0에서 멀어지는 방향으로 숫자를 올림합니다.",
            a: "0에서 멀어지는 방향으로 숫자를 올림합니다.",
            p: [
                {
                    name: "값",
                    detail: "지정한 자릿수로 항상 올림할 값입니다.",
                },
                {
                    name: "자릿수",
                    detail:
                        "올림하여 도달할 소수점 자릿수입니다.\n\n자릿수는 음수가 될 수 있으며, 이 경우 값의 소수점 왼쪽 부분을 지정한 자릿수만큼 올림합니다.",
                },
            ],
        },
        SERIESSUM: {
            d:
                "지정된 인수 x, n, m, a에 대해 멱급수의 합 a1*x^n + a2*x^(n+m) + ... + ai*x^(n+(i-1)m)을 반환합니다(여기서 i는 배열 a의 항목 수).",
            a: "지정된 인수 x, n, m, a에 대한 멱급수의 합을 반환합니다.",
            p: [
                {
                    name: "x",
                    detail: "멱급수의 입력 값입니다. 근사 유형에 따라 각도, 지수 또는 기타 값이 될 수 있습니다.",
                },
                {
                    name: "n",
                    detail: "멱급수에서 x의 초기 거듭제곱 지수입니다.",
                },
                {
                    name: "m",
                    detail: "x의 지수에 더해지는 증가분입니다.",
                },
                {
                    name: "a",
                    detail: "멱급수의 계수를 포함하는 배열 또는 범위입니다.",
                },
            ],
        },
        SIGN: {
            d: "입력된 숫자가 음수면 -1, 양수면 1, 0이면 0을 반환합니다.",
            a: "입력된 숫자의 부호를 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "부호를 구할 숫자입니다.",
                },
            ],
        },
        SIN: {
            d: "라디안 단위로 지정된 각도의 사인 값을 반환합니다.",
            a: "지정된 각도의 사인 값을 반환합니다.",
            p: [
                {
                    name: "각도",
                    detail: "사인 값을 구할 각도이며, 라디안 단위로 지정합니다.",
                },
            ],
        },
        SINH: {
            d: "주어진 실수의 쌍곡정현 값을 반환합니다.",
            a: "주어진 실수의 쌍곡정현 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "쌍곡정현 값을 구할 실수입니다.",
                },
            ],
        },
        SQRT: {
            d: "양수의 양의 제곱근을 반환합니다.",
            a: "양수의 양의 제곱근을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "양의 제곱근을 구할 숫자입니다.\n\n값은 양수여야 하며, 음수인 경우 SQRT는 #NUM! 에러를 반환합니다.",
                },
            ],
        },
        SQRTPI: {
            d: "PI(원주율)와 지정된 양수의 곱에 대한 양의 제곱근을 반환합니다.",
            a: "PI와 지정된 양수의 곱에 대한 양의 제곱근을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail:
                        "PI와 곱한 뒤 그 곱의 제곱근을 반환할 숫자입니다.\n\n값은 양수여야 하며, 음수인 경우 SQRTPI는 #NUM! 에러를 반환합니다.",
                },
            ],
        },
        GAMMALN: {
            d: "지정된 감마 함수의 e(오일러 상수)를 밑으로 하는 자연로그 값을 반환합니다.",
            a: "지정된 감마 함수의 자연로그 값을 반환합니다.",
            p: [
                {
                    name: "값",
                    detail: "감마 함수의 입력 값입니다. 감마(값)의 자연로그 값을 반환합니다.\n\n값은 양수여야 합니다.",
                },
            ],
        },
        COS: {
            d: "지정된 각도의 코사인 값을 반환합니다(각도는 라디안 단위).",
            a: "지정된 각도의 코사인 값을 반환합니다.",
            p: [
                {
                    name: "각도",
                    detail: "코사인 값을 구할 각도이며, 라디안 단위로 지정합니다.",
                },
            ],
        },
        TRUNC: {
            d: "지정한 유효 자릿수를 제외한 나머지 부분을 버리고 숫자를 자릅니다.",
            a: "지정한 유효 자릿수를 제외한 부분을 자릅니다.",
            p: [
                {
                    name: "값",
                    detail: "자를 데이터입니다.",
                },
                {
                    name: "자릿수",
                    detail:
                        "[선택 - 기본값은 0] - 소수점 오른쪽으로 남겨둘 유효 자릿수입니다.\n\n자릿수가 값의 유효 자릿수보다 크면 '값'이 그대로 반환됩니다.\n\n자릿수는 음수가 될 수 있으며, 이 경우 소수점 왼쪽의 지정된 자릿수들이 0으로 바뀝니다. 소수점 오른쪽에 있는 모든 자릿수는 버려집니다. 값의 모든 자리가 0으로 바뀌면 TRUNC는 0을 반환합니다.",
                },
            ],
        },
        QUOTIENT: {
            d: "나눗셈의 몫을 반환하며 나머지는 제외합니다.",
            a: "나눗셈의 몫을 반환합니다.",
            p: [
                {
                    name: "피제수",
                    detail: "나눌 숫자입니다.",
                },
                {
                    name: "제수",
                    detail: "다른 숫자를 나눌 숫자입니다.\n\n제수는 0이 될 수 없습니다.",
                },
            ],
        },
        POWER: {
            d: "숫자의 지정된 거듭제곱 값을 반환합니다.",
            a: "숫자의 지정된 거듭제곱 값을 반환합니다.",
            p: [
                {
                    name: "밑",
                    detail: "거듭제곱을 계산할 밑수입니다.\n\n밑수가 음수이면 지수는 반드시 정수여야 합니다.",
                },
                {
                    name: "지수",
                    detail: "밑수를 거듭곱할 지수 값입니다.",
                },
            ],
        },
        SUMIFS: {
            d: "여러 조건을 만족하는 범위의 합계를 반환합니다.",
            a: "여러 조건을 만족하는 범위의 합계를 반환합니다.",
            p: [
                {
                    name: "합계 범위",
                    detail: "합계를 구할 범위입니다.",
                },
                {
                    name: "조건 범위1",
                    detail: "조건1을 검사할 범위입니다.",
                },
                {
                    name: "조건1",
                    detail: "조건 범위1에 적용할 패턴 또는 테스트 조건입니다.",
                },
                {
                    name: "조건 범위2, 조건2...",
                    detail: "[ 선택 ] - 검사할 추가 범위와 조건입니다.",
                },
            ],
        },
        GET_TARGET: {
            d: "타겟 데이터를 조회합니다.",
            a: "타겟 데이터를 조회합니다.",
            p: [],
        },
        GET_AIRTABLE_DATA: {
            d: "AirTable 데이터를 조회합니다.",
            a: "AirTable 데이터를 조회합니다.",
            p: [
                {
                    name: "AirTable 주소",
                    detail: "AirTable URL 링크 주소입니다.",
                },
                {
                    name: "정렬 열",
                    detail: "정렬할 열을 나타내는 숫자입니다.",
                },
                {
                    name: "오름차순 여부",
                    detail: "[선택] - `정렬 열`을 오름차순으로 정렬할지 여부를 나타내는 1 또는 0입니다. 0은 내림차순, 1은 오름차순입니다.",
                },
            ],
        },
        ASK_AI: {
            d: "AI에게 질문합니다.",
            a: "AI에게 질문합니다.",
            p: [
                {
                    name: "질문",
                    detail: "AI에게 문의하여 얻고자 하는 데이터입니다.",
                },
                {
                    name: "조건 범위",
                    detail: "데이터를 처리할 범위입니다.",
                },
            ],
        },
        COUNTIFS: {
            d: "여러 조건을 만족하는 범위 내의 셀 개수를 반환합니다.",
            a: "여러 조건을 만족하는 범위 내의 셀 개수를 반환합니다.",
            p: [
                {
                    name: "조건 범위1",
                    detail: "조건1을 검사할 범위입니다.",
                },
                {
                    name: "조건1",
                    detail: "조건 범위1에 적용할 패턴 또는 테스트 조건입니다.",
                },
                {
                    name: "조건 범위2, 조건2...",
                    detail: "[ 선택 ] - 검사할 추가 범위와 조건이며 반복해서 지정할 수 있습니다.",
                },
            ],
        },
        PRODUCT: {
            d: "일련의 숫자를 모두 곱한 결과를 반환합니다.",
            a: "일련의 숫자를 모두 곱한 결과를 반환합니다.",
            p: [
                {
                    name: "곱할 값1",
                    detail: "곱셈을 계산할 첫 번째 숫자 또는 범위입니다.",
                },
                {
                    name: "곱할 값2 ... 곱할 값30",
                    detail: "[선택] - 서로 곱할 추가 숫자들입니다.",
                },
            ],
        },
        HARMEAN: {
            d: "데이터 집합의 조화 평균을 계산합니다.",
            a: "데이터 집합의 조화 평균을 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "표본의 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2, ...",
                    detail: "[선택] - 데이터 집합에 포함된 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        HYPGEOMDIST: {
            d:
                "초기하분포를 반환합니다. 표본 크기, 모집단 성공 횟수, 모집단 크기가 주어지면 HYPGEOM.DIST는 표본에서 지정된 수만큼 성공할 확률을 반환합니다.",
            a: "초기하분포를 반환합니다.",
            p: [
                {
                    name: "Sample_s",
                    detail: "표본 내 성공 횟수입니다.",
                },
                {
                    name: "Number_sample",
                    detail: "표본 크기입니다.",
                },
                {
                    name: "Population_s",
                    detail: "모집단 내 성공 횟수입니다.",
                },
                {
                    name: "Number_pop",
                    detail: "모집단 크기입니다.",
                },
                {
                    name: "cumulative",
                    detail:
                        "함수의 형태를 결정하는 논리값입니다.\n\ncumulative가 TRUE()이면 HYPGEOM.DIST는 누적 분포 함수를 반환하고,\n\nFALSE()이면 확률 밀도 함수를 반환합니다.",
                },
            ],
        },
        INTERCEPT: {
            d: "데이터 집합의 선형 회귀 직선과 Y축의 교점(x=0)에서의 y 값을 계산합니다.",
            a: "데이터 집합의 선형 회귀 직선과 Y축의 교점(x=0)에서의 y 값을 계산합니다.",
            p: [
                {
                    name: "데이터_y",
                    detail: "종속 변수 데이터 배열 또는 행렬을 나타내는 범위입니다.",
                },
                {
                    name: "데이터_x",
                    detail: "독립 변수 데이터 배열 또는 행렬을 나타내는 범위입니다.",
                },
            ],
        },
        KURT: {
            d: "데이터 집합의 첨도를 계산합니다. 첨도는 데이터 집합(분포)의 모양, 특히 뾰족한 정도를 나타내는 지표입니다.",
            a: "데이터 집합의 첨도를 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "데이터 집합의 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2, ...",
                    detail: "[선택] - 데이터 집합에 포함된 추가 값 또는 범위입니다.",
                },
            ],
        },
        LARGE: {
            d: "사용자가 지정한 데이터 세트 내에서 n번째로 큰 요소를 반환합니다.",
            a: "데이터 세트 내에서 n번째로 큰 요소를 반환합니다.",
            p: [
                {
                    name: "데이터",
                    detail: "관련 데이터 세트가 포함된 배열 또는 범위입니다.",
                },
                {
                    name: "n",
                    detail:
                        "반환할 요소의 순위 위치(큰 값부터 시작하는 순서)입니다.\n\n예를 들어 n을 4로 설정하면 LARGE는 데이터에서 4번째로 큰 요소를 반환합니다.",
                },
            ],
        },
        STDEVA: {
            d: "표본을 기반으로 표준편차를 계산하며, 텍스트는 값 0으로 취급합니다.",
            a: "표본을 기반으로 표준편차를 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "표본 내 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2,…",
                    detail: "[선택] - 표본에 포함된 추가 값 또는 범위입니다.",
                },
            ],
        },
        STDEVP: {
            d: "모집단을 기반으로 표준편차를 계산합니다.",
            a: "모집단을 기반으로 표준편차를 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "데이터 집합의 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2, ...",
                    detail: "[선택] - 데이터 집합에 포함된 추가 값 또는 범위입니다.",
                },
            ],
        },
        GEOMEAN: {
            d: "데이터 집합의 기하 평균을 계산합니다.",
            a: "데이터 집합의 기하 평균을 계산합니다.",
            p: [
                {
                    name: "값1",
                    detail: "표본의 첫 번째 값 또는 범위입니다.",
                },
                {
                    name: "값2, ...",
                    detail: "[선택] - 데이터 집합에 포함된 추가 숫자 또는 범위입니다.",
                },
            ],
        },
        RANK_EQ: {
            d: "데이터 집합에서 지정된 값의 순위를 반환합니다. 동일한 값이 여러 개 있는 경우 그중 가장 높은 순위를 반환합니다.",
            a: "데이터 집합에서 지정된 값의 순위를 반환합니다. 동일한 값이 여러 개 있는 경우 그중 가장 높은 순위를 반환합니다.",
            p: [
                {
                    name: "number",
                    detail: "순위를 구할 값입니다.",
                },
                {
                    name: "ref",
                    detail: "관련 데이터 세트가 포함된 배열 또는 범위입니다.",
                },
                {
                    name: "order",
                    detail: "[선택 - 기본값은 내림차순(FALSE())] - 'data'의 값을 오름차순으로 정렬할지 내림차순으로 정렬할지 여부입니다.",
                },
            ],
        },
        RANK_AVG: {
            d: "데이터 집합에서 지정된 값의 순위를 반환합니다. 동일한 값이 여러 개 있는 경우 해당 항목들의 평균 순위를 반환합니다.",
            a: "데이터 집합에서 지정된 값의 순위를 반환합니다. 동일한 값이 여러 개 있는 경우 해당 항목들의 평균 순위를 반환합니다.",
            p: [
                {
                    name: "number",
                    detail: "순위를 구할 값입니다.",
                },
                {
                    name: "ref",
                    detail: "관련 데이터 세트가 포함된 배열 또는 범위입니다.",
                },
            ],
        },
    PERCENTRANK_EXC: {
            d: "Returns the percentage rank (percentile) from 0 to 1 exclusive of a specified value in a dataset.",
            a: "Percentage rank (percentile) from 0 to 1 exclusive.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "value",
                    detail: "The value whose percentage rank will be determined.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant figures to use in the calculation. Default is 3.",
                },
            ],
        },
        PERCENTRANK_INC: {
            d: "Returns the percentage rank (percentile) from 0 to 1 inclusive of a specified value in a dataset.",
            a: "Percentage rank (percentile) from 0 to 1 inclusive.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "value",
                    detail: "The value whose percentage rank will be determined.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant figures to use in the calculation. Default is 3.",
                },
            ],
        },
        FORECAST: {
            d: "Calculates the expected y-value for a specified x based on a linear regression of a dataset.",
            a: "Expected y-value based of linear regression.",
            p: [
                {
                    name: "x",
                    detail: "The value on the x-axis to forecast.",
                },
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        FISHERINV: {
            d: "Returns the inverse Fisher transformation of a specified value.",
            a: "Inverse fisher transformation of a specified value.",
            p: [
                {
                    name: "value",
                    detail: "The value for which to calculate the inverse Fisher transformation.",
                },
            ],
        },
        FISHER: {
            d: "Returns the Fisher transformation of a specified value.",
            a: "Fisher transformation of a specified value.",
            p: [
                {
                    name: "value",
                    detail: "The value for which to calculate the Fisher transformation.",
                },
            ],
        },
        MODE_SNGL: {
            d: "Returns the most commonly occurring value in a dataset.",
            a: "Most commonly occurring value in a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating mode.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating mode.",
                },
            ],
        },
        WEIBULL_DIST: {
            d:
                "Returns the value of the Weibull distribution function (or Weibull cumulative distribution function) for a specified shape and scale.",
            a: "Weibull distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the Weibull distribution function.",
                },
                {
                    name: "shape",
                    detail: "The shape parameter of the Weibull distribution function.",
                },
                {
                    name: "scale",
                    detail: "The scale parameter of the Weibull distribution function.",
                },
                {
                    name: "cumulative",
                    detail: "Whether to use the cumulative distribution function.",
                },
            ],
        },
        COUNT: {
            d: "Returns the number of numeric values in a dataset.",
            a: "The number of numeric values in dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when counting.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when counting.",
                },
            ],
        },
        COUNTA: {
            d: "Returns the number of values in a dataset.",
            a: "The number of values in a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when counting.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when counting.",
                },
            ],
        },
        AVEDEV: {
            d: "Calculates the average of the magnitudes of deviations of data from a dataset's mean.",
            a: "Average magnitude of deviations from mean.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the sample.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the sample.",
                },
            ],
        },
        AVERAGE: {
            d: "Returns the numerical average value in a dataset, ignoring text.",
            a: "Numerical average value in a dataset, ignoring text.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the average value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the average value.",
                },
            ],
        },
        AVERAGEA: {
            d: "Returns the numerical average value in a dataset.",
            a: "Numerical average value in a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the average value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the average value.",
                },
            ],
        },
        BINOM_DIST: {
            d:
                "Calculates the probability of drawing a certain number of successes (or a maximum number of successes) in a certain number of tries given a population of a certain size containing a certain number of successes, with replacement of draws.",
            a: "Binomial distribution probability.",
            p: [
                {
                    name: "num_successes",
                    detail: "The number of successes for which to calculate the probability in `num_trials` trials.",
                },
                {
                    name: "num_trials",
                    detail: "The number of independent trials.",
                },
                {
                    name: "prob_success",
                    detail: "The probability of success in any given trial.",
                },
                {
                    name: "cumulative",
                    detail: "Whether to use the binomial cumulative distribution.",
                },
            ],
        },
        BINOM_INV: {
            d:
                "Calculates the smallest value for which the cumulative binomial distribution is greater than or equal to a specified criteria.",
            a: "Inverse cumulative binomial distribution function.",
            p: [
                {
                    name: "num_trials",
                    detail: "The number of independent trials.",
                },
                {
                    name: "prob_success",
                    detail: "The probability of success in any given trial.",
                },
                {
                    name: "target_prob",
                    detail: "The desired threshold probability.",
                },
            ],
        },
        CONFIDENCE_NORM: {
            d: "Calculates the width of half the confidence interval for a normal distribution.",
            a: "Confidence interval for a normal distribution.",
            p: [
                {
                    name: "alpha",
                    detail: "One minus the desired confidence level. E.g. `0.1` for `0.9`, or 90%, confidence.",
                },
                {
                    name: "standard_deviation",
                    detail: "The standard deviation of the population.",
                },
                {
                    name: "pop_size",
                    detail: "The size of the population.",
                },
            ],
        },
        CORREL: {
            d: "Calculates r, the Pearson product-moment correlation coefficient of a dataset.",
            a: "Pearson Product-Moment Correlation Coefficient.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        COVARIANCE_P: {
            d: "Calculates the covariance of a dataset.",
            a: "The covariance of a dataset.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        COVARIANCE_S: {
            d: "Calculates the sample covariance of a dataset.",
            a: "The sample covariance of a dataset.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        DEVSQ: {
            d: "Calculates the sum of squares of deviations based on a sample.",
            a: "The sum of squares of deviations based on a sample.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the sample.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the sample.",
                },
            ],
        },
        EXPON_DIST: {
            d:
                "Returns the value of the exponential distribution function with a specified lambda at a specified value.",
            a: "Exponential distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the exponential distribution function.",
                },
                {
                    name: "lambda",
                    detail: "The lambda to specify the exponential distribution function.",
                },
                {
                    name: "cumulative",
                    detail: "Whether to use the exponential cumulative distribution.",
                },
            ],
        },
        AVERAGEIF: {
            d: "Returns the average of a range depending on criteria.",
            a: "Average of values depending on criteria.",
            p: [
                {
                    name: "criteria_range",
                    detail: "The range to check against `criterion`.",
                },
                {
                    name: "criterion",
                    detail: "The pattern or test to apply to `criteria_range`.",
                },
                {
                    name: "average_range",
                    detail: "The range to average. If not included, `criteria_range` is used for the average instead.",
                },
            ],
        },
        AVERAGEIFS: {
            d: "Returns the average of a range depending on multiple criteria.",
            a: "Average of values depending on multiple criteria.",
            p: [
                {
                    name: "average_range",
                    detail: "The range to average.",
                },
                {
                    name: "criteria_range1",
                    detail: "The range to check against `criterion1`.",
                },
                {
                    name: "criterion1",
                    detail: "The pattern or test to apply to `criteria_range1`.",
                },
                {
                    name: "criteria_range2",
                    detail: "Additional ranges to check.",
                },
            ],
        },
        PERMUT: {
            d:
                "Returns the number of ways to choose some number of objects from a pool of a given size of objects, considering order.",
            a: "Number of permutations from a number of objects.",
            p: [
                {
                    name: "n",
                    detail: "The size of the pool of objects to choose from.",
                },
                {
                    name: "k",
                    detail: "The number of objects to choose.",
                },
            ],
        },
        TRIMMEAN: {
            d:
                "Calculates the mean of a dataset excluding some proportion of data from the high and low ends of the dataset.",
            a: "Mean of a dataset excluding high/low ends.",
            p: [
                {
                    name: "data",
                    detail: "Array or range containing the dataset to consider.",
                },
                {
                    name: "exclude_proportion",
                    detail: "The proportion of the dataset to exclude, from the extremities of the set.",
                },
            ],
        },
        PERCENTILE_EXC: {
            d: "Returns the value at a given percentile of a dataset exclusive of 0 and 1.",
            a: "Value at a given percentile of a dataset exclusive of 0 and 1.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "percentile",
                    detail:
                        "The percentile, exclusive of 0 and 1, whose value within 'data' will be calculated and returned.",
                },
            ],
        },
        PERCENTILE_INC: {
            d: "Returns the value at a given percentile of a dataset.",
            a: "Value at a given percentile of a dataset.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "percentile",
                    detail: "The percentile whose value within `data` will be calculated and returned.`",
                },
            ],
        },
        PEARSON: {
            d: "Calculates r, the Pearson product-moment correlation coefficient of a dataset.",
            a: "Pearson Product-Moment Correlation Coefficient.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        NORM_S_INV: {
            d: "Returns the value of the inverse standard normal distribution function for a specified value.",
            a: "Inverse standard normal distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the inverse standard normal distribution function.",
                },
            ],
        },
        NORM_S_DIST: {
            d: "Returns the value of the standard normal cumulative distribution function for a specified value.",
            a: "Standard normal cumulative distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the standard normal cumulative distribution function.",
                },
                {
                    name: "cumulative",
                    detail:
                        "Determine the logical value of the function form. \n\nIf TRUE(), it returns the cumulative distribution function;\n\nIf it is FALSE(), it returns the probability density function.",
                },
            ],
        },
        NORM_INV: {
            d:
                "Returns the value of the inverse normal distribution function for a specified value, mean, and standard deviation.",
            a: "Inverse normal distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the inverse normal distribution function.",
                },
                {
                    name: "mean",
                    detail: "The mean (mu) of the normal distribution function.",
                },
                {
                    name: "standard_deviation",
                    detail: "The standard deviation (sigma) of the normal distribution function.",
                },
            ],
        },
        NORM_DIST: {
            d:
                "Returns the value of the normal distribution function (or normal cumulative distribution function) for a specified value, mean, and standard deviation.",
            a: "Normal distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the normal distribution function.",
                },
                {
                    name: "mean",
                    detail: "The mean (mu) of the normal distribution function.",
                },
                {
                    name: "standard_deviation",
                    detail: "The standard deviation (sigma) of the normal distribution function.",
                },
                {
                    name: "cumulative",
                    detail:
                        "Whether to use the normal cumulative distribution function rather than the distribution function.",
                },
            ],
        },
        NEGBINOM_DIST: {
            d:
                "Calculates the probability of drawing a certain number of failures before a certain number of successes given a probability of success in independent trials.",
            a: "Negative binomial distribution probability.",
            p: [
                {
                    name: "num_failures",
                    detail: "The number of failures to model.",
                },
                {
                    name: "num_successes",
                    detail: "The number of successes to model.",
                },
                {
                    name: "prob_success",
                    detail: "The probability of success in any given trial.",
                },
                {
                    name: "cumulative",
                    detail:
                        "Determine the logical value of the function form. \n\nIf TRUE(), it returns the cumulative distribution function;\n\nIf it is FALSE(), it returns the probability density function.",
                },
            ],
        },
        MINA: {
            d: "Returns the minimum numeric value in a dataset.",
            a: "Minimum numeric value in a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the minimum value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the minimum value.",
                },
            ],
        },
        MIN: {
            d: "Returns the minimum value in a numeric dataset.",
            a: "Minimum value in a numeric dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the minimum value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the minimum value.",
                },
            ],
        },
        MEDIAN: {
            d: "Returns the median value in a numeric dataset.",
            a: "Median value in a numeric dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the median value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the median value.",
                },
            ],
        },
        MAXA: {
            d: "Returns the maximum numeric value in a dataset.",
            a: "Maximum numeric value in a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the maximum value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the maximum value.",
                },
            ],
        },
        MAX: {
            d: "Returns the maximum value in a numeric dataset.",
            a: "Maximum value in a numeric dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range to consider when calculating the maximum value.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to consider when calculating the maximum value.",
                },
            ],
        },
        LOGNORM_INV: {
            d:
                "Returns the value of the inverse log-normal cumulative distribution with given mean and standard deviation at a specified value.",
            a: "Inverse log-normal cumulative distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the inverse log-normal cumulative distribution function.",
                },
                {
                    name: "mean",
                    detail: "The mean (mu) of the inverse log-normal cumulative distribution function.",
                },
                {
                    name: "standard_deviation",
                    detail:
                        "The standard deviation (sigma) of the inverse log-normal cumulative distribution function.",
                },
            ],
        },
        LOGNORM_DIST: {
            d:
                "Returns the value of the log-normal cumulative distribution with given mean and standard deviation at a specified value.",
            a: "Log-normal cumulative distribution probability.",
            p: [
                {
                    name: "x",
                    detail: "The input to the log-normal cumulative distribution function.",
                },
                {
                    name: "mean",
                    detail: "The mean (mu) of the log-normal cumulative distribution function.",
                },
                {
                    name: "standard_deviation",
                    detail: "The standard deviation (sigma) of the log-normal cumulative distribution function.",
                },
                {
                    name: "cumulative",
                    detail:
                        "Determine the logical value of the function form. \n\nIf TRUE(), it returns the cumulative distribution function;\n\nIf it is FALSE(), it returns the probability density function.",
                },
            ],
        },
        Z_TEST: {
            d: "Returns the one-tailed p-value of a Z-test with standard distribution.",
            a: "One-tailed p-value of a z-test.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "value",
                    detail: "The test statistic to use in the Z-test.",
                },
                {
                    name: "standard_deviation",
                    detail:
                        "The standard deviation to assume for the Z-test. If this is not provided, the standard deviation of the data will be used.",
                },
            ],
        },
        PROB: {
            d:
                "Given a set of values and corresponding probabilities, calculates the probability that a value chosen at random falls between two limits.",
            a: "Probability values lie in a range.",
            p: [
                {
                    name: "data",
                    detail: "Array or range containing the dataset to consider.",
                },
                {
                    name: "probabilities",
                    detail: "Array or range containing probabilities corresponding to `data`.",
                },
                {
                    name: "low_limit",
                    detail: "The lower bound on the value range for which to calculate the probability.",
                },
                {
                    name: "high_limit",
                    detail: "The upper bound on the value range for which to calculate the probability.",
                },
            ],
        },
        QUARTILE_EXC: {
            d: "Returns a value nearest to a specified quartile of a dataset exclusive of 0 and 4.",
            a: "Value nearest to a specific quartile of a dataset exclusive of 0 and 4.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "quartile_number",
                    detail: "Which quartile to return.",
                },
            ],
        },
        QUARTILE_INC: {
            d: "Returns a value nearest to a specified quartile of a dataset.",
            a: "Value nearest to a specific quartile of a dataset.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "quartile_number",
                    detail: "Which quartile value to return.",
                },
            ],
        },
        POISSON_DIST: {
            d:
                "Returns the value of the Poisson distribution function (or Poisson cumulative distribution function) for a specified value and mean.",
            a: "Poisson distribution function.",
            p: [
                {
                    name: "x",
                    detail: "The input to the Poisson distribution function.",
                },
                {
                    name: "mean",
                    detail: "The mean (mu) of the Poisson distribution function.",
                },
                {
                    name: "cumulative",
                    detail:
                        "Whether to use the Poisson cumulative distribution function rather than the distribution function.",
                },
            ],
        },
        RSQ: {
            d: "Calculates the square of r, the Pearson product-moment correlation coefficient of a dataset.",
            a: "Square of the correlation coefficient.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        T_DIST: {
            d: "Calculates the left tail probability for a Student's t-distribution with a given input (x).",
            a: "The left-tailed Student's t-distribution",
            p: [
                {
                    name: "x",
                    detail: "The input to the t-distribution function.",
                },
                {
                    name: "degrees_freedom",
                    detail: "The number of degrees of freedom.",
                },
                {
                    name: "cumulative",
                    detail:
                        "If cumulative is TRUE, T.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.",
                },
            ],
        },
        T_DIST_2T: {
            d: "Calculates the probability for two tailed Student's t-distribution with a given input (x).",
            a: "The two tailed Student's t-distribution",
            p: [
                {
                    name: "x",
                    detail: "The input to the t-distribution function.",
                },
                {
                    name: "degrees_freedom",
                    detail: "The number of degrees of freedom.",
                },
            ],
        },
        T_DIST_RT: {
            d: "Calculates the right tail probability for a Student's t-distribution with a given input (x).",
            a: "The right-tailed Student's t-distribution",
            p: [
                {
                    name: "x",
                    detail: "The input to the t-distribution function.",
                },
                {
                    name: "degrees_freedom",
                    detail: "The number of degrees of freedom.",
                },
            ],
        },
        T_INV: {
            d: "Calculates the negative inverse of the one-tailed TDIST function.",
            a: "T.INV",
            p: [
                {
                    name: "probability",
                    detail: "The probability associated with the two-tailed t-distribution.",
                },
                {
                    name: "degrees_freedom",
                    detail: "The number of degrees of freedom.",
                },
            ],
        },
        T_INV_2T: {
            d: "Calculates the inverse of the two-tailed TDIST function.",
            a: "T.INV.2T",
            p: [
                {
                    name: "probability",
                    detail: "The probability associated with the two-tailed t-distribution.",
                },
                {
                    name: "degrees_freedom",
                    detail: "The number of degrees of freedom.",
                },
            ],
        },
        T_TEST: {
            d:
                "t-test. Returns the probability associated with Student's t-test. Determines whether two samples are likely to have come from the same two underlying populations that have the same mean.",
            a: "Returns the probability associated with t-test.",
            p: [
                {
                    name: "range1",
                    detail: "The first sample of data or group of cells to consider for the t-test.",
                },
                {
                    name: "range2",
                    detail: "The second sample of data or group of cells to consider for the t-test.",
                },
                {
                    name: "tails",
                    detail: "Specifies the number of distribution tails.",
                },
                {
                    name: "type",
                    detail: "Specifies the type of t-test.",
                },
            ],
        },
        F_DIST: {
            d:
                "Calculates the left-tailed F probability distribution (degree of diversity) for two data sets with given input x. Alternately called Fisher-Snedecor distribution or Snedecor's F distribution.",
            a: "F probability distribution (left-tailed).",
            p: [
                {
                    name: "x",
                    detail:
                        "The input to the F probability distribution function. The value at which to evaluate the function.",
                },
                {
                    name: "degrees_freedom1",
                    detail: "The numerator of the number of degrees of freedom.",
                },
                {
                    name: "degrees_freedom2",
                    detail: "The denominator of the number of degrees of freedom.",
                },
                {
                    name: "cumulative",
                    detail: "Logical value that determines the form of the function.",
                },
            ],
        },
        F_DIST_RT: {
            d:
                "Calculates the right-tailed F probability distribution (degree of diversity) for two data sets with given input x. Alternately called Fisher-Snedecor distribution or Snedecor's F distribution.",
            a: "F probability distribution.",
            p: [
                {
                    name: "x",
                    detail:
                        "The input to the F probability distribution function. The value at which to evaluate the function.",
                },
                {
                    name: "degrees_freedom1",
                    detail: "The numerator of the number of degrees of freedom.",
                },
                {
                    name: "degrees_freedom2",
                    detail: "The denominator of the number of degrees of freedom.",
                },
            ],
        },
        VAR_P: {
            d: "Calculates the variance based on an entire population.",
            a: "Variance of entire population.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the population.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the population.",
                },
            ],
        },
        VAR_S: {
            d: "Calculates the variance based on a sample.",
            a: "Variance.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the sample.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the sample.",
                },
            ],
        },
        VARA: {
            d: "Calculates the variance based on a sample, setting text to the value `0`.",
            a: "Variance of sample (text as 0).",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the sample.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the sample.",
                },
            ],
        },
        VARPA: {
            d: "Calculates the variance based on an entire population, setting text to the value `0`.",
            a: "Variance of entire population (text as 0).",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the population.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the population.",
                },
            ],
        },
        STEYX: {
            d: "Calculates the standard error of the predicted y-value for each x in the regression of a dataset.",
            a: "Standard error of predicted y-values in regression.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        STANDARDIZE: {
            d:
                "Calculates the normalized equivalent of a random variable given mean and standard deviation of the distribution.",
            a: "Normalized equivalent of a random variable.",
            p: [
                {
                    name: "value",
                    detail: "The value of the random variable to normalize.",
                },
                {
                    name: "mean",
                    detail: "The mean of the distribution.",
                },
                {
                    name: "standard_deviation",
                    detail: "The standard deviation of the distribution.",
                },
            ],
        },
        SMALL: {
            d: "Returns the nth smallest element from a data set, where n is user-defined.",
            a: "Nth smallest element in a data set.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the dataset to consider.",
                },
                {
                    name: "n",
                    detail: "The rank from smallest to largest of the element to return.",
                },
            ],
        },
        SLOPE: {
            d: "Calculates the slope of the line resulting from linear regression of a dataset.",
            a: "Slope of line from linear regression of data.",
            p: [
                {
                    name: "data_y",
                    detail: "The range representing the array or matrix of dependent data.",
                },
                {
                    name: "data_x",
                    detail: "The range representing the array or matrix of independent data.",
                },
            ],
        },
        SKEW: {
            d: "Calculates the skewness of a dataset, which describes the symmetry of that dataset about the mean.",
            a: "Skewness of a dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the dataset.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the dataset.",
                },
            ],
        },
        SKEW_P: {
            d:
                "Calculates the skewness of a dataset, which describes the symmetry of that dataset about the mean. This assumes the dataset is for the population.",
            a: "Skewness of a population's dataset.",
            p: [
                {
                    name: "value1",
                    detail: "The first value or range of the dataset.",
                },
                {
                    name: "value2",
                    detail: "Additional values or ranges to include in the dataset.",
                },
            ],
        },
        VLOOKUP: {
            d:
                "Vertical lookup. Searches down the first column of a range for a key and returns the value of a specified cell in the row found.",
            a: "Vertical lookup.",
            p: [
                {
                    name: "search_key",
                    detail: 'The value to search for. For example, `42`, `"Cats"`, or `I24`.',
                },
                {
                    name: "range",
                    detail:
                        "The range to consider for the search. The first column in the range is searched for the key specified in `search_key`.",
                },
                {
                    name: "index",
                    detail:
                        "The column index of the value to be returned, where the first column in `range` is numbered 1.",
                },
                {
                    name: "is_sorted",
                    detail:
                        "Indicates whether the column to be searched (the first column of the specified range) is sorted, in which case the closest match for `search_key` will be returned.",
                },
            ],
        },
        HLOOKUP: {
            d:
                "Horizontal lookup. Searches across the first row of a range for a key and returns the value of a specified cell in the column found.",
            a: "Horizontal lookup",
            p: [
                {
                    name: "search_key",
                    detail: 'The value to search for. For example, `42`, `"Cats"`, or `I24`.',
                },
                {
                    name: "range",
                    detail:
                        "The range to consider for the search. The first row in the range is searched for the key specified in `search_key`.",
                },
                {
                    name: "index",
                    detail: "The row index of the value to be returned, where the first row in `range` is numbered 1.",
                },
                {
                    name: "is_sorted",
                    detail:
                        "Indicates whether the row to be searched (the first row of the specified range) is sorted.",
                },
            ],
        },
        LOOKUP: {
            d:
                "Looks through a sorted row or column for a key and returns the value of the cell in a result range located in the same position as the search row or column.",
            a: "Look up a value.",
            p: [
                {
                    name: "search_key",
                    detail: 'The value to search for in the row or column. For example, `42`, `"Cats"`, or `I24`.',
                },
                {
                    name: "search_range|search_result_array",
                    detail:
                        "One method of using this function is to provide a single sorted row or column `search_range` to look through for the `search_key` with a second argument `result_range`. The other way is to combine these two arguments into one `search_result_array` where the first row or column is searched and a value is returned from the last row or column in the array. If `search_key` is not found, a non-exact match may be returned.",
                },
                {
                    name: "result_range",
                    detail:
                        "The range from which to return a result. The value returned corresponds to the location where `search_key` is found in `search_range`. This range must be only a single row or column and should not be used if using the `search_result_array` method.",
                },
            ],
        },
        ADDRESS: {
            d: "Returns a cell reference as a string.",
            a: "Cell reference as a string.",
            p: [
                {
                    name: "row",
                    detail: "The row number of the cell reference",
                },
                {
                    name: "column",
                    detail: "The column number (not name) of the cell reference. `A` is column number `1`.",
                },
                {
                    name: "absolute_relative_mode",
                    detail:
                        "An indicator of whether the reference is row/column absolute. `1` is row and column absolute (e.g. $A$1), `2` is row absolute and column relative (e.g. A$1), `3` is row relative and column absolute (e.g. $A1), and `4` is row and column relative (e.g. A1).",
                },
                {
                    name: "use_a1_notation",
                    detail:
                        "A boolean indicating whether to use `A1` style notation (TRUE) or `R1C1` style notation (FALSE).",
                },
                {
                    name: "sheet",
                    detail: "Text indicating the name of the sheet into which the address points.",
                },
            ],
        },
        INDIRECT: {
            d: "Returns a cell reference specified by a string.",
            a: "A cell reference specified by a string.",
            p: [
                {
                    name: "cell_reference_as_string",
                    detail: "A cell reference, written as a string with surrounding quotation marks.",
                },
                {
                    name: "is_A1_notation",
                    detail: "Indicates if the cell reference is in A1 notation (TRUE) or R1C1 notation (FALSE).",
                },
            ],
        },
        ROW: {
            d: "Returns the row number of a specified cell.",
            a: "Row number of a specified cell.",
            p: [
                {
                    name: "cell_reference",
                    detail: "The cell whose row number will be returned.",
                },
            ],
        },
        ROWS: {
            d: "Returns the number of rows in a specified array or range.",
            a: "Number of rows in a specified array or range.",
            p: [
                {
                    name: "range",
                    detail: "The range whose row count will be returned.",
                },
            ],
        },
        COLUMN: {
            d: "Returns the column number of a specified cell, with `A=1`.",
            a: "Column number of a specified cell.",
            p: [
                {
                    name: "cell_reference",
                    detail: "The cell whose column number will be returned. Column `A` corresponds to `1`.",
                },
            ],
        },
        COLUMNS: {
            d: "Returns the number of columns in a specified array or range.",
            a: "Number of columns in a specified array or range.",
            p: [
                {
                    name: "range",
                    detail: "The range whose column count will be returned.",
                },
            ],
        },
        OFFSET: {
            d:
                "Returns a range reference shifted a specified number of rows and columns from a starting cell reference.",
            a: "A range reference offset relative to a cell.",
            p: [
                {
                    name: "cell_reference",
                    detail: "The starting point from which to count the offset rows and columns.",
                },
                {
                    name: "offset_rows",
                    detail: "The number of rows to offset by.",
                },
                {
                    name: "offset_columns",
                    detail: "The number of columns to offset by.",
                },
                {
                    name: "height",
                    detail: "The height of the range to return starting at the offset target.",
                },
                {
                    name: "width",
                    detail: "The width of the range to return starting at the offset target.",
                },
            ],
        },
        MATCH: {
            d: "Returns the relative position of an item in a range that matches a specified value.",
            a: "Position of item in range that matches value.",
            p: [
                {
                    name: "search_key",
                    detail: 'The value to search for. For example, `42`, `"Cats"`, or `I24`.',
                },
                {
                    name: "range",
                    detail: "The one-dimensional array to be searched.",
                },
                {
                    name: "search_type",
                    detail:
                        "The search method. `1` (default) finds the largest value less than or equal to `search_key` when `range` is sorted in ascending order. `0` finds the exact value when `range` is unsorted. `-1` finds the smallest value greater than or equal to `search_key` when `range` is sorted in descending order.",
                },
            ],
        },
        INDEX: {
            d: "Returns the content of a cell, specified by row and column offset.",
            a: "Content of cell specified by row and column offset.",
            p: [
                {
                    name: "reference",
                    detail: "The array of cells to be offset into.",
                },
                {
                    name: "row",
                    detail: "The number of offset rows.",
                },
                {
                    name: "column",
                    detail: "The number of offset columns.",
                },
            ],
        },
        GETPIVOTDATA: {
            d:
                "Extracts an aggregated value from a pivot table that corresponds to the specified row and column headings.",
            a:
                "Extracts an aggregated value from a pivot table that corresponds to the specified row and column headings.",
            p: [
                {
                    name: "value_name",
                    detail: "The name of the value in the pivot table for which you want to get data.",
                },
                {
                    name: "any_pivot_table_cell",
                    detail: "Any reference to a cell in the desired pivot table (top corner recommended).",
                },
                {
                    name: "original_column",
                    detail: "The name of the column in the original data set (not the pivot table).",
                },
                {
                    name: "pivot_item",
                    detail:
                        "The name of the row or column shown in the pivot table corresponding to *original_column* that you want to retrieve.",
                },
            ],
        },
        CHOOSE: {
            d: "Returns an element from a list of choices based on index.",
            a: "An element from a list of choices based on index.",
            p: [
                {
                    name: "index",
                    detail: "Which choice (of the up to 30 provided) to return.",
                },
                {
                    name: "choice1",
                    detail:
                        "A potential value to return. Required. May be a reference to a cell or an individual value.",
                },
                {
                    name: "choice2",
                    detail: "Additional values among which to choose.",
                },
            ],
        },
        HYPERLINK: {
            d: "Creates a hyperlink inside a cell.",
            a: "Creates a hyperlink inside a cell.",
            p: [
                {
                    name: "url",
                    detail:
                        "The full URL of the link location enclosed in quotation marks, or a reference to a cell containing such a URL.",
                },
                {
                    name: "link_label",
                    detail:
                        "The text to display in the cell as the link, enclosed in quotation marks, or a reference to a cell containing such a label.",
                },
            ],
        },
        TIME: {
            d: "Converts a provided hour, minute, and second into a time.",
            a: "Converts hour/minute/second into a time.",
            p: [
                {
                    name: "hour",
                    detail: "The hour component of the time.",
                },
                {
                    name: "minute",
                    detail: "The minute component of the time.",
                },
                {
                    name: "second",
                    detail: "The second component of the time.",
                },
            ],
        },
        TIMEVALUE: {
            d: "Returns the fraction of a 24-hour day the time represents.",
            a: "Converts a time string into its serial number representation.",
            p: [
                {
                    name: "time_string",
                    detail: "The string that holds the time representation.",
                },
            ],
        },
        EOMONTH: {
            d:
                "Returns a date on the last day of a month that falls a specified number of months before or after another date.",
            a: "Last day of a month before or after a date.",
            p: [
                {
                    name: "start_date",
                    detail: "The date from which to calculate the result.",
                },
                {
                    name: "months",
                    detail: "The number of months before (negative) or after (positive) 'start_date' to consider.",
                },
            ],
        },
        EDATE: {
            d: "Returns a date a specified number of months before or after another date.",
            a: "Date a number of months before/after another date.",
            p: [
                {
                    name: "start_date",
                    detail: "The date from which to calculate the result.",
                },
                {
                    name: "months",
                    detail: "The number of months before (negative) or after (positive) 'start_date' to calculate.",
                },
            ],
        },
        SECOND: {
            d: "Returns the second component of a specific time, in numeric format.",
            a: "Second component of a specific time.",
            p: [
                {
                    name: "time",
                    detail: "The time from which to calculate the second component",
                },
            ],
        },
        MINUTE: {
            d: "Returns the minute component of a specific time, in numeric format.",
            a: "Minute component of a specific time.",
            p: [
                {
                    name: "time",
                    detail: "The time from which to calculate the minute component.",
                },
            ],
        },
        HOUR: {
            d: "Returns the hour component of a specific time, in numeric format.",
            a: "Hour component of a specific time.",
            p: [
                {
                    name: "time",
                    detail: "The time from which to calculate the hour component.",
                },
            ],
        },
        NOW: {
            d: "Returns the current date and time as a date value.",
            a: "Current date and time as a date value.",
            p: [],
        },
        NETWORKDAYS: {
            d: "Returns the number of net working days between two provided days.",
            a: "Net working days between two provided days.",
            p: [
                {
                    name: "start_date",
                    detail: "The start date of the period from which to calculate the number of net working days.",
                },
                {
                    name: "end_date",
                    detail: "The end date of the period from which to calculate the number of net working days.",
                },
                {
                    name: "holidays",
                    detail: "A range or array constant containing the date serial numbers to consider holidays.",
                },
            ],
        },
        NETWORKDAYS_INTL: {
            d:
                "Returns the number of net working days between two provided days excluding specified weekend days and holidays.",
            a: "Net working days between two dates (specifying weekends).",
            p: [
                {
                    name: "start_date",
                    detail: "The start date of the period from which to calculate the number of net working days.",
                },
                {
                    name: "end_date",
                    detail: "The end date of the period from which to calculate the number of net working days.",
                },
                {
                    name: "weekend",
                    detail: "A number or string representing which days of the week are considered weekends.",
                },
                {
                    name: "holidays",
                    detail: "A range or array constant containing the dates to consider as holidays.",
                },
            ],
        },
        ISOWEEKNUM: {
            d: "Returns a number representing the ISO week of the year where the provided date falls.",
            a: "ISO week number of the year.",
            p: [
                {
                    name: "date",
                    detail:
                        "The date for which to determine the ISO week number. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
            ],
        },
        WEEKNUM: {
            d: "Returns a number representing the week of the year where the provided date falls.",
            a: "Week number of the year.",
            p: [
                {
                    name: "date",
                    detail:
                        "The date for which to determine the week number. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "type",
                    detail: "A number representing the day that a week starts on. Sunday = 1.",
                },
            ],
        },
        WEEKDAY: {
            d: "Returns a number representing the day of the week of the date provided.",
            a: "Day of the week of the date provided (as number).",
            p: [
                {
                    name: "date",
                    detail:
                        "The date for which to determine the day of the week. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "type",
                    detail:
                        "A number indicating which numbering system to use to represent weekdays. By default, counts starting with Sunday = 1.",
                },
            ],
        },
        DAY: {
            d: "Returns the day of the month that a specific date falls on, in numeric format.",
            a: "Day of the month that a specific date falls on.",
            p: [
                {
                    name: "date",
                    detail: "The date from which to extract the day.",
                },
            ],
        },
        DAYS: {
            d: "Returns the number of days between two dates.",
            a: "Number of days between two dates.",
            p: [
                {
                    name: "end_date",
                    detail: "The end of the date range.",
                },
                {
                    name: "start_date",
                    detail: "The start of the date range.",
                },
            ],
        },
        DAYS360: {
            d:
                "Returns the difference between two days based on the 360 day year used in some financial interest calculations.",
            a: "Days between two dates on a 360-day year.",
            p: [
                {
                    name: "start_date",
                    detail:
                        "The start date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "end_date",
                    detail:
                        "The end date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "method",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        DATE: {
            d: "Converts a provided year, month, and day into a date.",
            a: "Converts year/month/day into a date.",
            p: [
                {
                    name: "year",
                    detail: "The year component of the date.",
                },
                {
                    name: "month",
                    detail: "The month component of the date.",
                },
                {
                    name: "day",
                    detail: "The day component of the date.",
                },
            ],
        },
        DATEVALUE: {
            d: "Converts a provided date string in a known format to a date value.",
            a: "Converts a date string to a date value.",
            p: [
                {
                    name: "date_string",
                    detail: "The string representing the date.",
                },
            ],
        },
        DATEDIF: {
            d: "Calculates the number of days, months, or years between two dates.",
            a: "Date Difference.",
            p: [
                {
                    name: "start_date",
                    detail:
                        "The start date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "end_date",
                    detail:
                        "The end date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "unit",
                    detail:
                        'A string abbreviation for unit of time. For example, "M" for month. Accepted values are "Y","M","D","MD","YM","YD".',
                },
            ],
        },
        WORKDAY: {
            d: "Calculates the date after a number of working days from a specified start date.",
            a: "Number of working days from start date.",
            p: [
                {
                    name: "start_date",
                    detail: "The date from which to begin counting.",
                },
                {
                    name: "num_days",
                    detail: "The number of working days to advance from `start_date`. If negative, counts backwards.",
                },
                {
                    name: "holidays",
                    detail: "A range or array constant containing the dates to consider holidays.",
                },
            ],
        },
        WORKDAY_INTL: {
            d:
                "Calculates the date after a specified number of workdays excluding specified weekend days and holidays.",
            a: "Date after a number of workdays (specifying weekends).",
            p: [
                {
                    name: "start_date",
                    detail: "The date from which to begin counting.",
                },
                {
                    name: "num_days",
                    detail: "The number of working days to advance from `start_date`. If negative, counts backwards.",
                },
                {
                    name: "weekend",
                    detail: "A number or string representing which days of the week are considered weekends.",
                },
                {
                    name: "holidays",
                    detail: "A range or array constant containing the dates to consider holidays.",
                },
            ],
        },
        YEAR: {
            d: "Returns the year specified by a given date.",
            a: "Year specified by a given date.",
            p: [
                {
                    name: "date",
                    detail: "The date from which to extract the year.",
                },
            ],
        },
        YEARFRAC: {
            d:
                "Returns the number of years, including fractional years, between two dates using a specified day count convention.",
            a: "Exact number of years between two dates.",
            p: [
                {
                    name: "start_date",
                    detail:
                        "The start date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "end_date",
                    detail:
                        "The end date to consider in the calculation. Must be a reference to a cell containing a date, a function returning a date type, or a number.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        TODAY: {
            d: "Returns the current date as a date value.",
            a: "Current date as a date value.",
            p: [],
        },
        MONTH: {
            d: "Returns the month of the year a specific date falls in, in numeric format.",
            a: "Month of the year a specific date falls in.",
            p: [
                {
                    name: "date",
                    detail: "The date from which to extract the month.",
                },
            ],
        },
        EFFECT: {
            d:
                "Calculates the annual effective interest rate given the nominal rate and number of compounding periods per year.",
            a: "Annual effective interest rate.",
            p: [
                {
                    name: "nominal_rate",
                    detail: "The nominal interest rate per year.",
                },
                {
                    name: "periods_per_year",
                    detail: "The number of compounding periods per year.",
                },
            ],
        },
        DOLLAR: {
            d: "Formats a number into the currency specific to your spreadsheet locale.",
            a: "Formats a number as currency specific to your spreadsheet locale.",
            p: [
                {
                    name: "number",
                    detail: "The value to be formatted.",
                },
                {
                    name: "number_of_places",
                    detail: "The number of decimal places to display.",
                },
            ],
        },
        DOLLARDE: {
            d: "Converts a price quotation given as a decimal fraction into a decimal value.",
            a: "Converts a decimal fraction to decimal value.",
            p: [
                {
                    name: "fractional_price",
                    detail: "The price quotation given using fractional decimal conventions.",
                },
                {
                    name: "unit",
                    detail: "The units of the fraction, e.g. `8` for 1/8ths or `32` for 1/32nds.",
                },
            ],
        },
        DOLLARFR: {
            d: "Converts a price quotation given as a decimal value into a decimal fraction.",
            a: "Converts a decimal value to decimal fraction.",
            p: [
                {
                    name: "decimal_price",
                    detail: "The price quotation given as a decimal value.",
                },
                {
                    name: "unit",
                    detail: "The units of the desired fraction, e.g. `8` for 1/8ths or `32` for 1/32nds.",
                },
            ],
        },
        DB: {
            d:
                "Calculates the depreciation of an asset for a specified period using the arithmetic declining balance method.",
            a: "Depreciation via declining balance method.",
            p: [
                {
                    name: "cost",
                    detail: "The initial cost of the asset.",
                },
                {
                    name: "salvage",
                    detail: "The value of the asset at the end of depreciation.",
                },
                {
                    name: "life",
                    detail: "The number of periods over which the asset is depreciated.",
                },
                {
                    name: "period",
                    detail: "The single period within `life` for which to calculate depreciation.",
                },
                {
                    name: "month",
                    detail: "The number of months in the first year of depreciation.",
                },
            ],
        },
        DDB: {
            d:
                "Calculates the depreciation of an asset for a specified period using the double-declining balance method.",
            a: "Depreciation via double-declining balance method.",
            p: [
                {
                    name: "cost",
                    detail: "The initial cost of the asset.",
                },
                {
                    name: "salvage",
                    detail: "The value of the asset at the end of depreciation.",
                },
                {
                    name: "life",
                    detail: "The number of periods over which the asset is depreciated.",
                },
                {
                    name: "period",
                    detail: "The single period within `life` for which to calculate depreciation.",
                },
                {
                    name: "factor",
                    detail: "The factor by which depreciation decreases.",
                },
            ],
        },
        RATE: {
            d:
                "Calculates the interest rate of an annuity investment based on constant-amount periodic payments and the assumption of a constant interest rate.",
            a: "Interest rate of an annuity investment.",
            p: [
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "payment_per_period",
                    detail: "The amount per period to be paid.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
                {
                    name: "rate_guess",
                    detail: "An estimate for what the interest rate will be.",
                },
            ],
        },
        CUMPRINC: {
            d:
                "Calculates the cumulative principal paid over a range of payment periods for an investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Cumulative principal paid over a set of periods.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "first_period",
                    detail: "The number of the payment period to begin the cumulative calculation.",
                },
                {
                    name: "last_period",
                    detail: "The number of the payment period to end the cumulative calculation.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        COUPNUM: {
            d:
                "Calculates the number of coupons, or interest payments, between the settlement date and the maturity date of the investment.",
            a: "Number of coupons between settlement and maturity.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        SYD: {
            d: "Calculates the depreciation of an asset for a specified period using the sum of years digits method.",
            a: "Depreciation via sum of years digits method.",
            p: [
                {
                    name: "cost",
                    detail: "The initial cost of the asset.",
                },
                {
                    name: "salvage",
                    detail: "The value of the asset at the end of depreciation.",
                },
                {
                    name: "life",
                    detail: "The number of periods over which the asset is depreciated.",
                },
                {
                    name: "period",
                    detail: "The single period within `life` for which to calculate depreciation.",
                },
            ],
        },
        TBILLEQ: {
            d: "Calculates the equivalent annualized rate of return of a US Treasury Bill based on discount rate.",
            a: "Equivalent rate of return for a Treasury bill.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "discount",
                    detail: "The discount rate of the bill at time of purchase.",
                },
            ],
        },
        TBILLYIELD: {
            d: "Calculates the yield of a US Treasury Bill based on price.",
            a: "The yield of a us treasury bill based on price.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "price",
                    detail: "The price at which the security is bought per 100 face value.",
                },
            ],
        },
        TBILLPRICE: {
            d: "Calculates the price of a US Treasury Bill based on discount rate.",
            a: "Price of US treasury bill.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "discount",
                    detail: "The discount rate of the bill at time of purchase.",
                },
            ],
        },
        PV: {
            d:
                "Calculates the present value of an annuity investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Present value of an annuity investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "payment_amount",
                    detail: "The amount per period to be paid.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        ACCRINT: {
            d: "Calculates the accrued interest of a security that has periodic payments.",
            a: "Accrued interest of security with periodic payments.",
            p: [
                {
                    name: "issue",
                    detail: "The date the security was initially issued.",
                },
                {
                    name: "first_payment",
                    detail: "The first date interest will be paid.",
                },
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
                {
                    name: "calc_method",
                    detail:
                        "[Optional-defaults to TRUE()] - A logical value that specifies the method used to calculate the total accrued interest when the settlement date is later than the first interest accrual date. \n\nIf the value is TRUE, the total accrued interest from the issue date to the settlement date is returned. \n\nIf the value is FALSE, return the accrued interest from the first interest accrual date to the settlement date.",
                },
            ],
        },
        ACCRINTM: {
            d: "Calculates the accrued interest of a security that pays interest at maturity.",
            a: "Accrued interest of security paying at maturity.",
            p: [
                {
                    name: "issue",
                    detail: "The date the security was initially issued.",
                },
                {
                    name: "maturity",
                    detail: "The maturity date of the security.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        COUPDAYBS: {
            d: "Calculates the number of days from the first coupon, or interest payment, until settlement.",
            a: "Number of days from first coupon to settlement.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        COUPDAYS: {
            d:
                "Calculates the number of days in the coupon, or interest payment, period that contains the specified settlement date.",
            a: "Days in coupon period containing settlement date.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        COUPDAYSNC: {
            d: "Calculates the number of days from the settlement date until the next coupon, or interest payment.",
            a: "Days from settlement until next coupon.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        COUPNCD: {
            d: "Calculates next coupon, or interest payment, date after the settlement date.",
            a: "Next coupon date after the settlement date.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        COUPPCD: {
            d: "Calculates last coupon, or interest payment, date before the settlement date.",
            a: "Last coupon date before settlement date.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        FV: {
            d:
                "Calculates the future value of an annuity investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Future value of an annuity investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "payment_amount",
                    detail: "The amount per period to be paid.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        FVSCHEDULE: {
            d:
                "Calculates the future value of some principal based on a specified series of potentially varying interest rates.",
            a: "Future value of principal from series of rates.",
            p: [
                {
                    name: "principal",
                    detail: "The amount of initial capital or value to compound against.",
                },
                {
                    name: "rate_schedule",
                    detail: "A series of interest rates to compound against the `principal`.",
                },
            ],
        },
        YIELD: {
            d:
                "Calculates the annual yield of a security paying periodic interest, such as a US Treasury Bond, based on price.",
            a: "Annual yield of a security paying periodic interest.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "price",
                    detail: "The price at which the security is bought per 100 face value.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        YIELDDISC: {
            d: "Calculates the annual yield of a discount (non-interest-bearing) security, based on price.",
            a: "Annual yield of a discount security.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "price",
                    detail: "The price at which the security is bought per 100 face value.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        NOMINAL: {
            d:
                "Calculates the annual nominal interest rate given the effective rate and number of compounding periods per year.",
            a: "Annual nominal interest rate.",
            p: [
                {
                    name: "effective_rate",
                    detail: "The effective interest rate per year.",
                },
                {
                    name: "periods_per_year",
                    detail: "The number of compounding periods per year.",
                },
            ],
        },
        XIRR: {
            d:
                "Calculates the internal rate of return of an investment based on a specified series of potentially irregularly spaced cash flows.",
            a: "Internal rate of return given non-periodic cashflows.",
            p: [
                {
                    name: "cashflow_amounts",
                    detail: "An array or range containing the income or payments associated with the investment.",
                },
                {
                    name: "cashflow_dates",
                    detail: "An array or range with dates corresponding to the cash flows in `cashflow_amounts`.",
                },
                {
                    name: "rate_guess",
                    detail: "An estimate for what the internal rate of return will be.",
                },
            ],
        },
        MIRR: {
            d:
                "Calculates the modified internal rate of return on an investment based on a series of periodic cash flows and the difference between the interest rate paid on financing versus the return received on reinvested income.",
            a: "Modified internal rate of return.",
            p: [
                {
                    name: "cashflow_amounts",
                    detail: "An array or range containing the income or payments associated with the investment.",
                },
                {
                    name: "financing_rate",
                    detail: "The interest rate paid on funds invested.",
                },
                {
                    name: "reinvestment_return_rate",
                    detail:
                        "The return (as a percentage) earned on reinvestment of income received from the investment.",
                },
            ],
        },
        IRR: {
            d: "Calculates the internal rate of return on an investment based on a series of periodic cash flows.",
            a: "Internal rate of return given periodic cashflows.",
            p: [
                {
                    name: "cashflow_amounts",
                    detail: "An array or range containing the income or payments associated with the investment.",
                },
                {
                    name: "rate_guess",
                    detail: "An estimate for what the internal rate of return will be.",
                },
            ],
        },
        NPV: {
            d:
                "Calculates the net present value of an investment based on a series of periodic cash flows and a discount rate.",
            a: "The net present value of an investment based on a series of periodic cash flows and a discount rate.",
            p: [
                {
                    name: "discount",
                    detail: "The discount rate of the investment over one period.",
                },
                {
                    name: "cashflow1",
                    detail: "The first future cash flow.",
                },
                {
                    name: "cashflow2",
                    detail: "Additional future cash flows.",
                },
            ],
        },
        XNPV: {
            d:
                "Calculates the net present value of an investment based on a specified series of potentially irregularly spaced cash flows and a discount rate.",
            a: "Net present value given non-periodic cashflows.",
            p: [
                {
                    name: "discount",
                    detail: "The discount rate of the investment over one period.",
                },
                {
                    name: "cashflow_amounts",
                    detail: "A range of cells containing the income or payments associated with the investment.",
                },
                {
                    name: "cashflow_dates",
                    detail: "A range of cells with dates corresponding to the cash flows in `cashflow_amounts`.",
                },
            ],
        },
        CUMIPMT: {
            d:
                "Calculates the cumulative interest over a range of payment periods for an investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Cumulative interest paid over a set of periods.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "first_period",
                    detail: "The number of the payment period to begin the cumulative calculation.",
                },
                {
                    name: "last_period",
                    detail: "The number of the payment period to end the cumulative calculation.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        PMT: {
            d:
                "Calculates the periodic payment for an annuity investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Periodic payment for an annuity investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        IPMT: {
            d:
                "Calculates the payment on interest for an investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Payment on interest for an investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "period",
                    detail: "The amortization period, in terms of number of periods.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        PPMT: {
            d:
                "Calculates the payment on the principal of an investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Payment on the principal of an investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "period",
                    detail: "The amortization period, in terms of number of periods.",
                },
                {
                    name: "number_of_periods",
                    detail: "The number of payments to be made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        INTRATE: {
            d:
                "Calculates the effective interest rate generated when an investment is purchased at one price and sold at another with no interest or dividends generated by the investment itself.",
            a: "Calculates effective interest rate.",
            p: [
                {
                    name: "buy_date",
                    detail: "The date of purchase of the investment.",
                },
                {
                    name: "sell_date",
                    detail: "The date of sale of the investment.",
                },
                {
                    name: "buy_price",
                    detail: "The price at which the investment was purchased.",
                },
                {
                    name: "sell_price",
                    detail: "The price at which the investment was sold.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        PRICE: {
            d:
                "Calculates the price of a security paying periodic interest, such as a US Treasury Bond, based on expected yield.",
            a: "Price of a security paying periodic interest.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "yield",
                    detail: "The expected annual yield of the security.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        PRICEDISC: {
            d: "Calculates the price of a discount (non-interest-bearing) security, based on expected yield.",
            a: "Price of a discount security.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "discount",
                    detail: "The discount rate of the security at time of purchase.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        PRICEMAT: {
            d: "Calculates the price of a security paying interest at maturity, based on expected yield.",
            a: "Price of security paying interest at maturity.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "issue",
                    detail: "The date the security was initially issued.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "yield",
                    detail: "The expected annual yield of the security.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        RECEIVED: {
            d:
                "Calculates the amount received at maturity for an investment in fixed-income securities purchased on a given date.",
            a: "Amount received at maturity for a security.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "investment",
                    detail: "The amount invested (irrespective of face value of each security).",
                },
                {
                    name: "discount",
                    detail: "The discount rate of the security invested in.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        DISC: {
            d: "Calculates the discount rate of a security based on price.",
            a: "The discount rate of a security based on price.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "price",
                    detail: "The price at which the security is bought per 100 face value.",
                },
                {
                    name: "redemption",
                    detail: "The redemption amount per 100 face value, or par.",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        NPER: {
            d:
                "Calculates the number of payment periods for an investment based on constant-amount periodic payments and a constant interest rate.",
            a: "Number of payment periods for an investment.",
            p: [
                {
                    name: "rate",
                    detail: "The interest rate.",
                },
                {
                    name: "payment_amount",
                    detail: "The amount of each payment made.",
                },
                {
                    name: "present_value",
                    detail: "The current value of the annuity.",
                },
                {
                    name: "future_value",
                    detail: "The future value remaining after the final payment has been made.",
                },
                {
                    name: "end_or_beginning",
                    detail: "Whether payments are due at the end (`0`) or beginning (`1`) of each period.",
                },
            ],
        },
        SLN: {
            d: "Calculates the depreciation of an asset for one period using the straight-line method.",
            a: "Depreciation of asset using the straight-line method.",
            p: [
                {
                    name: "cost",
                    detail: "The initial cost of the asset.",
                },
                {
                    name: "salvage",
                    detail: "The value of the asset at the end of depreciation.",
                },
                {
                    name: "life",
                    detail: "The number of periods over which the asset is depreciated.",
                },
            ],
        },
        DURATION: {
            d:
                "Calculates the number of compounding periods required for an investment of a specified present value appreciating at a given rate to reach a target value.",
            a: "Number of periods for an investment to reach a value.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "yield",
                    detail: "The expected annual yield of the security.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        MDURATION: {
            d:
                "Calculates the modified Macaulay duration of a security paying periodic interest, such as a US Treasury Bond, based on expected yield.",
            a: "Modified Macaulay duration.",
            p: [
                {
                    name: "settlement",
                    detail:
                        "The settlement date of the security, the date after issuance when the security is delivered to the buyer.",
                },
                {
                    name: "maturity",
                    detail: "The maturity or end date of the security, when it can be redeemed at face, or par value.",
                },
                {
                    name: "rate",
                    detail: "The annualized rate of interest.",
                },
                {
                    name: "yield",
                    detail: "The expected annual yield of the security.",
                },
                {
                    name: "frequency",
                    detail: "The number of interest or coupon payments per year (1, 2, or 4).",
                },
                {
                    name: "day_count_convention",
                    detail: "An indicator of what day count method to use.",
                },
            ],
        },
        BIN2DEC: {
            d: "Converts a signed binary number to decimal format.",
            a: "Converts a signed binary number to decimal format.",
            p: [
                {
                    name: "signed_binary_number",
                    detail: "The signed 10-bit binary value to be converted to decimal, provided as a string.",
                },
            ],
        },
        BIN2HEX: {
            d: "Converts a signed binary number to signed hexadecimal format.",
            a: "Converts a binary number to hexadecimal.",
            p: [
                {
                    name: "signed_binary_number",
                    detail:
                        "The signed 10-bit binary value to be converted to signed hexademical, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        BIN2OCT: {
            d: "Converts a signed binary number to signed octal format.",
            a: "Converts a binary number to octal.",
            p: [
                {
                    name: "signed_binary_number",
                    detail: "The signed 10-bit binary value to be converted to signed octal, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        DEC2BIN: {
            d: "Converts a decimal number to signed binary format.",
            a: "Converts a decimal number to signed binary format.",
            p: [
                {
                    name: "decimal_number",
                    detail: "The decimal value to be converted to signed binary, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        DEC2HEX: {
            d: "Converts a decimal number to signed hexadecimal format.",
            a: "Converts a decimal number to hexadecimal.",
            p: [
                {
                    name: "decimal_number",
                    detail: "The decimal value to be converted to signed hexadecimal, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        DEC2OCT: {
            d: "Converts a decimal number to signed octal format.",
            a: "Converts a decimal number to signed octal format.",
            p: [
                {
                    name: "decimal_number",
                    detail: "The decimal value to be converted to signed octal, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        HEX2BIN: {
            d: "Converts a signed hexadecimal number to signed binary format.",
            a: "Converts a hexadecimal number to binary.",
            p: [
                {
                    name: "signed_hexadecimal_number",
                    detail:
                        "The signed 40-bit hexadecimal value to be converted to signed binary, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        HEX2DEC: {
            d: "Converts a signed hexadecimal number to decimal format.",
            a: "Converts a hexadecimal number to decimal.",
            p: [
                {
                    name: "signed_hexadecimal_number",
                    detail: "The signed 40-bit hexadecimal value to be converted to decimal, provided as a string.",
                },
            ],
        },
        HEX2OCT: {
            d: "Converts a signed hexadecimal number to signed octal format.",
            a: "Converts a hexadecimal number to octal.",
            p: [
                {
                    name: "signed_hexadecimal_number",
                    detail:
                        "The signed 40-bit hexadecimal value to be converted to signed octal, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        OCT2BIN: {
            d: "Converts a signed octal number to signed binary format.",
            a: "Converts an octal number to binary.",
            p: [
                {
                    name: "signed_octal_number",
                    detail: "The signed 30-bit octal value to be converted to signed binary, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        OCT2DEC: {
            d: "Converts a signed octal number to decimal format.",
            a: "Converts a signed octal number to decimal format.",
            p: [
                {
                    name: "signed_octal_number",
                    detail: "The signed 30-bit octal value to be converted to decimal, provided as a string.",
                },
            ],
        },
        OCT2HEX: {
            d: "Converts a signed octal number to signed hexadecimal format.",
            a: "Converts an octal number to hexadecimal.",
            p: [
                {
                    name: "signed_octal_number",
                    detail:
                        "The signed 30-bit octal value to be converted to signed hexadecimal, provided as a string.",
                },
                {
                    name: "significant_digits",
                    detail: "The number of significant digits to ensure in the result.",
                },
            ],
        },
        COMPLEX: {
            d: "Creates a complex number given real and imaginary coefficients.",
            a: "Creates a complex number.",
            p: [
                {
                    name: "real_part",
                    detail: "The real coefficient.",
                },
                {
                    name: "imaginary_part",
                    detail: "The imaginary coefficient.",
                },
                {
                    name: "suffix",
                    detail:
                        "The suffix for the imaginary coefficient, can only be 'i' or 'j'. If omitted, 'i' will be used.",
                },
            ],
        },
        IMREAL: {
            d: "Returns the real coefficient of a complex number.",
            a: "The real coefficient of a complex number.",
            p: [
                {
                    name: "complex_number",
                    detail: "The complex number, in the a+bi or a+bj format.",
                },
            ],
        },
        IMAGINARY: {
            d: "Returns the imaginary coefficient of a complex number.",
            a: "The imaginary coefficient of a complex number.",
            p: [
                {
                    name: "complex_number",
                    detail: "The complex number, in the a+bi or a+bj format.",
                },
            ],
        },
        IMCONJUGATE: {
            d: "Returns the complex conjugate of a number.",
            a: "The complex conjugate of a number.",
            p: [
                {
                    name: "number",
                    detail: "The complex number to calculate the conjugate for.",
                },
            ],
        },
        IMABS: {
            d: "Returns absolute value (or modulus) of a complex number.",
            a: "The absolute value of a complex number.",
            p: [
                {
                    name: "number",
                    detail: "The complex number to calculate the absolute value of.",
                },
            ],
        },
        DELTA: {
            d: "Compare two numeric values, returning 1 if they're equal.",
            a: "Compare two numeric values.",
            p: [
                {
                    name: "number1",
                    detail: "The first number to compare.",
                },
                {
                    name: "number2",
                    detail: "The second number to compare.",
                },
            ],
        },
        IMSUM: {
            d: "Returns the sum of a series of complex numbers.",
            a: "Sum of a series of complex numbers.",
            p: [
                {
                    name: "value1",
                    detail: "The first complex number or range to add together.",
                },
                {
                    name: "value2",
                    detail: "Additional complex numbers or ranges to add to `value1`.",
                },
            ],
        },
        IMSUB: {
            d: "Returns the difference between two complex numbers.",
            a: "The difference between two complex numbers.",
            p: [
                {
                    name: "first_number",
                    detail: "The complex number to subtract second_number from.",
                },
                {
                    name: "second_number",
                    detail: "The complex number to subtract from first_number.",
                },
            ],
        },
        IMPRODUCT: {
            d: "Returns the result of multiplying a series of complex numbers together.",
            a: "Result of multiplying a series of complex numbers together.",
            p: [
                {
                    name: "factor1",
                    detail: "The first number or range to calculate for the product.",
                },
                {
                    name: "factor2",
                    detail: "Additional complex numbers or ranges to calculate for the product.",
                },
            ],
        },
        IMDIV: {
            d: "Returns one complex number divided by another.",
            a: "One complex number divided by another.",
            p: [
                {
                    name: "dividend",
                    detail: "The complex number to be divided.",
                },
                {
                    name: "divisor",
                    detail: "The complex number to divide by.",
                },
            ],
        },
        NOT: {
            d: "Returns the opposite of a logical value - `NOT(TRUE)` returns `FALSE`; `NOT(FALSE)` returns `TRUE`.",
            a: "Returns opposite of provided logical value.",
            p: [
                {
                    name: "logical_expression",
                    detail:
                        "An expression or reference to a cell holding an expression that represents some logical value.",
                },
            ],
        },
        TRUE: {
            d: "Returns the logical value `TRUE`.",
            a: "Logical value `true`.",
            p: [],
        },
        FALSE: {
            d: "Returns the logical value `FALSE`.",
            a: "Logical value `false`.",
            p: [],
        },
        AND: {
            d:
                "Returns true if all of the provided arguments are logically true, and false if any of the provided arguments are logically false.",
            a: "Logical `and` operator.",
            p: [
                {
                    name: "logical_expression1",
                    detail:
                        "An expression or reference to a cell containing an expression that represents some logical value, i.e. `TRUE` or `FALSE`, or an expression that can be coerced to a logical value.",
                },
                {
                    name: "logical_expression2",
                    detail: "More expressions that represent logical values.",
                },
            ],
        },
        IFERROR: {
            d:
                "Returns the first argument if it is not an error value, otherwise returns the second argument if present, or a blank if the second argument is absent.",
            a: "Value if it is not an error, otherwise 2nd argument.",
            p: [
                {
                    name: "value",
                    detail: "The value to return if `value` itself is not an error.",
                },
                {
                    name: "value_if_error",
                    detail: "The value the function returns if `value` is an error.",
                },
            ],
        },
        IF: {
            d: "Returns one value if a logical expression is `TRUE` and another if it is `FALSE`.",
            a: "Returns value depending on logical expression.",
            p: [
                {
                    name: "logical_expression",
                    detail:
                        "An expression or reference to a cell containing an expression that represents some logical value, i.e. `TRUE` or `FALSE`.",
                },
                {
                    name: "value_if_true",
                    detail: "The value the function returns if `logical_expression` is `TRUE`.",
                },
                {
                    name: "value_if_false",
                    detail: "The value the function returns if `logical_expression` is `FALSE`.",
                },
            ],
        },
        OR: {
            d:
                "Returns true if any of the provided arguments are logically true, and false if all of the provided arguments are logically false.",
            a: "Logical `or` operator.",
            p: [
                {
                    name: "logical_expression1",
                    detail:
                        "An expression or reference to a cell containing an expression that represents some logical value, i.e. `TRUE` or `FALSE`, or an expression that can be coerced to a logical value.",
                },
                {
                    name: "logical_expression2",
                    detail: "More expressions that evaluate to logical values.",
                },
            ],
        },
        NE: {
            d:
                "Returns `TRUE` if two specified values are not equal and `FALSE` otherwise. Equivalent to the `!=` operator.",
            a: "Not equal.",
            p: [
                {
                    name: "value1",
                    detail: "The first value.",
                },
                {
                    name: "value2",
                    detail: "The value to test against `value1` for inequality.",
                },
            ],
        },
        EQ: {
            d:
                "Returns `TRUE` if two specified values are equal and `FALSE` otherwise. Equivalent to the `==` operator.",
            a: "Equal.",
            p: [
                {
                    name: "value1",
                    detail: "The first value.",
                },
                {
                    name: "value2",
                    detail: "The value to test against `value1` for equality.",
                },
            ],
        },
        GT: {
            d:
                "Returns `TRUE` if the first argument is strictly greater than the second, and `FALSE` otherwise. Equivalent to the `>` operator.",
            a: "Strictly greater than.",
            p: [
                {
                    name: "value1",
                    detail: "The value to test as being greater than `value2`.",
                },
                {
                    name: "value2",
                    detail: "The second value.",
                },
            ],
        },
        GTE: {
            d:
                "Returns `TRUE` if the first argument is greater than or equal to the second, and `FALSE` otherwise. Equivalent to the `>=` operator.",
            a: "Greater than or equal to.",
            p: [
                {
                    name: "value1",
                    detail: "The value to test as being greater than or equal to `value2`.",
                },
                {
                    name: "value2",
                    detail: "The second value.",
                },
            ],
        },
        LT: {
            d:
                "Returns `TRUE` if the first argument is strictly less than the second, and `FALSE` otherwise. Equivalent to the `<` operator.",
            a: "Less than.",
            p: [
                {
                    name: "value1",
                    detail: "The value to test as being less than `value2`.",
                },
                {
                    name: "value2",
                    detail: "The second value.",
                },
            ],
        },
        LTE: {
            d:
                "Returns `TRUE` if the first argument is less than or equal to the second, and `FALSE` otherwise. Equivalent to the `<=` operator.",
            a: "Less than or equal to.",
            p: [
                {
                    name: "value1",
                    detail: "The value to test as being less than or equal to `value2`.",
                },
                {
                    name: "value2",
                    detail: "The second value.",
                },
            ],
        },
        ADD: {
            d: "Returns the sum of two numbers. Equivalent to the `+` operator.",
            a: "Sum of two numbers",
            p: [
                {
                    name: "value1",
                    detail: "The first addend.",
                },
                {
                    name: "value2",
                    detail: "The second addend.",
                },
            ],
        },
        MINUS: {
            d: "Returns the difference of two numbers. Equivalent to the `-` operator.",
            a: "Difference of two numbers",
            p: [
                {
                    name: "value1",
                    detail: "The minuend, or number to be subtracted from.",
                },
                {
                    name: "value2",
                    detail: "The subtrahend, or number to subtract from `value1`.",
                },
            ],
        },
        MULTIPLY: {
            d: "Returns the product of two numbers. Equivalent to the `*` operator.",
            a: "Product of two numbers",
            p: [
                {
                    name: "factor1",
                    detail: "The first multiplicand.",
                },
                {
                    name: "factor2",
                    detail: "The second multiplicand.",
                },
            ],
        },
        DIVIDE: {
            d: "Returns one number divided by another. Equivalent to the `/` operator.",
            a: "One number divided by another",
            p: [
                {
                    name: "dividend",
                    detail: "The number to be divided.",
                },
                {
                    name: "divisor",
                    detail: "The number to divide by.",
                },
            ],
        },
        CONCAT: {
            d: "Returns the concatenation of two values. Equivalent to the `&` operator.",
            a: "Concatenation of two values",
            p: [
                {
                    name: "value1",
                    detail: "The value to which `value2` will be appended.",
                },
                {
                    name: "value2",
                    detail: "The value to append to `value1`.",
                },
            ],
        },
        UNARY_PERCENT: {
            d: "Returns a value interpreted as a percentage; that is, `UNARY_PERCENT(100)` equals `1`.",
            a: "Value interpreted as a percentage.",
            p: [
                {
                    name: "percentage",
                    detail: "The value to interpret as a percentage.",
                },
            ],
        },
        CONCATENATE: {
            d: "Appends strings to one another.",
            a: "Appends strings to one another.",
            p: [
                {
                    name: "string1",
                    detail: "The initial string.",
                },
                {
                    name: "string2",
                    detail: "More strings to append in sequence.",
                },
            ],
        },
        CODE: {
            d: "Returns the numeric Unicode map value of the first character in the string provided.",
            a: "Numeric unicode map value of character.",
            p: [
                {
                    name: "string",
                    detail: "The string whose first character's Unicode map value will be returned.",
                },
            ],
        },
        CHAR: {
            d: "Convert a number into a character according to the current Unicode table.",
            a: "Gets character associated with number.",
            p: [
                {
                    name: "table_number",
                    detail: "The number of the character to look up from the current Unicode table in decimal format.",
                },
            ],
        },
        ARABIC: {
            d: "Computes the value of a Roman numeral.",
            a: "Computes the value of a roman numeral.",
            p: [
                {
                    name: "roman_numeral",
                    detail: "The Roman numeral to format, whose value must be between 1 and 3999, inclusive.",
                },
            ],
        },
        ROMAN: {
            d: "Formats a number in Roman numerals.",
            a: "Formats a number in Roman numerals.",
            p: [
                {
                    name: "number",
                    detail: "The number to format, between 1 and 3999, inclusive.",
                },
            ],
        },
        REGEXEXTRACT: {
            d: "Extracts matching substrings according to a regular expression.",
            a: "Extracts matching substrings with regular expression.",
            p: [
                {
                    name: "text",
                    detail: "The input text.",
                },
                {
                    name: "regular_expression",
                    detail: "The first part of `text` that matches this expression will be returned.",
                },
            ],
        },
        REGEXMATCH: {
            d: "Whether a piece of text matches a regular expression.",
            a: "Whether a piece of text matches regular expression.",
            p: [
                {
                    name: "text",
                    detail: "The text to be tested against the regular expression.",
                },
                {
                    name: "regular_expression",
                    detail: "The regular expression to test the text against.",
                },
            ],
        },
        REGEXREPLACE: {
            d: "Replaces part of a text string with a different text string using regular expressions.",
            a: "Replaces text with regular expressions.",
            p: [
                {
                    name: "text",
                    detail: "The text, a part of which will be replaced.",
                },
                {
                    name: "regular_expression",
                    detail: "The regular expression.  All matching instances in `text` will be replaced.",
                },
                {
                    name: "replacement",
                    detail: "The text which will be inserted into the original text.",
                },
            ],
        },
        T: {
            d: "Returns string arguments as text, or the empty string if the value is not text.",
            a: "String arguments as text.",
            p: [
                {
                    name: "value",
                    detail: "The argument to be converted to text.",
                },
            ],
        },
        FIXED: {
            d: "Formats a number with a fixed number of decimal places.",
            a: "Formats number with fixed number of decimal places.",
            p: [
                {
                    name: "number",
                    detail: "The number to format.",
                },
                {
                    name: "number_of_places",
                    detail: "The number of decimal places to display in the result.",
                },
                {
                    name: "suppress_separator",
                    detail:
                        "Whether or not to suppress the thousands separator used in some locales (e.g. `1,000` becomes `1000`). Separators will be present if this value is 0 or omitted, and absent otherwise.",
                },
            ],
        },
        FIND: {
            d:
                "Returns the position at which a string is first found within text where the capitalization of letters matters. Returns `#VALUE!` if the string is not found.",
            a: "First position of string found in text, case-sensitive.",
            p: [
                {
                    name: "search_for",
                    detail: "The string to look for within `text_to_search`.",
                },
                {
                    name: "text_to_search",
                    detail: "The text to search for the first occurrence of `search_for`.",
                },
                {
                    name: "starting_at",
                    detail: "The character within `text_to_search` at which to start the search.",
                },
            ],
        },
        FINDB: {
            d: "Returns the position at which a string is first found within text counting each double-character as 2.",
            a: "Position at which a string is first found within text (binary).",
            p: [
                {
                    name: "search_for",
                    detail: "The string to look for within `text_to_search`.",
                },
                {
                    name: "text_to_search",
                    detail: "The text to search for the first occurrence of `search_for`.",
                },
                {
                    name: "starting_at",
                    detail: "The character within `text_to_search` at which to start the search.",
                },
            ],
        },
        JOIN: {
            d: "Concatenates the elements of one or more one-dimensional arrays using a specified delimiter.",
            a: "Concatenates elements of arrays with delimiter.",
            p: [
                {
                    name: "delimiter",
                    detail: "The character or string to place between each concatenated value.",
                },
                {
                    name: "value_or_array1",
                    detail: "The value or values to be appended using `delimiter`.",
                },
                {
                    name: "value_or_array2",
                    detail: "More values to be appended using `delimiter`.",
                },
            ],
        },
        LEFT: {
            d: "Returns a substring from the beginning of a specified string.",
            a: "Substring from beginning of specified string.",
            p: [
                {
                    name: "string",
                    detail: "The string from which the left portion will be returned.",
                },
                {
                    name: "number_of_characters",
                    detail: "The number of characters to return from the left side of `string`.",
                },
            ],
        },
        RIGHT: {
            d: "Returns a substring from the end of a specified string.",
            a: "A substring from the end of a specified string.",
            p: [
                {
                    name: "string",
                    detail: "The string from which the right portion will be returned.",
                },
                {
                    name: "number_of_characters",
                    detail: "The number of characters to return from the right side of `string`.",
                },
            ],
        },
        MID: {
            d: "Returns a segment of a string.",
            a: "A segment of a string.",
            p: [
                {
                    name: "string",
                    detail: "The string to extract a segment from.",
                },
                {
                    name: "starting_at",
                    detail:
                        "The index from the left of `string` from which to begin extracting. The first character in `string` has the index 1.",
                },
                {
                    name: "extract_length",
                    detail: "The length of the segment to extract.",
                },
            ],
        },
        LEN: {
            d: "Returns the length of a string.",
            a: "Length of a string.",
            p: [
                {
                    name: "text",
                    detail: "The string whose length will be returned.",
                },
            ],
        },
        LENB: {
            d: "Returns the length of a string in bytes.",
            a: "Length of a string in bytes.",
            p: [
                {
                    name: "text",
                    detail: "The string whose length will be returned.",
                },
            ],
        },
        LOWER: {
            d: "Converts a specified string to lowercase.",
            a: "Converts a specified string to lowercase.",
            p: [
                {
                    name: "text",
                    detail: "The string to convert to lowercase.",
                },
            ],
        },
        UPPER: {
            d: "Converts a specified string to uppercase.",
            a: "Converts a specified string to uppercase.",
            p: [
                {
                    name: "text",
                    detail: "The string to convert to uppercase.",
                },
            ],
        },
        EXACT: {
            d: "Tests whether two strings are identical.",
            a: "Tests whether two strings are identical.",
            p: [
                {
                    name: "string1",
                    detail: "The first string to compare",
                },
                {
                    name: "string2",
                    detail: "The second string to compare",
                },
            ],
        },
        REPLACE: {
            d: "Replaces part of a text string with a different text string.",
            a: "Replaces part of a text string with different text.",
            p: [
                {
                    name: "text",
                    detail: "The text, a part of which will be replaced.",
                },
                {
                    name: "position",
                    detail: "The position where the replacement will begin (starting from 1).",
                },
                {
                    name: "length",
                    detail: "The number of characters in the text to be replaced.",
                },
                {
                    name: "new_text",
                    detail: "The text which will be inserted into the original text.",
                },
            ],
        },
        REPT: {
            d: "Returns specified text repeated a number of times.",
            a: "Specified text repeated a number of times.",
            p: [
                {
                    name: "text_to_repeat",
                    detail: "The character or string to repeat.",
                },
                {
                    name: "number_of_repetitions",
                    detail: "The number of times `text_to_repeat` should appear in the value returned.",
                },
            ],
        },
        SEARCH: {
            d:
                "Returns the position at which a string is first found within text and ignores capitalization of letters. Returns `#VALUE!` if the string is not found.",
            a: "First position of string found in text, ignoring case.",
            p: [
                {
                    name: "search_for",
                    detail: "The string to look for within `text_to_search`.",
                },
                {
                    name: "text_to_search",
                    detail: "The text to search for the first occurrence of `search_for`.",
                },
                {
                    name: "starting_at",
                    detail: "The character within `text_to_search` at which to start the search.",
                },
            ],
        },
        SUBSTITUTE: {
            d: "Replaces existing text with new text in a string.",
            a: "Replaces existing text with new text in a string.",
            p: [
                {
                    name: "text_to_search",
                    detail: "The text within which to search and replace.",
                },
                {
                    name: "search_for",
                    detail: "The string to search for within `text_to_search`.",
                },
                {
                    name: "replace_with",
                    detail: "The string that will replace `search_for`.",
                },
                {
                    name: "occurrence_number",
                    detail:
                        "The instance of `search_for` within `text_to_search` to replace with `replace_with`. By default, all occurrences of `search_for` are replaced; however, if `occurrence_number` is specified, only the indicated instance of `search_for` is replaced.",
                },
            ],
        },
        CLEAN: {
            d: "Returns the text with the non-printable ASCII characters removed.",
            a: "Removes non-printable characters from a piece of text.",
            p: [
                {
                    name: "text",
                    detail: "The text whose non-printable characters are to be removed.",
                },
            ],
        },
        TEXT: {
            d: "Converts a number into text according to a specified format.",
            a: "Formats a number into text.",
            p: [
                {
                    name: "number",
                    detail: "The number, date, or time to format.",
                },
                {
                    name: "format",
                    detail: "The pattern by which to format the number, enclosed in quotation marks.",
                },
            ],
        },
        TRIM: {
            d: "Removes leading, trailing, and repeated spaces in text.",
            a: "Removes space characters.",
            p: [
                {
                    name: "text",
                    detail: "The text or reference to a cell containing text to be trimmed.",
                },
            ],
        },
        VALUE: {
            d:
                "Converts a string in any of the date, time or number formats that Google Sheets understands into a number.",
            a: "Converts a date/time/number string into a number.",
            p: [
                {
                    name: "text",
                    detail: "The string containing the value to be converted.",
                },
            ],
        },
        PROPER: {
            d: "Capitalizes each word in a specified string.",
            a: "Capitalizes each word in a specified string.",
            p: [
                {
                    name: "text_to_capitalize",
                    detail:
                        "The text which will be returned with the first letter of each word in uppercase and all other letters in lowercase.",
                },
            ],
        },
        CONVERT: {
            d: "Converts a numeric value to a different unit of measure.",
            a: "Unit conversion for numbers.",
            p: [
                {
                    name: "value",
                    detail: "The numeric value in `start_unit` to convert to `end_unit`.",
                },
                {
                    name: "start_unit",
                    detail: "The starting unit, the unit currently assigned to `value`.",
                },
                {
                    name: "end_unit",
                    detail: "The unit of measure into which to convert the argument, `value`.",
                },
            ],
        },
        SUMX2MY2: {
            d: "Calculates the sum of the differences of the squares of values in two arrays.",
            a: "Sum of the differences of squares.",
            p: [
                {
                    name: "array_x",
                    detail:
                        "The array or range of values whose squares will be reduced by the squares of corresponding entries in `array_y` and added together.",
                },
                {
                    name: "array_y",
                    detail:
                        "The array or range of values whose squares will be subtracted from the squares of corresponding entries in `array_x` and added together.",
                },
            ],
        },
        SUMX2PY2: {
            d: "Calculates the sum of the sums of the squares of values in two arrays.",
            a: "Sum of the sums of squares.",
            p: [
                {
                    name: "array_x",
                    detail:
                        "The array or range of values whose squares will be added to the squares of corresponding entries in `array_y` and added together.",
                },
                {
                    name: "array_y",
                    detail:
                        "The array or range of values whose squares will be added to the squares of corresponding entries in `array_x` and added together.",
                },
            ],
        },
        SUMXMY2: {
            d: "Calculates the sum of the squares of differences of values in two arrays.",
            a: "Sum of the squares of differences.",
            p: [
                {
                    name: "array_x",
                    detail:
                        "The array or range of values that will be reduced by corresponding entries in `array_y`, squared, and added together.",
                },
                {
                    name: "array_y",
                    detail:
                        "The array or range of values that will be subtracted from corresponding entries in `array_x`, the result squared, and all such results added together.",
                },
            ],
        },
        TRANSPOSE: {
            d: "Transposes the rows and columns of an array or range of cells.",
            a: "Transposes the rows and columns of an array.",
            p: [
                {
                    name: "array_or_range",
                    detail: "The array or range whose rows and columns will be swapped.",
                },
            ],
        },
        TREND: {
            d:
                "Given partial data about a linear trend, fits an ideal linear trend using the least squares method and/or predicts further values.",
            a: "Fits points to linear trend derived via least-squares.",
            p: [
                {
                    name: "known_data_y",
                    detail:
                        "The array or range containing dependent (y) values that are already known, used to curve fit an ideal linear trend.",
                },
                {
                    name: "known_data_x",
                    detail: "The values of the independent variable(s) corresponding with `known_data_y`.",
                },
                {
                    name: "new_data_x",
                    detail: "The data points to return the `y` values for on the ideal curve fit.",
                },
                {
                    name: "b",
                    detail:
                        "Given a general linear form of `y = m*x+b` for a curve fit, calculates `b` if `TRUE` or forces `b` to be `0` and only calculates the `m` values if `FALSE`, i.e. forces the curve fit to pass through the origin.",
                },
            ],
        },
        FREQUENCY: {
            d: "Calculates the frequency distribution of a one-column array into specified classes.",
            a: "The frequency distribution of array.",
            p: [
                {
                    name: "data",
                    detail: "The array or range containing the values to be counted.",
                },
                {
                    name: "classes",
                    detail: "The array or range containing the set of classes.",
                },
            ],
        },
        GROWTH: {
            d:
                "Given partial data about an exponential growth trend, fits an ideal exponential growth trend and/or predicts further values.",
            a: "Fits points to exponential growth trend.",
            p: [
                {
                    name: "known_data_y",
                    detail:
                        "The array or range containing dependent (y) values that are already known, used to curve fit an ideal exponential growth curve.",
                },
                {
                    name: "known_data_x",
                    detail: "The values of the independent variable(s) corresponding with `known_data_y`.",
                },
                {
                    name: "new_data_x",
                    detail: "The data points to return the `y` values for on the ideal curve fit.",
                },
                {
                    name: "b",
                    detail:
                        "Given a general exponential form of `y = b*m^x` for a curve fit, calculates `b` if `TRUE` or forces `b` to be `1` and only calculates the `m` values if `FALSE`.",
                },
            ],
        },
        LINEST: {
            d:
                "Given partial data about a linear trend, calculates various parameters about the ideal linear trend using the least-squares method.",
            a: "Best-fit linear trend via least-squares.",
            p: [
                {
                    name: "known_data_y",
                    detail:
                        "The array or range containing dependent (y) values that are already known, used to curve fit an ideal linear trend.",
                },
                {
                    name: "known_data_x",
                    detail: "The values of the independent variable(s) corresponding with `known_data_y`.",
                },
                {
                    name: "calculate_b",
                    detail:
                        "Given a linear form of `y = m*x+b`, calculates the y-intercept (`b`) if `TRUE`. Otherwise, forces `b` to be `0` and only calculates the `m` values if `FALSE`, i.e. forces the curve fit to pass through the origin.",
                },
                {
                    name: "verbose",
                    detail:
                        "A flag specifying whether to return additional regression statistics or only the linear coefficients and the y-intercept (default).",
                },
            ],
        },
        LOGEST: {
            d:
                "Given partial data about an exponential growth curve, calculates various parameters about the best fit ideal exponential growth curve.",
            a: "Best-fit exponential growth curve.",
            p: [
                {
                    name: "known_data_y",
                    detail:
                        "The array or range containing dependent (y) values that are already known, used to curve fit an ideal exponential growth curve.",
                },
                {
                    name: "known_data_x",
                    detail: "The values of the independent variable(s) corresponding with `known_data_y`.",
                },
                {
                    name: "b",
                    detail:
                        "Given a general exponential form of `y = b*m^x` for a curve fit, calculates `b` if `TRUE` or forces `b` to be `1` and only calculates the `m` values if `FALSE`.",
                },
                {
                    name: "verbose",
                    detail:
                        "A flag specifying whether to return additional regression statistics or only the calculated coefficient and exponents.",
                },
            ],
        },
        MDETERM: {
            d: "Returns the matrix determinant of a square matrix specified as an array or range.",
            a: "Matrix determinant of a square matrix.",
            p: [
                {
                    name: "square_matrix",
                    detail:
                        "An array or range with an equal number of rows and columns representing a matrix whose determinant will be calculated.",
                },
            ],
        },
        MINVERSE: {
            d: "Returns the multiplicative inverse of a square matrix specified as an array or range.",
            a: "Multiplicative inverse of square matrix.",
            p: [
                {
                    name: "square_matrix",
                    detail:
                        "An array or range with an equal number of rows and columns representing a matrix whose multiplicative inverse will be calculated.",
                },
            ],
        },
        MMULT: {
            d: "Calculates the matrix product of two matrices specified as arrays or ranges.",
            a: "The matrix product of two matrices.",
            p: [
                {
                    name: "matrix1",
                    detail:
                        "The first matrix in the matrix multiplication operation, represented as an array or range.",
                },
                {
                    name: "matrix2",
                    detail:
                        "The second matrix in the matrix multiplication operation, represented as an array or range.",
                },
            ],
        },
        SUMPRODUCT: {
            d: "Calculates the sum of the products of corresponding entries in two equal-sized arrays or ranges.",
            a: "Sum of products of elements in two arrays.",
            p: [
                {
                    name: "array1",
                    detail:
                        "The first array or range whose entries will be multiplied with corresponding entries in the second such array or range.",
                },
                {
                    name: "array2",
                    detail:
                        "The second array or range whose entries will be multiplied with corresponding entries in the first such array or range.",
                },
            ],
        },
        ISFORMULA: {
            d: "Checks whether a value is a formula.",
            a: "Whether a value is a formula.",
            p: [
                {
                    name: "cell",
                    detail: "The cell to be verified as containing a formula.",
                },
            ],
        },
        CELL: {
            d: "Returns the requested information about the specified cell.",
            a: "Gets information about a cell.",
            p: [
                {
                    name: "info_type",
                    detail: "The type of information requested (see article for available types)",
                },
                {
                    name: "reference",
                    detail: "The reference to the cell.",
                },
            ],
        },
        NA: {
            d: 'Returns the "value not available" error, `#N/A`.',
            a: "The `#N/A` error.",
            p: [],
        },
        ERROR_TYPE: {
            d: "Returns a number corresponding to the error value in a different cell.",
            a: "Error value of cell (as number).",
            p: [
                {
                    name: "reference",
                    detail:
                        "The cell to find the error number for although you can also provide the error value directly.",
                },
            ],
        },
        ISBLANK: {
            d: "Checks whether the referenced cell is empty.",
            a: "Whether the referenced cell is empty.",
            p: [
                {
                    name: "value",
                    detail: "Reference to the cell that will be checked for emptiness.",
                },
            ],
        },
        ISERR: {
            d: "Checks whether a value is an error other than `#N/A`.",
            a: "Whether a value is an error other than `#n/a`.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as an error type other than `#N/A`.",
                },
            ],
        },
        ISERROR: {
            d: "Checks whether a value is an error.",
            a: "Whether a value is an error.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as an error type.",
                },
            ],
        },
        ISLOGICAL: {
            d: "Checks whether a value is `TRUE` or `FALSE`.",
            a: "Whether a value is `true` or `false`.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as a logical `TRUE` or `FALSE`.",
                },
            ],
        },
        ISNA: {
            d: "Checks whether a value is the error `#N/A`.",
            a: "Whether a value is the error `#n/a`.",
            p: [
                {
                    name: "value",
                    detail: "The value to be compared with the error value `#N/A`.",
                },
            ],
        },
        ISNONTEXT: {
            d: "Checks whether a value is non-textual.",
            a: "Whether a value is non-textual.",
            p: [
                {
                    name: "value",
                    detail: "The value to be checked.",
                },
            ],
        },
        ISNUMBER: {
            d: "Checks whether a value is a number.",
            a: "Whether a value is a number.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as a number.",
                },
            ],
        },
        ISREF: {
            d: "Checks whether a value is a valid cell reference.",
            a: "Whether a value is a valid cell reference.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as a cell reference.",
                },
            ],
        },
        ISTEXT: {
            d: "Checks whether a value is text.",
            a: "Whether a value is text.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as text.",
                },
            ],
        },
        TYPE: {
            d: "Returns a number associated with the type of data passed into the function.",
            a: "Get the type of a value.",
            p: [
                {
                    name: "value",
                    detail: "The value whose type is to be determined.",
                },
            ],
        },
        N: {
            d: "Returns the argument provided as a number. Text is converted to 0 and errors are returned as-is.",
            a: "Argument provided as a number.",
            p: [
                {
                    name: "value",
                    detail: "The argument to be converted to a number.",
                },
            ],
        },
        TO_DATE: {
            d: "Converts a provided number to a date.",
            a: "Converts a provided number to a date.",
            p: [
                {
                    name: "value",
                    detail: "The argument or reference to a cell to be converted to a date.",
                },
            ],
        },
        TO_PURE_NUMBER: {
            d:
                "Converts a provided date/time, percentage, currency or other formatted numeric value to a pure number without formatting.",
            a: "Converts any numeric value to a pure number.",
            p: [
                {
                    name: "value",
                    detail: "The argument or reference to a cell to be converted to a pure number.",
                },
            ],
        },
        TO_TEXT: {
            d: "Converts a provided numeric value to a text value.",
            a: "Converts a provided numeric value to a text value.",
            p: [
                {
                    name: "value",
                    detail: "The argument or reference to a cell to be converted to text.",
                },
            ],
        },
        TO_DOLLARS: {
            d: "Converts a provided number to a dollar value.",
            a: "Converts a provided number to a dollar value.",
            p: [
                {
                    name: "value",
                    detail: "The argument or reference to a cell to be converted to a dollar value.",
                },
            ],
        },
        TO_PERCENT: {
            d: "Converts a provided number to a percentage.",
            a: "Converts a provided number to a percentage.",
            p: [
                {
                    name: "value",
                    detail: "The argument or reference to a cell to be converted to a percentage.",
                },
            ],
        },
        DGET: {
            d: "Returns a single value from a database table-like array or range using a SQL-like query.",
            a: "Single value from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DMAX: {
            d: "Returns the maximum value selected from a database table-like array or range using a SQL-like query.",
            a: "Maximum of values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DMIN: {
            d: "Returns the minimum value selected from a database table-like array or range using a SQL-like query.",
            a: "Minimum of values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DAVERAGE: {
            d:
                "Returns the average of a set of values selected from a database table-like array or range using a SQL-like query.",
            a: "Average of a set of values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DCOUNT: {
            d: "Counts numeric values selected from a database table-like array or range using a SQL-like query.",
            a: "Counts values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DCOUNTA: {
            d:
                "Counts values, including text, selected from a database table-like array or range using a SQL-like query.",
            a: "Counts values and text from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DPRODUCT: {
            d:
                "Returns the product of values selected from a database table-like array or range using a SQL-like query.",
            a: "Product of values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DSTDEV: {
            d:
                "Returns the standard deviation of a population sample selected from a database table-like array or range using a SQL-like query.",
            a: "Standard deviation of population sample from table.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DSTDEVP: {
            d:
                "Returns the standard deviation of an entire population selected from a database table-like array or range using a SQL-like query.",
            a: "Standard deviation of entire population from table.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DSUM: {
            d: "Returns the sum of values selected from a database table-like array or range using a SQL-like query.",
            a: "Sum of values from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DVAR: {
            d:
                "Returns the variance of a population sample selected from a database table-like array or range using a SQL-like query.",
            a: "Variance of population sample from table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        DVARP: {
            d:
                "Returns the variance of an entire population selected from a database table-like array or range using a SQL-like query.",
            a: "Variance of a population from a table-like range.",
            p: [
                {
                    name: "database",
                    detail:
                        "The array or range containing the data to consider, structured in such a way that the first row contains the labels for each column's values.",
                },
                {
                    name: "field",
                    detail: "Indicates which column in `database` contains the values to be extracted and operated on.",
                },
                {
                    name: "criteria",
                    detail:
                        "An array or range containing zero or more criteria to filter the `database` values by before operating.",
                },
            ],
        },
        AGE_BY_IDCARD: {
            d: "Calculate the age based on the Chinese ID number. Support 15 or 18",
            a: "Get age based on ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
                {
                    name: "Deadline",
                    detail: "The deadline or range of age calculation. The default is the current day.",
                },
            ],
        },
        SEX_BY_IDCARD: {
            d: "Calculate gender based on Chinese ID number. Support 15 or 18",
            a: "Get gender based on ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        BIRTHDAY_BY_IDCARD: {
            d: "Calculate the birthday based on the Chinese ID number. Support 15 or 18",
            a: "Get the birthday based on the ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
                {
                    name: "Birthday format",
                    detail: "Date type, default:0:[1900/01/01], 1:[1900-01-01], 2:[1900年1月1日]",
                },
            ],
        },
        PROVINCE_BY_IDCARD: {
            d: "Calculate the province of birthplace based on the Chinese ID number. Support 15 or 18",
            a: "Get the province of birthplace based on the ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        CITY_BY_IDCARD: {
            d: "Calculate the city of birthplace based on the Chinese ID number. Support 15 or 18",
            a: "Get the city of birthplace based on the ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        STAR_BY_IDCARD: {
            d: "Calculate the constellation based on the Chinese ID number. Support 15 or 18",
            a: "Get the constellation based on the ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        ANIMAL_BY_IDCARD: {
            d: "Calculate the zodiac (rat, ox, tiger, rabbit...) based on the Chinese ID number. Support 15 or 18",
            a: "Get the zodiac according to the ID number.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        ISIDCARD: {
            d: "Verify that the format of the ID card is correct. Support 15 or 18",
            a: "Verify the correctness of the ID card format.",
            p: [
                {
                    name: "ID number",
                    detail: "15-digit or 18-digit ID number or range.",
                },
            ],
        },
        DM_TEXT_CUTWORD: {
            d: "Text segmentation. Split a series of words into a series of individual words",
            a: "Chinese text segmentation.",
            p: [
                {
                    name: "Text",
                    detail: "Any text that needs word segmentation.",
                },
                {
                    name: "Word segmentation mode",
                    detail: "The default is 0[precision mode], 1[full mode], 2[search engine mode].",
                },
            ],
        },
        DM_TEXT_TFIDF: {
            d: "Use tf-idf algorithm for keyword extraction. Identify keywords from a series of text",
            a: "tf-idf keyword recognition.",
            p: [
                {
                    name: "Text",
                    detail: "Any text that needs word segmentation.",
                },
                {
                    name: "Number of keywords",
                    detail: "The number of keywords returned by the algorithm, the default is 20",
                },
                {
                    name: "Corpus",
                    detail: "Select a corpus in a specific field, the default is 0[General], 1[Finance], 2[Medical]",
                },
            ],
        },
        DM_TEXT_TEXTRANK: {
            d: "Use TextRank algorithm to extract keywords. Identify keywords from a series of text",
            a: "TextRank keyword recognition.",
            p: [
                {
                    name: "Text",
                    detail: "Any text that needs word segmentation.",
                },
                {
                    name: "Number of keywords",
                    detail: "The number of keywords returned by the algorithm, the default is 20",
                },
                {
                    name: "Corpus",
                    detail: "Select a corpus in a specific field, the default is 0[General], 1[Finance], 2[Medical]",
                },
            ],
        },
        DATA_CN_STOCK_CLOSE: {
            d: "According to the stock code and date, return the corresponding stock closing price of A shares.",
            a: "Returns the closing price of stock.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        DATA_CN_STOCK_OPEN: {
            d: "According to the stock code and date, return the opening price of stock.",
            a: "Return the opening price of a shares.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        DATA_CN_STOCK_MAX: {
            d: "According to the stock code and date, return the highest price of stock.",
            a: "Return the highest price of stock.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        DATA_CN_STOCK_MIN: {
            d: "According to the stock code and date, return the lowest price of stock.",
            a: "Returns the lowest price of stock.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        DATA_CN_STOCK_VOLUMN: {
            d: "According to the stock code and date, return the corresponding stock trading volume of A shares.",
            a: "Returns the corresponding stock trading volume of A shares.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        DATA_CN_STOCK_AMOUNT: {
            d: "According to the stock code and date, return the corresponding stock turnover of A shares.",
            a: "Returns the corresponding stock turnover of A shares.",
            p: [
                {
                    name: "Stock code",
                    detail: "6-digit stock code, required.",
                },
                {
                    name: "Date",
                    detail: "The trading day of the stock, the default is the latest trading day",
                },
                {
                    name: "Reversion and exclusion",
                    detail:
                        "Select the ex right restoration type of the stock, default to 0 [former reversion], 1 [original price], 2 [post reversion]",
                },
            ],
        },
        ISDATE: {
            d: "Returns whether a value is a date.",
            a: "Whether a value is a date.",
            p: [
                {
                    name: "value",
                    detail: "The value to be verified as a date.",
                },
            ],
        },
        LINESPLINES: {
            d: "Generate sparklines embedded in the cell to describe the continuous trend of data",
            a: "Generate sparklines line chart",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Line color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #2ec7c9",
                },
                {
                    name: "Line thickness",
                    detail: "Line thickness of the line graph, the default is 1px",
                },
                {
                    name: "Auxiliary line",
                    detail:
                        "A horizontal line, which can be min, max, avg, median, range or custom value, default 0 none",
                },
                {
                    name: "Auxiliary line color",
                    detail: "Color setting of auxiliary line, same as line color configuration, default #000",
                },
                {
                    name: "Maximum mark",
                    detail:
                        "Identifies the maximum value of the line graph, the same line color configuration, default 0 does not display",
                },
                {
                    name: "Minimum mark",
                    detail:
                        "Identify the minimum value of the line graph, the same line color configuration, default 0 does not display",
                },
                {
                    name: "Mark size",
                    detail: "The maximum and minimum mark size settings, the default is 1.5",
                },
            ],
        },
        AREASPLINES: {
            d:
                "Generate sparklines embedded in the cell area chart, generally used to describe the continuous cumulative value trend of the data",
            a: "Generate sparklines area chart",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Line color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #2ec7c9",
                },
                {
                    name: "Fill color",
                    detail: "Form an area chart, the same line color configuration, default 0 does not display",
                },
                {
                    name: "Line thickness",
                    detail: "Line thickness of the line graph, the default is 1px",
                },
                {
                    name: "Auxiliary line",
                    detail:
                        "A horizontal line, which can be min, max, avg, median, range or custom value, default 0 none",
                },
                {
                    name: "Auxiliary line color",
                    detail: "Color setting of auxiliary line, same as line color configuration, default #000",
                },
            ],
        },
        COLUMNSPLINES: {
            d:
                "Generate sparklines embedded in the vertical histogram of cells, generally used to describe the size of discrete data",
            a: "Generate sparklines vertical histogram",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Bar interval",
                    detail: "The distance between bars, the default is 1",
                },
                {
                    name: "Bar color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #fc5c5c",
                },
                {
                    name: "Negative bar color",
                    detail:
                        "Negative bar color setting, representing the color of negative value, same as the bar color configuration, default #97b552",
                },
                {
                    name: "Max",
                    detail:
                        "The maximum value of the bar chart, used to standardize the length of the bar chart, the default is to automatically calculate false, auto, null",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color palette can set the color of each bar individually, multiple settings can be set, and two formats are supported: 1 color such as #000, which means that the color of the first bar is black; 2 value range: color, such as -2:# 000 indicates that the bar with a value of -2 is black, 0:5:#000 indicates that the bar with a value of 0-5 is black, and the default is empty",
                },
            ],
        },
        STACKCOLUMNSPLINES: {
            d:
                "Generate sparklines, a cumulative vertical histogram embedded in a cell, generally used to describe the numerical size of multiple dimensions of discrete data",
            a: "Generate sparklines cumulative vertical histogram",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Stack by column",
                    detail: "If you need to stack by row, set this item to false or 0, the default is 1",
                },
                {
                    name: "Bar interval",
                    detail: "The distance between bars, the default is 1",
                },
                {
                    name: "Max",
                    detail:
                        "The maximum value of the cumulative bar, used to regulate the length of the bar, the default is to automatically calculate false, auto, null",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color palette can individually set the bar color of each dimension, which can be set to the range of A1:A10, etc. The default is #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
                },
            ],
        },
        BARSPLINES: {
            d: "Generate sparklines embedded in the cell, generally used to describe the size of discrete data",
            a: "Generate sparklines horizontal bar graph",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Bar interval",
                    detail: "The distance between bars, the default is 1",
                },
                {
                    name: "Bar color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #fc5c5c",
                },
                {
                    name: "Negative bar color",
                    detail:
                        "Negative bar color setting, representing the color of negative value, same as the bar color configuration, default #97b552",
                },
                {
                    name: "Max",
                    detail:
                        "The maximum value of the bar chart, used to standardize the length of the bar chart, the default is to automatically calculate false, auto, null",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color palette can set the color of each bar individually, multiple settings can be set, and two formats are supported: 1 color such as #000, which means that the color of the first bar is black; 2 value range: color, such as -2:# 000 indicates that the bar with a value of -2 is black, 0:5:#000 indicates that the bar with a value of 0-5 is black, and the default is empty",
                },
            ],
        },
        STACKBARSPLINES: {
            d:
                "Generate sparklines, a cumulative horizontal bar graph embedded in a cell, which is generally used to describe the numerical size of multiple dimensions of discrete data",
            a: "Generate sparklines cumulative horizontal bar graph",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Stack by column",
                    detail: "If you need to stack by row, set this item to false or 0, the default is 1",
                },
                {
                    name: "Bar interval",
                    detail: "The distance between bars, the default is 1",
                },
                {
                    name: "Max",
                    detail:
                        "The maximum value of the cumulative bar, used to regulate the length of the bar, the default is to automatically calculate false, auto, null",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color palette can individually set the bar color of each dimension, which can be set to the range of A1:A10, etc. The default is #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
                },
            ],
        },
        DISCRETESPLINES: {
            d: "Generate sparklines embedded in the cell, generally used to describe the trend of discrete data",
            a: "Generate sparklines discrete graph",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Segmentation threshold",
                    detail:
                        "Discrete graph column color distinction, for example: if the value is 0, blue is greater than 0, red is less than 0, and the default is 0",
                },
                {
                    name: "Above threshold color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #2ec7c9",
                },
                {
                    name: "Below threshold color",
                    detail:
                        "The color setting of the bar below the threshold, the same as the color above the threshold, default #fc5c5c",
                },
            ],
        },
        TRISTATESPLINES: {
            d:
                "Generate sparklines, a three-state graph embedded in the cell, which is generally used to describe the trend of three situations, such as winning, losing, or drawing.",
            a: "Generate sparklines three-state graph",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Bar interval",
                    detail: "The distance between bars, the default is 1",
                },
                {
                    name: "Bar color",
                    detail:
                        "The line color of the line graph can be range A1, color table index value or specific color value. Set it to 0 or false to not display it. It supports regx, rgb, rgba, etc. Default #fc5c5c",
                },
                {
                    name: "Negative bar color",
                    detail:
                        "Negative bar color setting, representing the color of negative value, same as the bar color configuration, default #97b552",
                },
                {
                    name: "Zero value bar color",
                    detail:
                        "Zero value bar color setting, representing 0 value color, the same color configuration of the bar, default #999",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color palette can set the color of each bar individually, multiple settings can be set, and two formats are supported: 1 color such as #000, which means that the color of the first bar is black; 2 value range: color, such as -2:# 000 indicates that the bar with a value of -2 is black, 0:5:#000 indicates that the bar with a value of 0-5 is black, and the default is empty",
                },
            ],
        },
        PIESPLINES: {
            d: "Generate sparklines pie chart embedded in the cell, generally used to describe the proportion of data",
            a: "Generate sparklines pie chart",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Rotation angle",
                    detail: "The rotation angle of the pie chart, the default is 0",
                },
                {
                    name: "border",
                    detail: "Pie chart border size, default is none 0",
                },
                {
                    name: "Border color",
                    detail: "The border color of the pie chart, the default is #000",
                },
                {
                    name: "Color palette",
                    detail:
                        "The color of the slice can be set in the palette, which can be set to the range of A1:A10, etc. The default is #2ec7c9, #fc5c5c, #5ab1ef, #ffb980...",
                },
            ],
        },
        BOXSPLINES: {
            d:
                "Generate sparklines embedded in the cell box plot, generally used to describe the statistical distribution of the data set",
            a: "Generate sparklines box plot",
            p: [
                {
                    name: "Range",
                    detail: "Range，Values can be calculated effectively, such as A1:A20, {1,2,3,4,5}, etc.",
                },
                {
                    name: "Outlier ratio",
                    detail:
                        "The threshold range of outliers, if it is 0 or false, it will not be displayed, the default is 1.5 times",
                },
                {
                    name: "Target value",
                    detail: "The target value setting on the box plot, the default is false and does not display",
                },
                {
                    name: "Point size",
                    detail: "The radius of the target point and outlier is set, the default is 1.5",
                },
            ],
        },
        BULLETSPLINES: {
            d: "Generate sparklines embedded in the cell, generally used to describe the task achievement rate",
            a: "Generating sparklines bullets",
            p: [
                {
                    name: "Target",
                    detail:
                        "The numerical value can be calculated effectively for the achieved target value, such as A1, 100, etc.",
                },
                {
                    name: "achieved",
                    detail:
                        "Only when the value is completed can the value be calculated effectively, such as A1, 100, etc.",
                },
                {
                    name: "Contrast",
                    detail:
                        "Comparative values, such as excess, minimum, and bottom line for awards, can be effectively calculated, such as A1, 100, etc. You can set up to 9 comparison values",
                },
            ],
        },
        COMPOSESPLINES: {
            d: "Support multiple types of pictures in the same cell, each parameter represents a sparklines diagram",
            a: "Combine sparklines graphs into one cell",
            p: [
                {
                    name: "config",
                    detail:
                        "Sparklines chart settings, such as A1:A20, a completed pie chart, line chart settings, etc.",
                },
            ],
        },
        SORT: {
            d: "Sorts the rows of a given array or range by the values in one or more columns.",
            a: "Sorts rows of range by specified column.",
            p: [
                {
                    name: "range",
                    detail: "The data to be sorted.",
                },
                {
                    name: "sort_column",
                    detail:
                        "The index of the column in `range` or a range outside of `range` containing the values by which to sort.",
                },
                {
                    name: "is_ascending",
                    detail:
                        "`TRUE` or `FALSE` indicating whether to sort `sort_column` in ascending order. `FALSE` sorts in descending order.",
                },
                {
                    name: "sort_column2",
                    detail: "Additional columns.",
                },
            ],
        },
        FILTER: {
            d:
                "Returns a filtered version of the source range, returning only rows or columns which meet the specified conditions.",
            a: "Filters a range based off provided conditions.",
            p: [
                {
                    name: "range",
                    detail: "The data to be filtered.",
                },
                {
                    name: "condition1",
                    detail:
                        "A column or row containing true or false values corresponding to the first column or row of `range`, or an array formula evaluating to true or false.",
                },
                {
                    name: "condition2",
                    detail:
                        "Additional rows or columns containing boolean values `TRUE` or `FALSE` indicating whether the corresponding row or column in `range` should pass through `FILTER`. Can also contain array formula expressions which evaluate to such rows or columns. All conditions must be of the same type (row or column). Mixing row conditions and column conditions is not permitted.",
                },
            ],
        },
        UNIQUE: {
            d:
                "Returns unique rows in the provided source range, discarding duplicates. Rows are returned in the order in which they first appear in the source range.",
            a: "Unique rows in the provided source range.",
            p: [
                {
                    name: "range",
                    detail: "The data to filter by unique entries.",
                },
                {
                    name: "by_col",
                    detail:
                        "[Option] - Logical value, indicating how to compare; by row = FALSE() or omitted; by column = TRUE().",
                },
                {
                    name: "occurs_once",
                    detail:
                        "[Option] - Logical value, only one occurrence in the unique value is returned = TRUE(); including all unique values = FALSE() or omitted.",
                },
            ],
        },
        RANDARRAY: {
            d:
                "Returns a grid of random numbers between 0 inclusive and 1 exclusive. The grid size will match the provided rows and columns arguments. If neither rows nor columns are provided, then the grid will be size 1 x 1.",
            a: "Returns a grid of random numbers.",
            p: [
                {
                    name: "rows",
                    detail: "The number of rows to populate with a random number.",
                },
                {
                    name: "columns",
                    detail: "The number of columns to populate with a random number.",
                },
            ],
        },
        SEQUENCE: {
            d:
                "Returns a grid of sequential numbers starting at a specified start value and  increasing by a specified step size. By default, the sequence starts at and  increases by 1.",
            a: "Returns a grid of sequential numbers.",
            p: [
                {
                    name: "rows",
                    detail: "The number of rows in the function's resulting grid.",
                },
                {
                    name: "columns",
                    detail:
                        "The number of columns in the function's resulting grid. If omitted, the result grid will have 1 column.",
                },
                {
                    name: "start",
                    detail: "The number, at which to start the sequence. If omitted, the sequence will start at 1.",
                },
                {
                    name: "step",
                    detail:
                        "The amount each value in the sequence will differ by. If omitted, each value will differ by 1.",
                },
            ],
        },
        EVALUATE: {
            d: "Evaluate a formula or expression expressed in words and return the result",
            a: "Evaluate according to literal formula or expression.",
            p: [
                {
                    name: "expression",
                    detail: "Formula or expression",
                },
            ],
        },
        REMOTE: {
            d: "Calls a function on a remote server",
            a: "Calls a function on a remote back end server/API.",
            p: [
                {
                    name: "remote_expression",
                    detail: "Formula",
                },
            ],
        },
    },
    "toolbar": {
        "undo": "실행 취소",
        "redo": "다시 실행",
        "paintFormat": "서식 복사",
        "currencyFormat": "통화 형식으로 지정",
        "percentageFormat": "백분율 형식으로 지정",
        "numberDecrease": "소수점 자릿수 줄이기",
        "numberIncrease": "소수점 자릿수 늘리기",
        "moreFormats": "기타 형식",
        "font": "글꼴",
        "fontSize": "글꼴 크기",
        "bold": "굵게 (Ctrl+B)",
        "italic": "기울임꼴 (Ctrl+I)",
        "strikethrough": "취소선 (Alt+Shift+5)",
        "underline": "밑줄",
        "textColor": "텍스트 색상",
        "chooseColor": "색상 선택",
        "resetColor": "재설정",
        "customColor": "사용자 지정",
        "alternatingColors": "교차 색상",
        "confirmColor": "확인",
        "cancelColor": "취소",
        "collapse": "접기",
        "fillColor": "채우기 색상",
        "border": "테두리",
        "borderStyle": "테두리 스타일",
        "mergeCell": "셀 병합",
        "chooseMergeType": "병합 유형 선택",
        "horizontalAlign": "가로 정렬",
        "verticalAlign": "세로 정렬",
        "alignment": "맞춤",
        "textWrap": "텍스트 줄 바꿈",
        "textWrapMode": "줄 바꿈 모드",
        "textRotate": "텍스트 회전",
        "textRotateMode": "회전 모드",
        "freezeTopRow": "첫 행 고정",
        "sortAndFilter": "정렬 및 필터",
        "findAndReplace": "찾기 및 바꾸기",
        "sum": "합계",
        "autoSum": "자동 합계",
        "moreFunction": "함수 더보기",
        "conditionalFormat": "조건부 서식",
        "postil": "메모",
        "pivotTable": "피벗 테이블",
        "chart": "차트",
        "screenshot": "스크린샷",
        "splitColumn": "텍스트 나누기",
        "insertImage": "이미지 삽입",
        "exportXlsx": "XLSX 내보내기",
        "insertLink": "링크 삽입",
        "dataVerification": "데이터 유효성 검사",
        "protection": "시트 보호",
        "clearText": "색상 지우기",
        "noColorSelectedText": "선택된 색상이 없습니다",
        "toolMore": "더보기",
        "toolLess": "간소화",
        "toolClose": "닫기",
        "toolMoreTip": "추가 기능",
        "moreOptions": "추가 옵션",
        "cellFormat": "셀 서식 설정",
        "print": "인쇄"
    },
    "alternatingColors": {
        "applyRange": "적용 범위",
        "selectRange": "데이터 범위 선택",
        "header": "머리글",
        "footer": "바닥글",
        "errorInfo": "여러 선택 영역에는 이 작업을 수행할 수 없습니다. 단일 영역을 선택하고 다시 시도하세요.",
        "textTitle": "서식 스타일",
        "custom": "사용자 지정",
        "close": "닫기",
        "selectionTextColor": "클릭하여 텍스트 색상 선택",
        "selectionCellColor": "클릭하여 셀 색상 선택",
        "removeColor": "교차 색상 제거",
        "colorShow": "색상",
        "currentColor": "현재",
        "tipSelectRange": "교차 색상을 적용할 범위를 선택하세요",
        "errorNoRange": "선택된 범위가 없습니다",
        "errorExistColors": "교차 색상이 이미 존재하여 편집할 수 없습니다"
    },
    "button": {
        "confirm": "확인",
        "cancel": "취소",
        "close": "닫기",
        "update": "업데이트",
        "delete": "삭제",
        "insert": "삽입",
        "prevPage": "이전",
        "nextPage": "다음",
        "total": "전체:"
    },
    "paint": {
        "start": "서식 복사 시작",
        "end": "ESC",
        "tipSelectRange": "복사할 범위를 선택하세요",
        "tipNotMulti": "여러 선택 영역에는 이 작업을 수행할 수 없습니다"
    },
    "format": {
        "moreCurrency": "기타 통화 형식",
        "moreDateTime": "기타 날짜 및 시간 형식",
        "moreNumber": "기타 숫자 형식",
        "titleCurrency": "통화 형식",
        "decimalPlaces": "소수점 자릿수",
        "titleDateTime": "날짜 및 시간 형식",
        "titleNumber": "숫자 형식"
    },
    "info": {
        "detailUpdate": "새로 열림",
        "detailSave": "로컬 캐시 복원됨",
        "row": "",
        "column": "",
        "loading": "불러오는 중...",
        "copy": "복사",
        "return": "나가기",
        "rename": "이름 바꾸기",
        "tips": "통합 문서 이름 바꾸기",
        "noName": "제목 없는 스프레드시트",
        "wait": "업데이트 대기 중",
        "add": "추가",
        "addLast": "행 아래로 추가",
        "backTop": "맨 위로 이동",
        "pageInfo": "총 ${total}개, ${totalPage}페이지 중 현재 ${currentPage}페이지",
        "nextPage": "다음",
        "tipInputNumber": "숫자를 입력하세요",
        "tipInputNumberLimit": "증가 범위는 1~100 사이여야 합니다",
        "tipRowHeightLimit": "행 높이는 0 ~ 545 사이여야 합니다",
        "tipColumnWidthLimit": "열 너비는 0 ~ 2038 사이여야 합니다",
        "pageInfoFull": "총 ${total}개, ${totalPage}페이지, 모든 데이터 표시됨"
    },
    "currencyDetail": {
        "RMB": "위안화",
        "USdollar": "미국 달러",
        "EUR": "유로",
        "GBP": "영국 파운드",
        "HK": "홍콩 달러",
        "JPY": "일본 엔",
        "AlbanianLek": "알바니아 렉",
        "AlgerianDinar": "알제리 디나르",
        "Afghani": "아프가니",
        "ArgentinePeso": "아르헨티나 페소",
        "UnitedArabEmiratesDirham": "아랍에미리트 디르함",
        "ArubanFlorin": "아루바 플로린",
        "OmaniRial": "오만 리알",
        "Azerbaijanimanat": "아제르바이잔 마나트",
        "EgyptianPound": "이집트 파운드",
        "EthiopianBirr": "에티오피아 비르",
        "AngolaKwanza": "앙골라 콴자",
        "AustralianDollar": "호주 달러",
        "Patacas": "마카오 파타카",
        "BarbadosDollar": "바베이도스 달러",
        "PapuaNewGuineaKina": "파푸아뉴기니 키나",
        "BahamianDollar": "바하마 달러",
        "PakistanRupee": "파키스탄 루피",
        "ParaguayanGuarani": "파라과이 과라니",
        "BahrainiDinar": "바레인 디나르",
        "PanamanianBalboa": "파나마 발보아",
        "Brazilianreal": "브라질 레알",
        "Belarusianruble": "벨라루스 루블",
        "BermudianDollar": "버뮤다 달러",
        "BulgarianLev": "불가리아 레프",
        "IcelandKrona": "아이슬란드 크로나",
        "BosniaHerzegovinaConvertibleMark": "보스니아 헤르체고비나 태환 마르크",
        "PolishZloty": "폴란드 즈워티",
        "Boliviano": "볼리비아노",
        "BelizeDollar": "벨리즈 달러",
        "BotswanaPula": "보츠와나 풀라",
        "NotDannuzhamu": "기타",
        "BurundiFranc": "부룬디 프랑",
        "NorthKoreanWon": "조선민주주의인민공화국 원",
        "DanishKrone": "덴마크 크로네",
        "EastCaribbeanDollar": "동카리브 달러",
        "DominicaPeso": "도미니카 페소",
        "RussianRuble": "러시아 루블",
        "EritreanNakfa": "에리트레아 나크파",
        "CFAfranc": "CFA 프랑",
        "PhilippinePeso": "필리핀 페소",
        "FijiDollar": "피지 달러",
        "CapeVerdeEscudo": "카보베르데 에스쿠도",
        "FalklandIslandsPound": "포클랜드제도 파운드",
        "GambianDalasi": "감비아 달라시",
        "Congolesefranc": "콩고 프랑",
        "ColombianPeso": "콜롬비아 페소",
        "CostaRicanColon": "코스타리카 콜론",
        "CubanPeso": "쿠바 페소",
        "Cubanconvertiblepeso": "쿠바 태환 페소",
        "GuyanaDollar": "가이아나 달러",
        "KazakhstanTenge": "카자흐스탄 텐게",
        "Haitiangourde": "아이티 구르드",
        "won": "원",
        "NetherlandsAntillesGuilder": "네덜란드령 안틸레스 길더",
        "Honduraslempiras": "온두라스 렘피라",
        "DjiboutiFranc": "지부티 프랑",
        "KyrgyzstanSom": "키르기스스탄 솜",
        "GuineaFranc": "기니 프랑",
        "CanadianDollar": "캐나다 달러",
        "GhanaianCedi": "가나 세디",
        "Cambodianriel": "캄보디아 리엘",
        "CzechKoruna": "체코 코루나",
        "ZimbabweDollar": "짐바브웨 달러",
        "QatariRiyal": "카타르 리얄",
        "CaymanIslandsDollar": "케이맨 제도 달러",
        "Comorianfranc": "코모로 프랑",
        "KuwaitiDinar": "쿠웨이트 디나르",
        "CroatianKuna": "크로아티아 쿠나",
        "KenyanShilling": "케냐 실링",
        "LesothoLoti": "레소토 로티",
        "LaoKip": "라오스 킵",
        "LebanesePound": "레바논 파운드",
        "Lithuanianlitas": "리투아니아 리타스",
        "LibyanDinar": "리비아 디나르",
        "LiberianDollar": "라이베리아 달러",
        "RwandaFranc": "르완다 프랑",
        "RomanianLeu": "루마니아 레우",
        "MalagasyAriary": "마다가스카르 아리아리",
        "MaldivianRufiyaa": "몰디브 루피아",
        "MalawiKwacha": "말라위 콰차",
        "MalaysianRinggit": "말레이시아 링깃",
        "MacedoniawearingDinar": "마케도니아 디나르",
        "MauritiusRupee": "모리셔스 루피",
        "MauritanianOuguiya": "모리타니 우기야",
        "MongolianTugrik": "몽골 투그릭",
        "BangladeshiTaka": "방글라데시 타카",
        "PeruvianNuevoSol": "페루 솔",
        "MyanmarKyat": "미얀마 짯",
        "MoldovanLeu": "몰도바 레우",
        "MoroccanDirham": "모로코 디르함",
        "MozambiqueMetical": "모잠비크 메티칼",
        "MexicanPeso": "멕시코 페소",
        "NamibianDollar": "나미비아 달러",
        "SouthAfricanRand": "남아프리카 랜드",
        "SouthSudanesePound": "남수단 파운드",
        "NicaraguaCordoba": "니카라과 코르도바",
        "NepaleseRupee": "네팔 루피",
        "NigerianNaira": "나이지리아 나이라",
        "NorwegianKrone": "노르웨이 크로네",
        "GeorgianLari": "조지아 라리",
        "RMBOffshore": "위안화(역외)",
        "SwedishKrona": "스웨덴 크로나",
        "SwissFranc": "스위스 프랑",
        "SerbianDinar": "세르비아 디나르",
        "SierraLeone": "시에라리온 리온",
        "SeychellesRupee": "세이셸 루피",
        "SaudiRiyal": "사우디아라비아 리얄",
        "SaoTomeDobra": "상투메 프린시페 도브라",
        "SaintHelenapound": "세인트헬레나 파운드",
        "SriLankaRupee": "스리랑카 루피",
        "SwazilandLilangeni": "에스와티니 릴랑게니",
        "SudanesePound": "수단 파운드",
        "Surinamesedollar": "수리남 달러",
        "SolomonIslandsDollar": "솔로몬 제도 달러",
        "SomaliShilling": "소말리아 실링",
        "TajikistanSomoni": "타지키스탄 소모니",
        "PacificFranc": "태평양 프랑",
        "ThaiBaht": "태국 바트",
        "TanzanianShilling": "탄자니아 실링",
        "TonganPaanga": "통가 파앙가",
        "TrinidadandTobagoDollar": "트리니다드 토바고 달러",
        "TunisianDinar": "튀니지 디나르",
        "TurkishLira": "터키 리라",
        "VanuatuVatu": "바누아투 바투",
        "GuatemalanQuetzal": "과테말라 케찰",
        "CommissionBolivar": "베네수엘라 볼리바르",
        "BruneiDollar": "브루나이 달러",
        "UgandanShilling": "우간다 실링",
        "UkrainianHryvnia": "우크라이나 흐리브냐",
        "UruguayanPeso": "우루과이 페소",
        "Uzbekistansom": "우즈베키스탄 솜",
        "WesternSamoaTala": "사모아 탈라",
        "SingaporeDollar": "싱가포르 달러",
        "NT": "신 타이완 달러",
        "NewZealandDollar": "뉴질랜드 달러",
        "HungarianForint": "헝가리 포린트",
        "SyrianPound": "시리아 파운드",
        "JamaicanDollar": "자메이카 달러",
        "ArmenianDram": "아르메니아 드람",
        "YemeniRial": "예멘 리알",
        "IraqiDinar": "이라크 디나르",
        "IranianRial": "이란 리알",
        "NewIsraeliShekel": "이스라엘 신 셰켈",
        "IndianRupee": "인도 루피",
        "IndonesianRupiah": "인도네시아 루피아",
        "JordanianDinar": "요르단 디나르",
        "VND": "베트남 동",
        "ZambianKwacha": "잠비아 콰차",
        "GibraltarPound": "지브롤터 파운드",
        "ChileanPeso": "칠레 페소",
        "CFAFrancBEAC": "중앙아프리카 CFA 프랑"
    },
    "defaultFmt": [
        { "text": "자동", "value": "General", "example": "" },
        { "text": "일반 텍스트", "value": "@", "example": "" },
        { "text": "", "value": "split", "example": "" },
        { "text": "숫자", "value": "##0.00", "example": "1000.12" },
        { "text": "백분율", "value": "#0.00%", "example": "12.21%" },
        { "text": "지수", "value": "0.00E+00", "example": "1.01E+5" },
        { "text": "", "value": "split", "example": "" },
        { "text": "회계", "value": "₩(0.00)", "example": "₩(1200.09)" },
        { "text": "통화", "value": "₩0.00", "example": "₩1200.09" },
        { "text": "", "value": "split", "example": "" },
        { "text": "날짜", "value": "yyyy-MM-dd", "example": "2017-11-29" },
        { "text": "시간", "value": "hh:mm AM/PM", "example": "3:00 PM" },
        { "text": "시간(24시간)", "value": "hh:mm", "example": "15:00" },
        { "text": "날짜 및 시간", "value": "yyyy-MM-dd hh:mm AM/PM", "example": "2017-11-29 3:00 PM" },
        { "text": "날짜 및 시간(24시간)", "value": "yyyy-MM-dd hh:mm", "example": "2017-11-29 15:00" },
        { "text": "", "value": "split", "example": "" },
        { "text": "사용자 지정 형식", "value": "fmtOtherSelf", "example": "more" }
    ],
    "dateFmtList": [
        {
            "name": "1930-08-05",
            "value": "yyyy-MM-dd"
        },
        {
            "name": "1930/8/5",
            "value": "yyyy/MM/dd"
        },
        {
            "name": "08-05",
            "value": "MM-dd"
        },
        {
            "name": "8-5",
            "value": "M-d"
        },
        {
            "name": "13:30:30",
            "value": "h:mm:ss"
        },
        {
            "name": "13:30",
            "value": "h:mm"
        },
        {
            "name": "오후 01:30",
            "value": "AM/PM hh:mm"
        },
        {
            "name": "오후 1:30",
            "value": "AM/PM h:mm"
        },
        {
            "name": "오후 1:30:30",
            "value": "AM/PM h:mm:ss"
        },
        {
            "name": "08-05 오후 01:30",
            "value": "MM-dd AM/PM hh:mm"
        }
    ],
    "fontFamily": {
        "MicrosoftYaHei": "YaHei"
    },
    "fontarray": ["Times New Roman", "Arial", "Tahoma", "Verdana"],
    "fontjson": { "times new roman": 0, arial: 1, tahoma: 2, verdana: 3 },
    "border": {
        "borderTop": "위쪽 테두리",
        "borderBottom": "아래쪽 테두리",
        "borderLeft": "왼쪽 테두리",
        "borderRight": "오른쪽 테두리",
        "borderNone": "테두리 없음",
        "borderAll": "모든 테두리",
        "borderOutside": "바깥쪽 테두리",
        "borderInside": "안쪽 테두리",
        "borderHorizontal": "가로 테두리",
        "borderVertical": "세로 테두리",
        "borderColor": "테두리 색상",
        "borderSize": "테두리 두께"
    }, 
    merge: {
        mergeAll: "전체 병합",
        mergeV: "세로 병합",
        mergeH: "가로 병합",
        mergeCancel: "병합 취소",
        overlappingError: "겹치는 영역은 병합할 수 없습니다.",
        partiallyError: "부분적으로 병합된 셀에는 이 작업을 수행할 수 없습니다.",
    },
    align: {
        left: "왼쪽",
        center: "가운데",
        right: "오른쪽",

        top: "위쪽",
        middle: "가운데",
        bottom: "아래쪽",
    },
    textWrap: {
        overflow: "넘치기",
        wrap: "텍스트 줄 바꿈",
        clip: "자르기",
    },
    rotation: {
        none: "없음",
        angleup: "위로 기울이기",
        angledown: "아래로 기울이기",
        vertical: "세로 텍스트",
        rotationUp: "위로 회전",
        rotationDown: "아래로 회전",
    },
    freezen: {
        default: "틀 고정",
        freezenRow: "첫 행 고정",
        freezenColumn: "첫 열 고정",
        freezenRC: "첫 행 및 첫 열 고정",
        freezenRowRange: "행 범위 고정",
        freezenColumnRange: "열 범위 고정",
        freezenRCRange: "행/열 범위 고정",
        freezenCancel: "고정 취소",

        noSeletionError: "선택된 영역이 없습니다.",
        rangeRCOverErrorTitle: "틀 고정 알림",
        rangeRCOverError:
            "고정된 창이 표시 영역을 벗어나 비정상적으로 작동할 수 있습니다. 고정 영역을 재설정해 주세요.",
    },
    sort: {
        asc: "오름차순",
        desc: "내림차순",
        custom: "사용자 지정 정렬",

        hasTitle: "데이터에 헤더 행이 있음",
        sortBy: "정렬 기준",
        addOthers: "정렬 열 추가",
        close: "닫기",
        confirm: "정렬",

        columnOperation: "열",
        secondaryTitle: "다음 기준",

        sortTitle: "범위 정렬",

        sortRangeTitle: "범위 정렬:",
        sortRangeTitleTo: "~",

        noRangeError:
            "다중 선택 영역에서는 이 작업을 수행할 수 없습니다. 단일 범위를 선택하고 다시 시도해 주세요.",
        mergeError: "선택 영역에 병합된 셀이 포함되어 있어 이 작업을 수행할 수 없습니다!",
        columnSortMergeError:
            "열 정렬은 전체 테이블 선택 영역으로 확장됩니다. 병합된 셀이 포함되어 있어 이 작업을 수행할 수 없습니다. 도구 모음의 정렬 기능을 사용해 주세요.",
    },
    filter: {
        filter: "필터 만들기",

        sortByAsc: "A-Z 정렬",
        sortByDesc: "Z-A 정렬",
        filterByColor: "색상별 필터링",
        filterByCondition: "조건별 필터링",
        filterByValues: "값별 필터링",

        filiterInputNone: "없음",

        filiterInputTip: "필터 값 입력",
        filiterRangeStart: "",
        filiterRangeStartTip: "수식 값",
        filiterRangeEnd: "및",
        filiterRangeEndTip: "수식 값",

        filterValueByAllBtn: "모두 선택",
        filterValueByClearBtn: "지우기",
        filterValueByInverseBtn: "반전",
        filterValueByTip: "값별 필터링",
        filterConform: "확인",
        filterCancel: "취소",
        clearFilter: "필터 지우기",

        conditionNone: "없음",
        conditionCellIsNull: "비어 있음",
        conditionCellNotNull: "비어 있지 않음",
        conditionCellTextContain: "텍스트 포함",
        conditionCellTextNotContain: "텍스트 미포함",
        conditionCellTextStart: "시작 텍스트",
        conditionCellTextEnd: "끝 텍스트",
        conditionCellTextEqual: "일치하는 텍스트",
        conditionCellDateEqual: "날짜 일치",
        conditionCellDateBefore: "지정일 이전",
        conditionCellDateAfter: "지정일 이후",
        conditionCellGreater: "보다 큼",
        conditionCellGreaterEqual: "크거나 같음",
        conditionCellLess: "보다 작음",
        conditionCellLessEqual: "작거나 같음",
        conditionCellEqual: "같음",
        conditionCellNotEqual: "같지 않음",
        conditionCellBetween: "범위 내",
        conditionCellNotBetween: "범위 외",

        filiterMoreDataTip: "데이터가 많습니다! 잠시만 기다려 주세요.",
        filiterMonthText: "월",
        filiterYearText: "년",
        filiterByColorTip: "셀 색상별 필터링",
        filiterByTextColorTip: "글꼴 색상별 필터링",
        filterContainerOneColorTip: "이 열에는 단일 색상만 포함되어 있습니다.",
        filterDateFormatTip: "날짜 형식",

        valueBlank: "(공백)",
        mergeError: "필터 선택 영역에 병합된 셀이 포함되어 있어 이 작업을 수행할 수 없습니다!",
    },
    rightclick: {
        copy: "복사",
        copyAs: "다른 형식으로 복사",
        paste: "붙여넣기",
        insert: "삽입",
        delete: "삭제",
        deleteCell: "셀 삭제",
        deleteSelected: "선택 항목 삭제",
        hide: "숨기기",
        hideSelected: "선택 항목 숨기기",
        showHide: "숨기기 취소",
        to: "방향",
        left: "왼쪽",
        right: "오른쪽",
        top: "위쪽",
        bottom: "아래쪽",
        moveLeft: "왼쪽으로 이동",
        moveUp: "위쪽으로 이동",
        add: "추가",
        row: "행",
        column: "열",
        width: "너비",
        height: "높이",
        number: "숫자",
        confirm: "확인",
        orderAZ: "A-Z 순",
        orderZA: "Z-A 순",
        clearContent: "내용 지우기",
        matrix: "행렬 연산",
        sortSelection: "정렬",
        filterSelection: "필터",
        chartGeneration: "차트 만들기",
        firstLineTitle: "첫 번째 줄 제목",
        untitled: "제목 없음",
        array1: "1차원 배열",
        array2: "2차원 배열",
        array3: "다차원 배열",
        diagonal: "대각선",
        antiDiagonal: "역대각선",
        diagonalOffset: "대각선 오프셋",
        offset: "오프셋",
        boolean: "부울",
        flip: "뒤집기",
        upAndDown: "상하 반전",
        leftAndRight: "좌우 반전",
        clockwise: "시계 방향",
        counterclockwise: "반시계 방향",
        transpose: "전치",
        matrixCalculation: "행렬 계산",
        plus: "더하기",
        minus: "빼기",
        multiply: "곱하기",
        divided: "나누기",
        power: "거듭제곱",
        root: "제곱근",
        log: "로그",
        delete0: "양쪽 끝의 0 값 삭제",
        removeDuplicate: "중복 값 제거",
        byRow: "행 기준",
        byCol: "열 기준",
        generateNewMatrix: "새 행렬 생성",
    },
    comment: {
        insert: "삽입",
        edit: "편집",
        delete: "삭제",
        showOne: "메모 표시/숨기기",
        showAll: "모든 메모 표시/숨기기",
    },
    screenshot: {
        screenshotTipNoSelection: "스크린샷 범위를 선택해 주세요.",
        screenshotTipTitle: "경고!",
        screenshotTipHasMerge: "병합된 셀에는 이 작업을 수행할 수 없습니다.",
        screenshotTipHasMulti: "다중 선택 영역에서는 이 작업을 수행할 수 없습니다.",
        screenshotTipSuccess: "성공",
        screenshotImageName: "스크린샷",

        downLoadClose: "닫기",
        downLoadCopy: "클립보드에 복사",
        downLoadBtn: "다운로드",
        browserNotTip: "IE 브라우저는 지원하지 않습니다!",
        rightclickTip: '이미지에서 마우스 우클릭 후 "복사"를 눌러주세요.',
        successTip: '성공했습니다 (붙여넣기가 실패할 경우 이미지에서 우클릭하여 "이미지 복사"를 선택하세요).',
    },
    splitText: {
        splitDelimiters: "구분 기호",
        splitOther: "기타",
        splitContinueSymbol: "연속된 구분 기호를 하나로 취급",
        splitDataPreview: "미리 보기",
        splitTextTitle: "텍스트 나누기",
        splitConfirmToExe: "이미 데이터가 존재합니다. 덮어쓰시겠습니까?",

        tipNoMulti:
            "다중 선택 영역에서는 이 작업을 수행할 수 없습니다. 단일 영역을 선택하고 다시 시도해 주세요.",
        tipNoMultiColumn:
            "한 번에 한 열의 데이터만 변환할 수 있습니다. 선택한 영역은 여러 행을 포함할 수 있으나 여러 열을 포함할 수는 없습니다. 단일 열 범위를 선택한 후 다시 시도해 주세요.",
    },
    imageText: {
        imageSetting: "이미지 설정",
        close: "닫기",
        conventional: "기본",
        moveCell1: "셀 이동 및 크기 조절",
        moveCell2: "셀 이동 및 크기 고정",
        moveCell3: "셀 이동 및 크기 조절 안 함",
        fixedPos: "위치 고정",
        border: "테두리",
        width: "너비",
        radius: "모서리 둥글기",
        style: "스타일",
        solid: "실선",
        dashed: "파선",
        dotted: "점선",
        double: "이중 실선",
        color: "색상",
    },
    punctuation: {
        tab: "탭",
        semicolon: "세미콜론",
        comma: "쉼표",
        space: "공백",
    },
    findAndReplace: {
        find: "찾기",
        replace: "바꾸기",
        goto: "이동",
        location: "위치",
        formula: "수식",
        date: "날짜",
        number: "숫자",
        string: "문자열",
        error: "오류",
        condition: "조건",
        rowSpan: "행 병합",
        columnSpan: "열 병합",
        locationExample: "위치",
        lessTwoRowTip: "두 개 이상의 행을 선택해 주세요.",
        lessTwoColumnTip: "두 개 이상의 열을 선택해 주세요.",

        findTextbox: "찾을 내용",
        replaceTextbox: "바꿀 내용",

        regexTextbox: "정규 표현식",
        wholeTextbox: "전체 단어 일치",
        distinguishTextbox: "대소문자 구별",

        allReplaceBtn: "모두 바꾸기",
        replaceBtn: "바꾸기",
        allFindBtn: "모두 찾기",
        findBtn: "다음 찾기",

        noFindTip: "항목을 찾을 수 없습니다.",
        modeTip: "현재 모드에서는 이 작업을 사용할 수 없습니다.",

        searchTargetSheet: "시트",
        searchTargetCell: "셀",
        searchTargetValue: "값",

        searchInputTip: "검색할 내용을 입력하세요.",

        noReplceTip: "바꿀 내용이 없습니다.",
        noMatchTip: "일치하는 항목이 없습니다.",

        successTip: "${xlength}개 항목을 찾았습니다.",

        locationConstant: "상수",
        locationFormula: "수식",
        locationDate: "날짜",
        locationDigital: "숫자",
        locationString: "문자열",
        locationBool: "논리값",
        locationError: "오류",
        locationNull: "빈 값",
        locationCondition: "조건부 서식",
        locationRowSpan: "행 병합",
        locationColumnSpan: "열 병합",

        locationTiplessTwoRow: "두 개 이상의 행을 선택해 주세요.",
        locationTiplessTwoColumn: "두 개 이상의 열을 선택해 주세요.",
        locationTipNotFindCell: "셀을 찾을 수 없습니다.",
    },
    sheetconfig: {
        delete: "삭제",
        copy: "복사",
        rename: "이름 바꾸기",
        changeColor: "색상 변경",
        hide: "숨기기",
        unhide: "숨기기 취소",
        moveLeft: "왼쪽으로 이동",
        moveRight: "오른쪽으로 이동",
        resetColor: "색상 초기화",
        cancelText: "취소",
        chooseText: "색상 확인",

        tipNameRepeat: "시트 이름이 중복될 수 없습니다! 수정해 주세요.",
        noMoreSheet:
            "통합 문서에는 최소한 하나의 표시되는 워크시트가 있어야 합니다. 선택한 워크시트를 삭제하려면 새 워크시트를 삽입하거나 숨겨진 워크시트를 표시해 주세요.",
        confirmDelete: "정말 삭제하시겠습니까?",
        redoDelete: "Ctrl+Z로 취소할 수 있습니다.",
        noHide: "숨길 수 없습니다. 최소한 하나의 시트 탭은 유지해야 합니다.",
        chartEditNoOpt: "차트 편집 모드에서는 이 작업을 허용하지 않습니다!",
        sheetNameSpecCharError: "시트 이름에 다음 문자를 포함할 수 없습니다: [ ] : ? * / ' \"",
        sheetNamecannotIsEmptyError: "시트 이름은 비워둘 수 없습니다.",
    },
    conditionformat: {
        conditionformat_greaterThan: "Conditionformat-GreaterThan",
        conditionformat_greaterThan_title: "Format cells greater than",
        conditionformat_lessThan: "Conditionformat-LessThan",
        conditionformat_lessThan_title: "Format cells smaller than",
        conditionformat_betweenness: "Conditionformat-Betweenness",
        conditionformat_betweenness_title: "Format cells with values between",
        conditionformat_equal: "Conditionformat-Equal",
        conditionformat_equal_title: "Format cells equal to",
        conditionformat_textContains: "Conditionformat-TextContains",
        conditionformat_textContains_title: "Format cells containing the following text",
        conditionformat_occurrenceDate: "Conditionformat-OccurrenceDate",
        conditionformat_occurrenceDate_title: "Format cells containing the following dates",
        conditionformat_duplicateValue: "Conditionformat-DuplicateValue",
        conditionformat_duplicateValue_title: "Format cells containing the following types of values",
        conditionformat_top10: "Conditionformat-Top10",
        conditionformat_top10_percent: "Conditionformat-Top10%",
        conditionformat_top10_title: "Format the cells with the highest value",
        conditionformat_last10: "Conditionformat-Last10",
        conditionformat_last10_percent: "Conditionformat-Last10%",
        conditionformat_last10_title: "Format the cells with the smallest value",
        conditionformat_AboveAverage: "Conditionformat-AboveAverage",
        conditionformat_AboveAverage_title: "Format cells above average",
        conditionformat_SubAverage: "Conditionformat-SubAverage",
        conditionformat_SubAverage_title: "Format cells below average",
        rule: "Rule",
        newRule: "New rule",
        editRule: "Edit rule",
        deleteRule: "Delete rule",
        deleteCellRule: "Delete cell rule",
        deleteSheetRule: "Delete sheet rule",
        manageRules: "Management rules",
        showRules: "Show its formatting rules",
        highlightCellRules: "Highlight cell rules",
        itemSelectionRules: "Item selection rules",
        conditionformatManageRules: "Conditional Formatting Rule Manager",
        format: "Format",
        setFormat: "Set format",
        setAs: "Set as",
        setAsByArea: "For the selected area, set to",
        applyRange: "Apply range",
        selectRange: "Select application range",
        selectRange_percent: "Percentage of selected range",
        selectRange_average: "Average value of selected range",
        selectRange_value: "Value in the selected range",
        pleaseSelectRange: "Please select application range",
        selectDataRange: "Select data range",
        selectCell: "select cell",
        pleaseSelectCell: "Please select cell",
        pleaseSelectADate: "Please select a date",
        pleaseEnterInteger: "Please enter an integer between 1 and 1000",
        onlySingleCell: "Only a single cell can be referenced",
        conditionValueCanOnly: "The condition value can only be a number or a single cell",
        ruleTypeItem1: "Format all cells based on their respective values",
        ruleTypeItem2: "Only format cells that contain",
        ruleTypeItem2_title: "Only for cells that meet the following conditions",
        ruleTypeItem3: "Format only the top or bottom numbers",
        ruleTypeItem3_title: "Is the value in the following ranking",
        ruleTypeItem4: "Format only values above or below the average",
        ruleTypeItem4_title: "Is a value that satisfies the following conditions",
        ruleTypeItem5: "Format only unique or repeated values",
        ruleTypeItem6: "Use formulas to determine which cells to format",
        formula: "Formula",
        textColor: "Text color",
        cellColor: "Cell color",
        confirm: "Confirm",
        confirmColor: "Confirm color",
        cancel: "Cancel",
        close: "Close",
        clearColorSelect: "Clear color select",
        sheet: "Sheet",
        currentSheet: "Current Sheet",
        dataBar: "data bar",
        dataBarColor: "data bar color",
        gradientDataBar_1: "Blue-white gradient data bar",
        gradientDataBar_2: "Green-white gradient data bar",
        gradientDataBar_3: "Red-white gradient data bar",
        gradientDataBar_4: "Orange-white gradient stripes",
        gradientDataBar_5: "Light blue-white gradient stripes",
        gradientDataBar_6: "Purple-white gradient data bar",
        solidColorDataBar_1: "Blue data bar",
        solidColorDataBar_2: "Green data bar",
        solidColorDataBar_3: "Red data bar",
        solidColorDataBar_4: "Orange data bar",
        solidColorDataBar_5: "Light blue data bar",
        solidColorDataBar_6: "Purple data bar",
        colorGradation: "color gradation",
        colorGradation_1: "Green-yellow-red color gradation",
        colorGradation_2: "Red-yellow-green color gradation",
        colorGradation_3: "Green-white-red color gradation",
        colorGradation_4: "Red-white-green color gradation",
        colorGradation_5: "Blue-white-red color gradation",
        colorGradation_6: "Red-white-blue color gradation",
        colorGradation_7: "White-red color gradation",
        colorGradation_8: "Red-white color gradation",
        colorGradation_9: "Green-white color gradation",
        colorGradation_10: "White-green color gradation",
        colorGradation_11: "Green-yellow color gradation",
        colorGradation_12: "Yellow-green color gradation",
        icons: "icons",
        pleaseSelectIcon: "Please click to select a group of icons:",
        cellValue: "Cell value",
        specificText: "Specific text",
        occurrence: "Date",
        greaterThan: "Greater than",
        lessThan: "Less than",
        between: "Between",
        equal: "Equal",
        in: "In",
        between2: "",
        contain: "Contain",
        textContains: "Text contains",
        duplicateValue: "Duplicate value",
        uniqueValue: "Unique value",
        top: "Top",
        top10: "Top 10",
        top10_percent: "Top 10%",
        last: "Last",
        last10: "Last 10",
        last10_percent: "Last 10%",
        oneself: "",
        above: "Above",
        aboveAverage: "Above average",
        below: "Below",
        belowAverage: "Below average",
        all: "All",
        yesterday: "YTD",
        today: "Today",
        tomorrow: "Tomorrow",
        lastWeek: "Last week",
        thisWeek: "This week",
        lastMonth: "Last month",
        thisMonth: "This month",
        lastYear: "Last year",
        thisYear: "This year",
        last7days: "Last 7 days",
        last30days: "Last 30 days",
        next7days: "Next 7 days",
        next30days: "Next 30 days",
        next60days: "Next 60 days",
        chooseRuleType: "Choose rule type",
        editRuleDescription: "Edit rule description",
        newFormatRule: "New format rule",
        editFormatRule: "Edit format rule",
        formatStyle: "Style",
        fillType: "Fill",
        color: "Color",
        twocolor: "Two-color",
        tricolor: "Tricolor",
        multicolor: "Multi color",
        grayColor: "Gray color",
        gradient: "Gradient",
        solid: "Solid",
        maxValue: "Max value",
        medianValue: "Median value",
        minValue: "Min value",
        direction: "Direction",
        threeWayArrow: "Three-way arrow",
        fourWayArrow: "Four-way arrow",
        fiveWayArrow: "Five-way arrow",
        threeTriangles: "Three triangles",
        shape: "Shape",
        threeColorTrafficLight: "Three-color traffic light",
        fourColorTrafficLight: "Four-color traffic light",
        threeSigns: "Three signs",
        greenRedBlackGradient: "Green-red-black gradient",
        rimless: "Rimless",
        bordered: "Bordered",
        mark: "Mark",
        threeSymbols: "Three symbols",
        tricolorFlag: "Tricolor flag",
        circled: "Circled",
        noCircle: "No circle",
        grade: "Grade",
        grade4: "4 Grade",
        grade5: "5 Grade",
        threeStars: "3 Stars",
        fiveQuadrantDiagram: "Five-quadrant diagram",
        fiveBoxes: "5 Boxes",
    },
    insertLink: {
        linkText: "Text",
        linkType: "Link type",
        external: "External link",
        internal: "Internal link",
        linkAddress: "Link address",
        linkSheet: "Worksheet",
        linkCell: "Cell reference",
        linkTooltip: "Tooltip",
        placeholder1: "Please enter the web link address",
        placeholder2: "Please enter the cell to be quoted, example A1",
        placeholder3: "Please enter the prompt content",
        tooltipInfo1: "Please enter a valid link",
        tooltipInfo2: "Please enter the correct cell reference",
    },
    "insertLink": {
        "linkText": "텍스트",
        "linkType": "링크 유형",
        "external": "외부 링크",
        "internal": "내부 링크",
        "linkAddress": "링크 주소",
        "linkSheet": "워크시트",
        "linkCell": "셀 참조",
        "linkTooltip": "툴팁",
        "placeholder1": "웹 링크 주소를 입력하세요.",
        "placeholder2": "참조할 셀을 입력하세요(예: A1)",
        "placeholder3": "프롬프트 내용을 입력하세요.",
        "tooltipInfo1": "유효한 링크를 입력하세요.",
        "tooltipInfo2": "올바른 셀 참조를 입력하세요."
    },
    "dataVerification": {
        "cellRange": "셀 범위",
        "selectCellRange": "클릭하여 셀 범위 선택",
        "selectCellRange2": "셀 범위를 선택하세요.",
        "verificationCondition": "유효성 검사 조건",
        "allowMultiSelect": "다중 선택 허용",
        "dropdown": "드롭다운 목록",
        "checkbox": "확인란",
        "number": "숫자",
        "number_integer": "숫자-정수",
        "number_decimal": "숫자-소수",
        "text_content": "텍스트-내용",
        "text_length": "텍스트-길이",
        "date": "날짜",
        "validity": "유효성",
        "placeholder1": "옵션을 쉼표로 구분하여 입력하세요(예: 1,2,3,4,5)",
        "placeholder2": "내용을 입력하세요.",
        "placeholder3": "숫자 값(예: 10)",
        "placeholder4": "지정된 텍스트를 입력하세요.",
        "placeholder5": "셀이 선택되었을 때 표시될 프롬프트를 입력하세요.",
        "selected": "선택됨",
        "notSelected": "선택되지 않음",
        "between": "다음 값 사이",
        "notBetween": "다음 값 사이가 아님",
        "equal": "같음",
        "notEqualTo": "같지 않음",
        "moreThanThe": "초과",
        "lessThan": "미만",
        "greaterOrEqualTo": "크거나 같음",
        "lessThanOrEqualTo": "작거나 같음",
        "include": "포함",
        "exclude": "제외",
        "earlierThan": "더 이른 날짜",
        "noEarlierThan": "다음 날짜 이후",
        "laterThan": "더 늦은 날짜",
        "noLaterThan": "다음 날짜 이전",
        "identificationNumber": "주민등록번호",
        "phoneNumber": "전화번호",
        "remote": "자동 원격 가져오기 옵션",
        "prohibitInput": "입력 데이터가 유효하지 않을 때 입력 금지",
        "hintShow": "셀이 선택되었을 때 프롬프트 표시",
        "deleteVerification": "유효성 검사 삭제",
        "tooltipInfo1": "드롭다운 목록 옵션은 비워둘 수 없습니다.",
        "tooltipInfo2": "확인란 내용은 비워둘 수 없습니다.",
        "tooltipInfo3": "입력한 값이 숫자가 아닙니다.",
        "tooltipInfo4": "값 2는 값 1보다 작을 수 없습니다.",
        "tooltipInfo5": "텍스트 내용은 비워둘 수 없습니다.",
        "tooltipInfo6": "입력한 값이 날짜 형식이 아닙니다.",
        "tooltipInfo7": "날짜 2는 날짜 1보다 작을 수 없습니다.",
        "textlengthInteger": "텍스트 길이는 0보다 크거나 같은 정수여야 합니다."
    },
    "formula": {
        "sum": "합계",
        "average": "평균",
        "count": "개수",
        "max": "최대값",
        "min": "최소값",
        "ifGenerate": "If 수식 생성기",
        "find": "자세히 알아보기",
        "tipNotBelongToIf": "이 셀 함수는 If 수식에 속하지 않습니다!",
        "tipSelectCell": "함수를 삽입할 셀을 선택하세요.",
        "ifGenCompareValueTitle": "비교 값",
        "ifGenSelectCellTitle": "클릭하여 셀 선택",
        "ifGenRangeTitle": "범위",
        "ifGenRangeTo": "~",
        "ifGenRangeEvaluate": "범위 평가",
        "ifGenSelectRangeTitle": "클릭하여 범위 선택",
        "ifGenCutWay": "분할 방식",
        "ifGenCutSame": "동일 분할 값",
        "ifGenCutNpiece": "N등분 분할",
        "ifGenCutCustom": "사용자 지정",
        "ifGenCutConfirm": "확인",
        "ifGenTipSelectCell": "셀 선택",
        "ifGenTipSelectCellPlace": "셀을 선택하세요.",
        "ifGenTipSelectRange": "범위 선택",
        "ifGenTipSelectRangePlace": "범위를 선택하세요.",
        "ifGenTipNotNullValue": "비교 값은 비워둘 수 없습니다!",
        "ifGenTipLableTitile": "레이블",
        "ifGenTipRangeNotforNull": "범위는 비워둘 수 없습니다!",
        "ifGenTipCutValueNotforNull": "분할 값은 비워둘 수 없습니다!",
        "ifGenTipNotGenCondition": "생성할 수 있는 조건이 없습니다!"
    },
    "formulaMore": {
        "valueTitle": "값",
        "tipSelectDataRange": "데이터 범위 선택",
        "tipDataRangeTile": "데이터 범위",
        "findFunctionTitle": "함수 검색",
        "tipInputFunctionName": "함수 이름 또는 함수에 대한 간단한 설명",
        "Array": "배열",
        "Database": "데이터베이스",
        "Date": "날짜",
        "Engineering": "엔지니어링",
        "Filter": "필터",
        "Financial": "재무",
        "luckysheet": "럭키시트",
        "other": "기타",
        "Logical": "논리",
        "Lookup": "찾기/참조",
        "Math": "수학/삼각",
        "Operator": "연산자",
        "Parser": "구문 분석기",
        "Statistical": "통계",
        "Text": "텍스트",
        "dataMining": "데이터 마이닝",
        "selectFunctionTitle": "함수 선택",
        "calculationResult": "결과",
        "tipSuccessText": "성공",
        "tipParamErrorText": "매개변수 유형 오류",
        "helpClose": "닫기",
        "helpCollapse": "접기",
        "helpExample": "예시",
        "helpAbstract": "요약",
        "execfunctionError": "수식에 오류가 있습니다.",
        "execfunctionSelfError": "수식이 자신의 셀을 참조할 수 없습니다.",
        "execfunctionSelfErrorResult": "수식이 자신의 셀을 참조하여 정확한 계산 결과를 얻을 수 없습니다.",
        "allowRepeatText": "반복",
        "allowOptionText": "옵션",
        "selectCategory": "또는 범주 선택"
    },
    "drag": {
        "noMerge": "병합된 셀에는 이 작업을 수행할 수 없습니다.",
        "affectPivot": "피벗 테이블에 영향을 주므로 선택한 셀에 이 변경 사항을 적용할 수 없습니다!",
        "noMulti": "여러 개의 선택 영역에는 이 작업을 수행할 수 없습니다. 단일 영역을 선택하세요.",
        "noPaste": "여기에 이 내용을 붙여넣을 수 없습니다. 붙여넣을 영역의 셀을 선택한 후 다시 시도하세요.",
        "noPartMerge": "일부 병합된 셀이 포함된 영역에는 이 작업을 수행할 수 없습니다.",
        "inputCorrect": "올바른 값을 입력하세요.",
        "notLessOne": "행과 열의 수는 1보다 작을 수 없습니다.",
        "offsetColumnLessZero": "오프셋 열은 음수일 수 없습니다!",
        "pasteMustKeybordAlert": "시트에서의 복사 및 붙여넣기: 복사는 Ctrl + C, 붙여넣기는 Ctrl + V, 잘라내기는 Ctrl + X",
        "pasteMustKeybordAlertHTMLTitle": "시트에서 복사 및 붙여넣기",
        "pasteMustKeybordAlertHTML": "<span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + C</span>&nbsp;&nbsp;복사<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + V</span>&nbsp;&nbsp;붙여넣기<br/><span style='line-height: 1.0;font-size:36px;font-weight: bold;color:#666;'>Ctrl + X</span>&nbsp;&nbsp;잘라내기"
    },
    "paste": {
        "warning": "경고",
        "errorNotAllowMulti": "여러 개의 선택 영역에는 이 작업을 수행할 수 없습니다. 단일 범위를 선택한 후 다시 시도하세요.",
        "errorNotAllowMerged": "병합된 셀은 일부만 변경할 수 없습니다."
    },
    "pivotTable": {
        "title": "피벗 테이블",
        "closePannel": "닫기",
        "editRange": "범위",
        "tipPivotFieldSelected": "필드 선택",
        "tipClearSelectedField": "모든 필드 지우기",
        "btnClearSelectedField": "지우기",
        "btnFilter": "필터",
        "titleRow": "행",
        "titleColumn": "열",
        "titleValue": "값",
        "tipShowColumn": "통계 필드를 열로 표시",
        "tipShowRow": "통계 필드를 행으로 표시",
        "titleSelectionDataRange": "범위 선택",
        "titleDataRange": "데이터 범위",
        "valueSum": "합계",
        "valueStatisticsSUM": "합계",
        "valueStatisticsCOUNT": "개수",
        "valueStatisticsCOUNTA": "개수(비어 있지 않음)",
        "valueStatisticsCOUNTUNIQUE": "고유 값 개수",
        "valueStatisticsAVERAGE": "평균",
        "valueStatisticsMAX": "최대값",
        "valueStatisticsMIN": "최소값",
        "valueStatisticsMEDIAN": "중앙값",
        "valueStatisticsPRODUCT": "곱",
        "valueStatisticsSTDEV": "표준 편차(표본)",
        "valueStatisticsSTDEVP": "표준 편차(모집단)",
        "valueStatisticslet": "분산(표본)",
        "valueStatisticsVARP": "분산(모집단)",
        "errorNotAllowEdit": "비편집 모드에서는 이 작업을 수행할 수 없습니다!",
        "errorNotAllowMulti": "여러 개의 선택 영역에는 이 작업을 수행할 수 없습니다. 단일 범위를 선택한 후 다시 시도하세요.",
        "errorSelectRange": "새 피벗 테이블의 범위를 선택하세요.",
        "errorIsDamage": "이 피벗 테이블의 원본 데이터가 손상되었습니다!",
        "errorNotAllowPivotData": "피벗 테이블을 원본 데이터로 선택할 수 없습니다!",
        "errorSelectionRange": "선택 실패, 입력된 범위가 잘못되었습니다!",
        "errorIncreaseRange": "선택한 범위를 확장하세요!",
        "titleAddColumn": "피벗 테이블에 열 추가",
        "titleMoveColumn": "아래의 흰색 상자로 열 이동",
        "titleClearColumnFilter": "이 열의 필터 지우기",
        "titleFilterColumn": "필터",
        "titleSort": "정렬",
        "titleNoSort": "정렬 안 함",
        "titleSortAsc": "오름차순",
        "titleSortDesc": "내림차순",
        "titleSortBy": "정렬 기준",
        "titleShowSum": "총합계 표시",
        "titleStasticTrue": "예",
        "titleStasticFalse": "아니요"
    },
    "dropCell": {
        "copyCell": "셀 복사",
        "sequence": "연속 데이터 채우기",
        "onlyFormat": "서식만 채우기",
        "noFormat": "서식 없이 채우기",
        "day": "일",
        "workDay": "평일",
        "month": "월",
        "year": "년",
        "chineseNumber": "한자 숫자"
    },
    "imageCtrl": {
        "borderTile": "이미지 테두리 색상",
        "borderCur": "색상"
    },
    "protection": {
        "protectiontTitle": "보호",
        "enterPassword": "암호 입력(선택 사항)",
        "enterHintTitle": "편집 금지 시 프롬프트(선택 사항)",
        "enterHint": "변경하려는 셀이나 차트가 보호된 워크시트에 있습니다. 변경하려면 워크시트 보호를 해제하세요. 암호를 입력해야 할 수 있습니다.",
        "swichProtectionTip": "시트 및 잠긴 셀의 내용 보호",
        "authorityTitle": "이 시트의 사용자가 다음 작업을 수행할 수 있도록 허용:",
        "selectLockedCells": "잠긴 셀 선택",
        "selectunLockedCells": "잠금 해제된 셀 선택",
        "formatCells": "셀 서식 지정",
        "formatColumns": "열 서식 지정",
        "formatRows": "행 서식 지정",
        "insertColumns": "열 삽입",
        "insertRows": "행 삽입",
        "insertHyperlinks": "하이퍼링크 삽입",
        "deleteColumns": "열 삭제",
        "deleteRows": "행 삭제",
        "sort": "정렬",
        "filter": "필터",
        "usePivotTablereports": "피벗 테이블 보고서 사용",
        "editObjects": "개체 편집",
        "editScenarios": "시나리오 편집",
        "allowRangeTitle": "범위 사용자가 다음 작업을 수행할 수 있도록 허용:",
        "allowRangeAdd": "새로 만들기...",
        "allowRangeAddTitle": "제목",
        "allowRangeAddSqrf": "참조",
        "selectCellRange": "클릭하여 셀 범위 선택",
        "selectCellRangeHolder": "셀 범위",
        "allowRangeAddTitlePassword": "암호",
        "allowRangeAddTitleHint": "프롬프트",
        "allowRangeAddTitleHintTitle": "암호가 설정된 경우 프롬프트(선택 사항)",
        "allowRangeAddtitleDefault": "입력 범위 이름",
        "rangeItemDblclick": "더블 클릭하여 편집",
        "rangeItemHasPassword": "암호 있음",
        "rangeItemErrorTitleNull": "제목이 비어 있습니다.",
        "rangeItemErrorRangeNull": "참조가 비어 있습니다.",
        "rangeItemErrorRange": "참조에 오류가 있습니다.",
        "validationTitle": "암호 유효성 검사",
        "validationTips": "워크시트 보호를 해제하려면 암호를 입력해야 합니다.",
        "validationInputHint": "암호 입력",
        "checkPasswordNullalert": "암호가 필요합니다!",
        "checkPasswordWrongalert": "암호가 올바르지 않습니다. 다시 시도하세요!",
        "checkPasswordSucceedalert": "잠금 해제 성공!",
        "defaultRangeHintText": "해당 셀은 암호로 보호되어 있습니다.",
        "defaultSheetHintText": "셀 또는 차트가 보호된 워크시트에 있습니다. 변경하려면 워크시트 보호를 해제하세요. 암호를 입력해야 할 수 있습니다."
    },
    "cellFormat": {
        "cellFormatTitle": "셀 서식",
        "protection": "보호",
        "locked": "잠금",
        "hidden": "숨기기",
        "protectionTips": "셀을 잠그거나 수식을 숨기려면 워크시트를 보호하세요. 도구 모음에서 '시트 보호' 버튼을 클릭하세요.",
        "tipsPart": "일부 선택됨",
        "tipsAll": "모두 선택됨",
        "selectionIsNullAlert": "선택 영역이 필요합니다!",
        "sheetDataIsNullAlert": "오류, 데이터가 없습니다!"
    },
    "print": {
        "normalBtn": "기본",
        "layoutBtn": "페이지 레이아웃",
        "pageBtn": "페이지 나누기 미리 보기",
        "menuItemPrint": "인쇄 (Ctrl+P)",
        "menuItemAreas": "인쇄 영역",
        "menuItemRows": "인쇄 제목 행",
        "menuItemColumns": "인쇄 제목 열",
        "suggest": "인쇄 기능에 대한 제안 사항이 있으신가요?",
        "range": "인쇄 범위",
        "size": "용지 크기",
        "direction": "인쇄 방향",
        "horizontal": "가로",
        "vertical": "세로",
        "title": "인쇄 설정",
        "current": "현재 시트",
        "area": "선택한 범위",
        "letter": "레터",
        "paper": "타블로이드",
        "law": "리갈",
        "admin": "공공 행정 용지",
        "expire": "만료됨",
        "remain": "남은 일수",
        "error": "오류",
        "showLine": "격자선 표시",
        "show": "표시",
        "hide": "숨기기",
        "preview": "미리 보기"
    },
    "edit": {
        "typing": "입력 중"
    },
    "websocket": {
        "success": "WebSocket 연결 성공",
        "refresh": "WebSocket 연결에 오류가 발생했습니다. 페이지를 새로고침하세요!",
        "wait": "WebSocket 연결에 오류가 발생했습니다. 잠시 기다려 주세요!",
        "close": "WebSocket 연결이 종료되었습니다.",
        "contact": "서버 통신 오류가 발생했습니다. 페이지를 새로고침한 후 다시 시도하시고, 문제가 지속되면 관리자에게 문의하세요!",
        "support": "현재 브라우저는 WebSocket을 지원하지 않습니다."
    },
    "exportXlsx": {
        "notice": "내보내기 플러그인을 설정하세요.",
        "serverError": "서버 점검 중입니다.",
        "title": "XLSX 내보내기",
        "range": "범위",
        "currentSheet": "현재 시트",
        "allSheets": "모든 시트"
    }, 
};
