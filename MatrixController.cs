using System.Collections;
using UnityEngine;

public class MatrixController : MonoBehaviour {
    IEnumerator Start() {
        var mats = GetComponent<MeshRenderer>().materials;
        DisableGlow(mats);
        EnableMatrix(mats);
        yield return new WaitForSeconds(Random.Range(0f,5f));
        DisableMatrix(mats);
        var glow = 1f;
        while (glow >0) {
            glow -= Time.deltaTime;
            SetGlow(mats, glow);
            yield return null;
        }
        DisableGlow(mats);
    }

    static void SetGlow(Material[] mats, float glow) {
        foreach (var mat in mats)
            mat.SetFloat("_Glow", Mathf.Clamp01(glow));
    }

    static void DisableMatrix(Material[] mats) {
        foreach (var mat in mats)
            mat.SetFloat("_UseMatrix", 0);
    }

    static void EnableMatrix(Material[] mats) {
        foreach (var mat in mats)
            mat.SetFloat("_UseMatrix", 1);
    }

    static void DisableGlow(Material[] mats) {
        foreach (var mat in mats)
            mat.SetFloat("_Glow", 0);
    }
}