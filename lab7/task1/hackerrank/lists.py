if __name__ == '__main__':
    N = int(input())
    my_list = []

    for _ in range(N):
        command_line = input().split()
        cmd = command_line[0]
        
        if cmd == "insert":
            i = int(command_line[1])
            e = int(command_line[2])
            my_list.insert(i, e)
        elif cmd == "print":
            print(my_list)
        elif cmd == "remove":
            e = int(command_line[1])
            my_list.remove(e)
        elif cmd == "append":
            e = int(command_line[1])
            my_list.append(e)
        elif cmd == "sort":
            my_list.sort()
        elif cmd == "pop":
            my_list.pop()
        elif cmd == "reverse":
            my_list.reverse()