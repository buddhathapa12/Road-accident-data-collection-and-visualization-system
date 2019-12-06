from typing import NamedTuple
#from planar import Polygon

class Point(NamedTuple):
    def __init__(self,x,y):
        self.x = x
        self.y = y

p = Point(20,20)
# q = Point(1,2)
# r = Point(3,4)
#print(p.x)
# Given three colinear points p, q, r, the function checks if 
# point q lies on line segment 'pr' 
# def examp(q):
#     print(q)

# examp( p)
def onSegment(p :Point , q :Point  , r : Point ):
    if(q.x <= max(p.x , r.x)) and (q.x>= min(p.x, r.x)) and (q.y<=max(p.y, r.y)) and (q.y>= min(p.y, r.y)):
        return True
    else:
        return False

#onSegment(r,p,q)
# // To find  of ordered triplet (p, q, r). 
# // The function returns following values 
# // 0 --> p, q and r are colinear 
# // 1 --> Clockwise 
# // 2 --> Counterclockwise 

def doOrientation(p,q ,r):
    
    val = (q.y-p.y)* (r.x - q.x) - (q.x - p.x) * (r.y - q.y)

    if val == 0:
        return 0 #colinear
    elif val > 0:
        return 1  #clockwise
    else:
        return 2   #anticlockwise

# # The function that returns true if line segment 'p1q1' 
# # and 'p2q2' intersect.
def doIntersect(p1: Point,q1: Point,p2: Point,q2: Point):
    o1 = doOrientation(p1,q1,p2)
    return o1
# def doIntersect(p1, q1, p2, q2):

#     # // Find the four orientations needed for general and 
#     # // special cases 

#     o1 = doOrientation(p1, q1, p2)
#     o2 = doOrientation(p1, q1, q2)
#     o3 = doOrientation(p2, q2, p1)
#     o4 = doOrientation(p2, q2, q1)
    

#     #General case

#     if o1 !=o2 and o3 != o4 :
#         return True

#     #Special Cases
#     #p1, q1 and p2 are colinear and p2 lies on segment p1q1 
#     elif o1 == 0 and onSegment(p1, p2, q1) :
#         return True
    
#     #p1, q1 and p2 are colinear and q2 lies on segment p1q1 
#     elif o2 == 0 and onSegment(p1, q2, q1):
#         return True
  
#     #p2, q2 and p1 are colinear and p1 lies on segment p2q2 
#     elif o3 == 0 and onSegment(p2, p1, q2):
#         return True
  
#     #p2, q2 and q1 are colinear and q1 lies on segment p2q2 
#     elif o4 == 0 and onSegment(p2, q1, q2):
#         return TruePoint 

#     else:
#         return False #Doesn't fall in any of the above cases 

#Returns true if the point p lies inside the polygon[] with n vertices 
polygon = [Point(0, 0), Point(10, 0), (10, 10), (0, 10)]
n = len(polygon)
#print(polygon[0].x)
#print(doIntersect(polygon[0],polygon[1],polygon[2],polygon[3]))
print(doOrientation(polygon[0],polygon[1],p))
print (True)
# def isInside(polygon, n , p):
#     if n<3 :
#         return False

#     extreme = Point (float('inf'),p.y)

#     count = 0
#     i =0

    
#     next = (i+1)%n

#     #  // Check if the line segment from 'p' to 'extreme' intersects 
#     # // with the line segment from 'polygon[i]' to 'polygon[next]' 
#     if doIntersect(polygon[i] , polygon[next], p, extreme):
#         # // If the point 'p' is colinear with line segment 'i-next', 
#         # // then check if it lies on segment. If it lies, return true, 
#         # // otherwise false 
#         if doOrientation(polygon[i], p, polygon[next])==0:
#             return onSegment(polygon[i], p , polygon[next])
            
#         count =count+1
        
#     i = next

#     while (i!=0):
#         next = (i+1)%n

#         #  // Check if the line segment from 'p' to 'extreme' intersects 
#         # // with the line segment from 'polygon[i]' to 'polygon[next]' 
#         if doIntersect(polygon[i] , polygon[next], p, extreme):
#             # // If the point 'p' is colinear with line segment 'i-next', 
#             # // then check if it lies on segment. If it lies, return true, 
#             # // otherwise false 
#             if doOrientation(polygon[i], p, polygon[next])==0:
#                 return onSegment(polygon[i], p , polygon[next])
                
#             count =count+1
            
#         i = next

#     if count%2 == 1:
#         return True
#     else:
#         return False



# if isInside(polygon , n, p) == True:
#     print('Inside')
# else:
#     print('Outside')