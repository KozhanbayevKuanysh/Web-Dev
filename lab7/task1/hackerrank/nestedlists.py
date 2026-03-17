if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = set([student[1] for student in students])
    
    sorted_scores = sorted(list(scores))
    second_lowest_score = sorted_scores[1]

    result_names = [student[0] for student in students if student[1] == second_lowest_score]
    
    result_names.sort()

    for name in result_names:
        print(name)