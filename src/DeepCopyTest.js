"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DeepCopy_1 = require("./DeepCopy");
describe("DeepCopy", function () {
    it("basic tests", function () {
        const dict = {
            "hello": "world"
        };
        const copy = DeepCopy_1.DeepCopy.deepCopy(dict);
        chai_1.assert.deepEqual(dict, copy);
    });
    it("basic integrity", function () {
        const dict = {
            "hello": "world"
        };
        const copy = DeepCopy_1.DeepCopy.deepCopy(dict);
        dict['foo'] = 'bar';
        chai_1.assert.deepEqual(copy, {
            "hello": "world"
        });
    });
    it("inner integrity", function () {
        const dict = {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        };
        const copy = DeepCopy_1.DeepCopy.deepCopy(dict);
        dict['inner']['foo'] = 'cat';
        chai_1.assert.deepEqual(copy, {
            "hello": "world",
            "inner": {
                "foo": "bar"
            }
        });
    });
    it("inner integrity with array", function () {
        const dict = {
            "hello": "world",
            "inner": [
                'bar'
            ]
        };
        const copy = DeepCopy_1.DeepCopy.deepCopy(dict);
        dict['inner'][0] = 'cat';
        chai_1.assert.deepEqual(copy, {
            "hello": "world",
            "inner": [
                'bar'
            ]
        });
    });
    it("deep copy of primitives", function () {
        chai_1.assert.equal(DeepCopy_1.DeepCopy.deepCopy(5), 5);
        chai_1.assert.equal(DeepCopy_1.DeepCopy.deepCopy("hello"), "hello");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVlcENvcHlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVlcENvcHlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBQzVCLHlDQUFzQztBQUV0QyxRQUFRLENBQUMsVUFBVSxFQUFFO0lBSWpCLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFFZCxNQUFNLElBQUksR0FBUTtZQUNkLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtRQUVsQixNQUFNLElBQUksR0FBUTtZQUNkLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXBCLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBRWxCLE1BQU0sSUFBSSxHQUFRO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxLQUFLO2FBQ2Y7U0FDSixDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUU3QixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEtBQUs7YUFDZjtTQUNKLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBRTdCLE1BQU0sSUFBSSxHQUFRO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUs7YUFDUjtTQUNKLENBQUM7UUFFRixNQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGFBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRTtnQkFDTCxLQUFLO2FBQ1I7U0FDSixDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTtRQUUxQixhQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLGFBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFdEQsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcclxuaW1wb3J0IHsgRGVlcENvcHkgfSBmcm9tICcuL0RlZXBDb3B5JztcclxuXHJcbmRlc2NyaWJlKFwiRGVlcENvcHlcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVE9ETzogbWFrZSBzdXJlIGFsbCBvZiB0aGUgZm9sbG93aW5nIHRlc3RzIHBhc3Mgd2l0aCB5b3VyIG5ldyBjb2RlLlxyXG5cclxuICAgIGl0KFwiYmFzaWMgdGVzdHNcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpY3Q6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJoZWxsb1wiOiBcIndvcmxkXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gRGVlcENvcHkuZGVlcENvcHkoZGljdCk7XHJcblxyXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwoZGljdCwgY29weSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJiYXNpYyBpbnRlZ3JpdHlcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpY3Q6IGFueSA9IHtcclxuICAgICAgICAgICAgXCJoZWxsb1wiOiBcIndvcmxkXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gRGVlcENvcHkuZGVlcENvcHkoZGljdCk7XHJcblxyXG4gICAgICAgIGRpY3RbJ2ZvbyddID0gJ2Jhcic7XHJcblxyXG4gICAgICAgIGFzc2VydC5kZWVwRXF1YWwoY29weSwge1xyXG4gICAgICAgICAgICBcImhlbGxvXCI6IFwid29ybGRcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiaW5uZXIgaW50ZWdyaXR5XCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkaWN0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiaGVsbG9cIjogXCJ3b3JsZFwiLFxyXG4gICAgICAgICAgICBcImlubmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZm9vXCI6IFwiYmFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcHkgPSBEZWVwQ29weS5kZWVwQ29weShkaWN0KTtcclxuXHJcbiAgICAgICAgZGljdFsnaW5uZXInXVsnZm9vJ10gPSAnY2F0JztcclxuXHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChjb3B5LCB7XHJcbiAgICAgICAgICAgIFwiaGVsbG9cIjogXCJ3b3JsZFwiLFxyXG4gICAgICAgICAgICBcImlubmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZm9vXCI6IFwiYmFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdChcImlubmVyIGludGVncml0eSB3aXRoIGFycmF5XCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkaWN0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgIFwiaGVsbG9cIjogXCJ3b3JsZFwiLFxyXG4gICAgICAgICAgICBcImlubmVyXCI6IFtcclxuICAgICAgICAgICAgICAgICdiYXInXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb3B5ID0gRGVlcENvcHkuZGVlcENvcHkoZGljdCk7XHJcblxyXG4gICAgICAgIGRpY3RbJ2lubmVyJ11bMF0gPSAnY2F0JztcclxuXHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChjb3B5LCB7XHJcbiAgICAgICAgICAgIFwiaGVsbG9cIjogXCJ3b3JsZFwiLFxyXG4gICAgICAgICAgICBcImlubmVyXCI6IFtcclxuICAgICAgICAgICAgICAgICdiYXInXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImRlZXAgY29weSBvZiBwcmltaXRpdmVzXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBhc3NlcnQuZXF1YWwoRGVlcENvcHkuZGVlcENvcHkoNSksIDUpO1xyXG4gICAgICAgIGFzc2VydC5lcXVhbChEZWVwQ29weS5kZWVwQ29weShcImhlbGxvXCIpLCBcImhlbGxvXCIpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSlcclxuIl19