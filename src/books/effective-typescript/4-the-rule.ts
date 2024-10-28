// Правило 4. Привыкайте к структурной типизации
// Правило 39. Добавлены _brand

interface Vector2D {
    x: number;
    y: number;
}
interface Vector3D {
    x: number;
    y: number;
    z: number;
}
interface Vector2DWithBrand extends Vector2D {
    _brand: "Vector2D";
}
interface Vector3DWithBrand extends Vector3D {
    _brand: "Vector3D";
}
interface Vector2DWithName extends Vector2DWithBrand {
    name: string;
}
interface Vector3DWithName extends Vector3DWithBrand {
    name: string;
}

class VectorObject {
    get2D(x: number, y: number): Vector2DWithBrand {
        return {
            _brand: "Vector2D",
            x: x,
            y: y,
        };
    }

    get3D(x: number, y: number, z: number): Vector3DWithBrand {
        return {
            _brand: "Vector3D",
            x: x,
            y: y,
            z: z,
        };
    }

    calculateLength(func: () => number): number {
        return func();
    }
}

class NamedVectorObject extends VectorObject {
    constructor(private name: string) {
        super();
    }

    get2D(x: number, y: number): Vector2DWithName {
        let v = super.get2D(x, y);
        return {
            ...v,
            name: this.name,
        };
    }

    get3D(x: number, y: number, z: number): Vector3DWithName {
        let v = super.get3D(x, y, z);
        return {
            ...v,
            name: this.name,
        };
    }
}

function normalize(v: Vector3D) {
    const length = v3DLength;
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}

function calculateLength_2D(v: Vector2DWithBrand): number {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

function calculateLength_3D(v: Vector3DWithBrand): number {
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}
const v_2D_One = new NamedVectorObject("One");
const v2D = v_2D_One.get2D(1, 2);
const v2DLength = v_2D_One.calculateLength(() => calculateLength_2D(v2D));
const v_3D_One = new NamedVectorObject("One");
const v3D = v_3D_One.get3D(1, 2, 3);
const v3DLength = v_3D_One.calculateLength(() => calculateLength_3D(v3D));

console.log(v2D);
console.log(v2DLength);
console.log(normalize({ x: 3, y: 4, z: 0 }));
