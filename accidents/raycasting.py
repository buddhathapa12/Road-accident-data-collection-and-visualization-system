class Point:
    def __init__(self,x,y):
        self.x =x
        self.y =y

class Polygon:
    def __init__(self, points):
        self.points = points

    @property
    def edges(self):
        edge_list = []

        for i , p in enumerate(self.points):
            p1 = p
            p2 = self.points[(i+1)% len(self.points)]
            edge_list.append((p1,p2))
        return edge_list

    def contains(self, point):
        _huge = sys.float_info.max
        _eps = 0.00001

        inside = False
        for edge in self.edges:
            A , B = edge[0],edge[1]

            if A.y> B.y:
                A ,B = B,A

            if point.y ==A.y or point.y == B.y:
                point.y += _eps
            
            if (point.y>B.y or point.y<A.y or point.x > max(A.x,B.x)):
                continue
            
            if point.x<min(A.x,B.x):
                inside = not inside
                continue
        
        return inside

# vertex = [(1,2),(2,3)]

# p = []

# n = len(vertex)
# for i in range (n):
#     a = Point(vertex[i])
#     p.append(a)

# print(p)