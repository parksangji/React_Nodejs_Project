import sys
import pandas as pd

# def getValue(string):
#     print(string)
#     print('python3 run success')

def getValue(string):
    sp = string.split("<<<")
    op = [] * len(sp)
    for i in sp :
        op.append(i.split("\n"))
    del op[0]
    for i in op :
        print(i)

    



if __name__ =='__main__':
    getValue(sys.argv[1])

# 똑같은 매매(분매, 불타기) 과정을 
# 이미 진행하셨다면 안하셔도됨
# 분추매=분해한만큼 추가매수

# **<빗썸 단위:원>
# <<<매수추천>
# 프로톤   22.98
# 앵커   140.0
# 라이브피어   54,000
# 미스블록   193.5
# 클레이튼   1,754
# 보라   1,340 (고소공포증 환자는 패스)
# 온톨로지가스   1,002
# 다드   256.5

# <<<불타기>
# --약불
# 알고랜드   2,135

# <<<분할매도>
# --10%
# 아이젝   4,307

# --25%
# 이브이지   103.3

# --75%
# 네스트리   13.40
# 어거   22,180

# <<<올매도>
# 울트라